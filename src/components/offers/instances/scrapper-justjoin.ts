import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/instances/scrapper-base";
import type { Browser } from "puppeteer";

import { generateId } from "@/utils/generate-id";

import { isContractTypesArr } from "@/components/offers/helpers/offers.utils";
import { JUSTJOIN_DATA_FILENAME } from "@/components/offers/helpers/offers.constants";

import type { JobOffer, JobQueryParams } from "@/types/offers/offers.types";
import type { JobOfferJustjoin } from "@/types/offers/justjoin.types";

class ScrapperJustjoin extends ScrapperBase {
  protected maxPages: number;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public getScrappedData = async (query: JobQueryParams = {}): Promise<JobOffer[] | null> => {
    if (!this.page) return null;

    const isDataOutdated = await this.isFileOutdated(`${JUSTJOIN_DATA_FILENAME}-standardized`);

    // if (!isDataOutdated) {
    //   const savedData = await this.filesManager.readFromFile(`${JUSTJOIN_DATA_FILENAME}-standardized`);
    //   if (savedData) return JSON.parse(savedData);
    // }

    return await this.saveScrappedData<JobOfferJustjoin>({
      fileName: JUSTJOIN_DATA_FILENAME,
    });
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
    const page = await this?.browser?.newPage();
    if (!page) return;

    try {
      await page.goto(`${this.url}?pn=${pageNumber}`, { waitUntil: "networkidle2" });
      const content = await page.evaluate(() => {
        const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });

      await page.close();
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
}

export { ScrapperJustjoin };
