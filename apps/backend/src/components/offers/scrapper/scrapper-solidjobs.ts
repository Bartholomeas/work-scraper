import { Browser } from "puppeteer";

import { JobOffer, JobQueryParams, ScrappedDataResponse } from "shared/src/offers/offers.types";

import { ScrapperBase, ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";
import { SLUGIFY_CONFIG } from "@/lib/slugify";
import { JobOfferSolidJobs } from "@/types/offers/solidjobs.types";
import { generateId } from "@/utils/generate-id";
import slugify from "slugify";

class ScrapperSolidJobs extends ScrapperBase {
  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public getScrappedData = async (): Promise<ScrappedDataResponse> => {
    if (!this.page) await this.initializePage();
    if (!this.page) return { createdAt: new Date(Date.now()).toISOString(), data: [] };

    //TODO: To uncommen after correct scrapping process
    // const data = await this.saveScrappedData<JobOffer>({
    //   fileName: SOLID_DATA_FILENAME,
    // });

    const data = await this.scrapePage(this.maxPages);

    return { createdAt: new Date(Date.now()).toISOString(), data: data || [] };
  };
  protected scrapePage = async <T = unknown>(pageNumber: number): Promise<T[] | undefined> => {
    if (!this.page) return;

    try {
      let offers: T[];

      this.page.on("response", async response => {
        if (response.url().includes("https://solid.jobs/api/offers")) {
          try {
            offers = await response.json();
          } catch (err) {
            offers = [];
          } finally {
            return;
          }
        }
      });

      await this.page.goto(this.url);

      return offers;
    } catch (err) {
      return [];
    }
    return;
  };

  protected standardizeData(offers: JobOfferSolidJobs[]): JobOffer[] {
    if (!offers || !offers.length) return [];
    const standardizedOffers = offers?.map(
      offer =>
        ({
          id: generateId(offer?.jobOfferKey),
          dataSourceCode: "solid.jobs",
          slug: slugify(offer?.jobTitle, SLUGIFY_CONFIG),
          createdAt: offer?.validFrom,
          expirationDate: offer?.validTo,
          positionName: offer?.jobTitle,
          company: {
            name: offer?.companyName,
            logoUrl: offer?.companyLogoUrl,
          },
        }) satisfies JobOffer,
    );

    console.log("STANDARDIZED OFFERS: ", standardizedOffers);

    return [];
  }

  private standardizePositionLevels(salary: JobOfferSolidJobs["experienceLevel"] | undefined): JobOffer["positionLevels"] {
    return "junior";
  }
  protected getMaxPages(): Promise<number> {
    throw new Error("Method not implemented.");
  }
  protected standardizeContractTypes(data: unknown): JobOffer["contractTypes"] {
    throw new Error("Method not implemented.");
  }
}

export { ScrapperSolidJobs };
