import dayjs from "dayjs";
import { type Browser, type Page } from "puppeteer";

import type { JobOffer, ScrappedDataResponse } from "shared/src/offers/offers.types";

import { generateId } from "@/utils/generate-id";
import { isContractTypesArr } from "@/components/offers/helpers/offers.utils";

import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";

import type { JobOfferJustjoin } from "@/types/offers/justjoin.types";
import { JOB_DATA_SOURCES } from "@/misc/constants";

const VIEWPORT_WIDTH = 800;
const VIEWPORT_HEIGHT = 980;

class ScrapperJustjoin extends ScrapperBase {
  protected maxPages: number;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public getScrappedData = async (): Promise<ScrappedDataResponse> => {
    const data = await this.saveScrappedData<JobOffer>();

    return { createdAt: new Date(Date.now()).toISOString(), data: data || [] };
  };

  protected async scrapePage<T>(pageNumber: number): Promise<T[] | undefined> {
    let { page } = this;
    if (!page) {
      page = await this.browser?.newPage();
    }

    if (!page) return;

    try {
      await page?.setViewport({
        width: VIEWPORT_WIDTH,
        height: VIEWPORT_HEIGHT,
      });

      const offers: T[] = [];
      await this.listenAndRestrictRequests(page);

      page?.on("response", async response => {
        const url = response.url();
        if (url.includes("https://api.justjoin.it/v2/user-panel/offers?")) {
          try {
            const contentType = response.headers()["content-type"];
            if (contentType && contentType.includes("application/json")) {
              const res = await response.json();
              console.log("Justjoin url: ", url);

              offers.push(...res.data);
            }
          } catch (err) {
            throw ErrorHandlerController.handleError(err);
          }
        }
      });

      await page?.goto(this.url, { waitUntil: "networkidle2" });

      const cookieBtn = await page
        ?.waitForSelector("#cookiescript_accept", {
          timeout: 5000,
        })
        .catch(() => {
          console.log("Cookie consent not found");
          return;
        });

      await cookieBtn?.click();
      await cookieBtn?.dispose();

      const content = await page?.evaluate(() => {
        const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });

      if (page) await this.scrollToEndOfPage(page);
      return [content?.props?.pageProps?.dehydratedState?.queries?.[0]?.state?.data?.pages?.[0]?.data, ...offers] as T[];
    } catch (err) {
      console.error(`Error processing page ${pageNumber}:`, err);
      return;
    } finally {
      if (page) await page?.close();
    }
  }

  private async scrollToEndOfPage(page: Page) {
    if (!page) return null;

    let prevScrollHeight = (await page.evaluate(() => document.body.scrollHeight)) as number;
    let currentScrollHeight: number = prevScrollHeight;

    const scrollHeightMap = new Map<number, number>();
    let sameScrollHeightCount = 0;

    const wait = (duration = 100) => new Promise(resolve => setTimeout(resolve, duration));

    const isFooterVisible = async () => {
      return await page.evaluate(() => {
        const footer = document.querySelector("footer");
        return footer && footer.getBoundingClientRect().top < window.innerHeight;
      });
    };

    while (!(await isFooterVisible())) {
      await page.evaluate(() => window.scrollBy(0, 960));
      await wait(200);

      currentScrollHeight = await page.evaluate(() => document.body.scrollHeight ?? 0);

      if (currentScrollHeight > prevScrollHeight) {
        prevScrollHeight = currentScrollHeight;
        sameScrollHeightCount = 0;
      } else {
        sameScrollHeightCount += 1;
      }

      if (sameScrollHeightCount > 3) {
        console.log({ prevScrollHeight, currentScrollHeight });
        console.log("Scrolling has been stuck!");
        await page.evaluate(() => window.scrollBy(0, -1400));
        sameScrollHeightCount = 0;
      }

      scrollHeightMap.set(currentScrollHeight, (scrollHeightMap.get(currentScrollHeight) || 0) + 1);
    }

    console.log("Footer found or end of page reached.");
    return;
  }

  protected standardizeData = (offers: JobOfferJustjoin[]): JobOffer[] => {
    if (!offers || !offers.length) return [];
    const expirationDate = dayjs(new Date()).add(1, "month").toISOString();

    return offers.map((offer): JobOffer => {
      const positionLevels = this.standardizePositionLevels(offer?.experienceLevel);
      const contractTypes = this.standardizeContractTypes(offer?.employmentTypes);
      const workModes = this.standardizeWorkModes(offer?.workplaceType);
      const workSchedules = this.standardizeWorkSchedules(offer?.workingTime);
      const salaryRange = this.standardizeSalary(offer?.employmentTypes);

      const idHash = `${offer?.title}-${offer?.companyName}-justjoin`;
      return {
        id: generateId(idHash),
        dataSourceCode: "justjoin",
        dataSource: JOB_DATA_SOURCES.justjoin,
        slug: offer?.slug,
        createdAt: offer?.publishedAt,
        expirationDate,
        positionName: offer?.title,
        company: {
          name: offer?.companyName,
          logoUrl: offer?.companyLogoThumbUrl,
        },
        positionLevels,
        contractTypes,
        workModes,
        workSchedules,
        salaryRange,
        technologies: offer?.requiredSkills,
        description: undefined,
        offerUrls: offer?.multilocation?.map(loc => `https://justjoin.it/offers/${loc?.slug}`),
        workplaces: offer?.multilocation?.map(place => {
          const workPlace = { city: "", address: null } as JobOffer["workplaces"][0];

          if (place?.city) workPlace.city = place.city;
          if (place?.street) workPlace.address = place?.street ?? null;
          return workPlace;
        }),
      } satisfies JobOffer;
      // return { ...parsedOffer, slug: generateJobOfferSlug(parsedOffer) } as JobOffer;
    });
  };

  private standardizeSalary(salary: JobOfferJustjoin["employmentTypes"] | undefined): JobOffer["salaryRange"] {
    if (!salary) return [];

    const min = salary.reduce((acc, curr) => {
      if (!acc) return curr.from ?? 0;
      return curr.from && curr.from < acc ? curr.from : acc;
    }, 0);
    const max = salary.reduce((acc, curr) => (curr.to && curr.to > acc ? curr.to : acc), 0);
    if (!min || !max) return [];

    const type = salary[0].gross ? "brutto" : "netto";
    const currency = (salary[0].currency ?? "pln") as "pln" | "usd";

    return [
      {
        min,
        max,
        currency,
        type,
        timeUnit: "month",
      },
    ];
  }

  protected standardizeContractTypes(types: JobOfferJustjoin["employmentTypes"] | undefined): JobOffer["contractTypes"] {
    if (!types || !types.length) return [];

    const standardizedTypes = types.reduce(
      (acc, _type) => {
        const type = _type.type.toLowerCase();

        switch (type) {
          case "b2b":
            acc.push("b2b");
            break;
          case "permanent":
            acc.push("uop");
            break;
          case "internship":
            acc.push("intern");
            break;
          case "mandate_contract":
            acc.push("uz");
            break;
          case "contract":
            acc.push("uod");
            break;
          default:
            return acc;
        }

        return acc;
      },
      [] as JobOffer["contractTypes"],
    );

    if (isContractTypesArr(standardizedTypes)) return standardizedTypes;
    else return [];
  }

  private standardizePositionLevels(level: JobOfferJustjoin["experienceLevel"] | undefined): JobOffer["positionLevels"] {
    switch (level) {
      case "junior":
        return ["junior"];
      case "mid":
        return ["mid"];
      case "senior":
        return ["senior"];
      case "c_level":
        return ["manager"];
      default:
        return ["junior"];
    }
  }

  private standardizeWorkSchedules(schedule: JobOfferJustjoin["workingTime"] | undefined): JobOffer["workSchedules"] {
    switch (schedule) {
      case "full_time":
        return ["full-time"];
      case "part-time":
        return ["part-time"];
      case "practice-internship":
        return ["internship"];
      case "freelance":
        return ["freelance"];
      default:
        return ["full-time"];
    }
  }

  private standardizeWorkModes(mode: JobOfferJustjoin["workplaceType"]): JobOffer["workModes"] {
    switch (mode) {
      case "remote":
        return ["remote"];
      case "hybrid":
        return ["hybrid"];
      case "office":
        return ["stationary"];
      default:
        return [];
    }
  }

  protected async getMaxPages() {
    if (!this.page) return 1;
    return 1;
  }
}

export { ScrapperJustjoin };
