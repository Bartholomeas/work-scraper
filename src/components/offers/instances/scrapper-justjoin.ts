import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/instances/scrapper-base";
import type { Browser, Page } from "puppeteer";
import { generateId } from "@/utils/generate-id";

import { isContractTypesArr } from "@/components/offers/helpers/offers.utils";
import { JUSTJOIN_DATA_FILENAME, PRACUJ_DATA_FILENAME } from "@/components/offers/helpers/offers.constants";

import type { JobOffer, JobQueryParams, ScrappedDataResponse } from "@/types/offers/offers.types";
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

    // if (!isDataOutdated) {
    //   const savedData = await this.filesManager.readFromFile(`${JUSTJOIN_DATA_FILENAME}-standardized`);
    //   if (savedData) return JSON.parse(savedData);
    // }

    const data = await this.saveScrappedData<JobOffer>({
      fileName: PRACUJ_DATA_FILENAME,
    });

    return { createdAt: new Date(Date.now()).toISOString(), data: data || [] };
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

  // private listenForDataRequest(page: Page | undefined) {
  //   if (!page) return null;
  //   const offers: Promise<unknown>[] = [];
  //   console.log("LISTENNING");
  //   page.on("response", response => {
  //     const url = response.url();
  //     if (url.includes("https://api.justjoin.it/v2/user-panel/offers?")) {
  //       console.log("RESPONSE PAGE", url);
  //       return url.slice(url.indexOf("page=")).split("&")[0];
  //       // try {
  //       //   const contentType = response.headers()["content-type"];
  //       //   if (contentType && contentType.includes("application/json")) {
  //       //     console.log("COSTAM JEST", page);
  //       //     const res = response.json();
  //       //     offers.push(res);
  //       //     return res;
  //       //   }
  //       // } catch (err) {
  //       //   console.error("ERRUR", err);
  //       //   return;
  //       // }
  //     }
  //   });
  //
  //   console.log(offers);
  // }

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

  protected standardizeData(offers: JobOfferJustjoin[]): JobOffer[] {
    if (!offers || !offers?.length) return [];
    return offers.map(
      (offer): JobOffer => ({
        id: generateId(offer?.slug),
        slug: offer?.slug,
        positionName: offer?.title,
        company: {
          name: offer?.companyName,
          logoUrl: offer?.companyLogoThumbUrl,
        },
        positionLevels: this.standardizePositionLevels(offer?.experienceLevel),
        contractTypes: this.standardizeContractTypes(offer?.employmentTypes),
        workModes: this.standardizeWorkModes(offer?.workplaceType),
        workSchedules: this.standardizeWorkSchedules(offer?.workingTime),
        technologies: offer?.requiredSkills,
        description: undefined,
        createdAt: offer?.publishedAt,
        expirationDate: undefined,
        offerUrls: offer?.multilocation?.map(loc => `https://justjoin.it/offers/${loc?.slug}`),
        workplace: offer?.multilocation?.map(place => `${place.city}, ${place.street}`),
      }),
    );
  }

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
              console.log("Response wylapany ok", url);
              offers.push(...res.data);
            }
          } catch (err) {
            console.error("Error parsin JSON response", err);
          }
        }
      });

      await page.goto(`${this.url}?pn=${pageNumber}`, { waitUntil: "networkidle2" });

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
        // this.evaluatePageWithScroll();
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });

      await this.evaluatePageWithScroll(page);

      console.log("XD OFFERS", offers.length);

      // await page.close();
      if (content) return content?.props?.pageProps?.dehydratedState?.queries?.[0]?.state?.data?.pages?.[0]?.data as T[];
      return;
    } catch (err) {
      console.error(`Error processing page ${pageNumber}:`, err);
      await page.close();
      return;
    }
  }

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

  private async evaluatePageWithScroll(page: Page) {
    if (!page) return null;
    let footerExist = false;
    let endOfThePage = false;
    let prevScrollHeight = ((await this.page?.evaluate("document.body.scrollHeight")) as number) ?? 0;
    let currentScrollHeight = await page.evaluate("document.body.scrollHeight");
    while (!footerExist && !endOfThePage) {
      footerExist = await page.evaluate(() => {
        const footer = document.querySelector("footer");
        return Boolean(footer);
      });

      // const HEHE = await page.$("#cookiescript_accept");
      // const HEHE = await page.waitForSelector("#cookiescript_accept", {
      //   visible: true,
      //   timeout: 5000,
      // });
      // if (HEHE) HEHE?.click();

      await page
        .evaluate(() => window.scrollBy(0, 260))
        .then(async () => {
          currentScrollHeight = await page.evaluate("scrollY");
          console.log("insajds", currentScrollHeight);
        });

      // await setTimeout(1000);
      console.log({ prevScrollHeight, currentScrollHeight });
      prevScrollHeight += VIEWPORT_HEIGHT;
      // if (currentScrollHeight === prevScrollHeight || currentScrollHeight > prevScrollHeight * 2) {
      //   endOfThePage = true;
      //   console.log("MATCZ");
      //   break;
      // }
      if (prevScrollHeight > 3000000) {
        console.log("kuniec XDD");
        endOfThePage = true;
        break;
      }
      // prevScrollHeight = currentScroll;
    }
  }
}

export { ScrapperJustjoin };
