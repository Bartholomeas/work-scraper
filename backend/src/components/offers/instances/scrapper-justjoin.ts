import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/instances/scrapper-base";
import type { Browser, Page } from "puppeteer";

import { generateId } from "@/utils/generate-id";

import { isContractTypesArr } from "@/components/offers/helpers/offers.utils";
import { JUSTJOIN_DATA_FILENAME } from "@/components/offers/helpers/offers.constants";

import type { JobOffer, JobQueryParams, ScrappedDataResponse } from "shared/src/offers/offers.types";
import type { JobOfferJustjoin } from "@/types/offers/justjoin.types";

const VIEWPORT_WIDTH = 800;
const VIEWPORT_HEIGHT = 980;

class ScrapperJustjoin extends ScrapperBase {
  protected maxPages: number;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public getScrappedData = async (query: JobQueryParams = {}): Promise<ScrappedDataResponse> => {
    if (!this.page) return { createdAt: new Date(Date.now()).toISOString(), data: [] };

    const isDataOutdated = await this.isFileOutdated(`${JUSTJOIN_DATA_FILENAME}-standardized`);

    if (!isDataOutdated) {
      const savedData = await this.filesManager.readFromFile(`${JUSTJOIN_DATA_FILENAME}-standardized`);
      if (savedData) return JSON.parse(savedData);
    }

    const data = await this.saveScrappedData<JobOffer>({
      fileName: JUSTJOIN_DATA_FILENAME,
    });

    return { createdAt: new Date(Date.now()).toISOString(), data: data || [] };
  };

  protected async scrapePage<T>(pageNumber: number): Promise<T[] | undefined> {
    const page = this.page ?? (await this?.browser?.newPage());
    if (!page) return;

    try {
      await page.setViewport({
        width: VIEWPORT_WIDTH,
        height: VIEWPORT_HEIGHT,
      });
      // this.listenForDataRequest(page);
      const offers: T[] = [];

      page.on("response", async response => {
        const url = response.url();
        if (url.includes("https://api.justjoin.it/v2/user-panel/offers?")) {
          try {
            const contentType = response.headers()["content-type"];
            if (contentType && contentType.includes("application/json")) {
              const res = await response.json();
              console.log("Response ok", url);
              offers.push(...res.data);
            }
          } catch (err) {
            console.error("Error parsin JSON response", err);
          }
        }
      });

      await page.goto(this.url, { waitUntil: "networkidle2" });

      // Its Client-Side cookie consent, so in headless mode it doesnt exist
      await page
        .waitForSelector("#cookiescript_accept", {
          timeout: 10000,
        })
        .then(async () => {
          await page.click("#cookiescript_accept");

          console.log("Clicked cookie consent");
        })
        .catch(err => {
          console.log("Cookie consent cannot be clickable", err);
        });

      const content = await page.evaluate(() => {
        const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });

      await this.scrollToEndOfPage(page);

      if (content) return [content?.props?.pageProps?.dehydratedState?.queries?.[0]?.state?.data?.pages?.[0]?.data, ...offers] as T[];
      return;
    } catch (err) {
      console.error(`Error processing page ${pageNumber}:`, err);
      return;
    } finally {
      // await page.close();
    }
  }

  private async scrollToEndOfPage(page: Page) {
    if (!page) return null;
    let footerExist = false;
    let prevScrollHeight = ((await this.page?.evaluate("document.body.scrollHeight")) as number) ?? 0;
    let currentScrollHeight: number = prevScrollHeight;

    const scrollHeightMap = new Map<number, number>();
    let sameScrollHeightCount = 0;

    const wait = (duration = 30) => new Promise(resolve => setTimeout(resolve, duration));
    // while (!footerExist && !endOfThePage) {
    while (!footerExist) {
      footerExist = await page.evaluate(() => {
        const footer = document.querySelector("footer");
        return Boolean(footer);
      });

      await page.evaluate(() => window.scrollBy(0, 980));
      await wait();
      currentScrollHeight = await page.evaluate((): number => document.body.scrollHeight ?? 0);
      console.log({ prevScrollHeight, currentScrollHeight });

      if (scrollHeightMap.has(currentScrollHeight)) {
        sameScrollHeightCount = (scrollHeightMap.get(currentScrollHeight) || 0) + 1;
        scrollHeightMap.set(currentScrollHeight, sameScrollHeightCount);
      } else {
        sameScrollHeightCount = 1;
        scrollHeightMap.set(currentScrollHeight, 1);
      }

      if (sameScrollHeightCount > 1) {
        console.log("Scrolling has been stuck!");
        await page.evaluate(() => document.body.scrollBy(0, -980));
        sameScrollHeightCount = 0;
      }

      prevScrollHeight += 600;
    }
  }

  protected standardizeData(offers: JobOfferJustjoin[]): JobOffer[] {
    if (!offers || !offers?.length) return [];
    return offers.map((offer): JobOffer => {
      const positionLevels = this.standardizePositionLevels(offer?.experienceLevel);
      const contractTypes = this.standardizeContractTypes(offer?.employmentTypes);
      const workModes = this.standardizeWorkModes(offer?.workplaceType);
      const workSchedules = this.standardizeWorkSchedules(offer?.workingTime);
      const salaryRange = this.standardizeSalary(offer?.employmentTypes);

      const idHash = `${offer?.title}-${offer?.companyName}-${offer?.publishedAt}-justjoin`;

      return {
        id: generateId(idHash),
        dataSourceCode: "justjoin",
        slug: offer?.slug,
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
        createdAt: offer?.publishedAt,
        expirationDate: undefined,
        offerUrls: offer?.multilocation?.map(loc => `https://justjoin.it/offers/${loc?.slug}`),
        workplace: offer?.multilocation?.map(place => `${place.city}, ${place.street}`),
      };
    });
  }

  private standardizeSalary = (salary: JobOfferJustjoin["employmentTypes"] | undefined): JobOffer["salaryRange"] => {
    if (!salary) return undefined;

    const type = salary?.[0].gross ? "netto" : "brutto";
    const min = salary.reduce((acc, curr): number => {
      if (!acc) return curr?.from ?? 0;
      return curr?.from && curr.from < acc ? curr?.from : acc;
    }, 0);
    const max = salary.reduce((acc, curr) => (curr?.to && curr.to > acc ? curr?.to : acc), 0);
    const currency = (salary?.[0].currency ?? "pln") as "pln" | "usd";

    return {
      min,
      max,
      currency,
      type,
      timeUnit: "month",
    };
  };

  standardizeContractTypes = (types: JobOfferJustjoin["employmentTypes"] | undefined): JobOffer["contractTypes"] => {
    if (!types || !types.length) return [];

    const standardizedTypes = types?.reduce(
      (acc, _type) => {
        const type = _type?.type?.toLowerCase();

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
  };

  standardizeWorkModes = (mode: JobOfferJustjoin["workplaceType"]): JobOffer["workModes"] => {
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
  };

  standardizePositionLevels = (level: JobOfferJustjoin["experienceLevel"] | undefined): JobOffer["positionLevels"] => {
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
  };

  standardizeWorkSchedules = (schedule: JobOfferJustjoin["workingTime"] | undefined): JobOffer["workSchedules"] => {
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
  };

  protected async getMaxPages() {
    if (!this.page) return 1;

    // // TODO: Uncomment that, added low pages to prevent overload
    // const maxPagesElement = await this.page.$('span[data-test="top-pagination-max-page-number"]');
    // let maxPagesValue = "1";
    // if (maxPagesElement) {
    //   const textContent = await this.page.evaluate(el => el?.textContent, maxPagesElement);
    //   if (textContent) maxPagesValue = textContent ?? "1";
    // }
    // return parseInt(maxPagesValue);
    return 1;
  }
}

export { ScrapperJustjoin };
