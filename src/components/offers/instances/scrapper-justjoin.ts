import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/instances/scrapper-base";
import type { Browser } from "puppeteer";
import type { JobOffer, JobQueryParams } from "@/types/offers/offers.types";
import { JUSTJOIN_DATA_FILENAME } from "@/components/offers/helpers/offers.constants";
import type { JobOfferJustjoin } from "@/types/offers/justjoin.types";

class ScrapperJustjoin extends ScrapperBase {
  protected maxPages: number;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public getScrappedData = async (query: JobQueryParams = {}): Promise<JobOffer[] | null> => {
    if (!this.page) return null;

    const isDataOutdated = await this.isFileOutdated(JUSTJOIN_DATA_FILENAME);

    if (!isDataOutdated) {
      const savedData = await this.filesManager.readFromFile(JUSTJOIN_DATA_FILENAME);
      if (savedData) return JSON.parse(savedData);
    }

    return await this.saveScrappedDataToFile();
  };

  protected async saveScrappedDataToFile(): Promise<JobOffer[] | null> {
    const pagePromises: Promise<JobOfferJustjoin[] | undefined[]>[] | undefined[] = [];

    this.maxPages = await this.getMaxPages();
    for (let page = 1; page <= this.maxPages; page++) {
      pagePromises.push(this.scrapePage(page));
    }

    const results = await Promise.all(pagePromises);
    const aggregatedData = results.filter(Boolean).flat() as JobOfferJustjoin[];
    const standardizedData = this.standardizeData(aggregatedData);

    try {
      await Promise.all([
        this.filesManager.saveToFile({
          data: aggregatedData,
          fileName: "justjoin-data",
        }),
        this.filesManager.saveToFile({
          data: standardizedData,
          fileName: JUSTJOIN_DATA_FILENAME,
        }),
      ]);
    } catch (err) {
      console.error("Error saving files", err);
    }

    return standardizedData;
  }

  protected standardizeData(offers: JobOfferJustjoin[]): JobOffer[] {
    if (!offers || !offers?.length) return [];
    return offers.map(
      (offer): JobOffer => ({
        id: offer?.groupId,
        positionName: offer?.jobTitle,
        company: {
          logoUrl: offer?.companyLogoUri,
          name: offer?.companyName,
        },
        positionLevel: "mid",
        contractType: offer?.typesOfContract,
        workModes: offer?.workModes,
        workSchedules: offer?.workSchedules,
        technologies: offer?.technologies,
        description: offer?.jobDescription,
        createdAt: offer?.lastPublicated,
        expirationDate: offer?.expirationDate,
        offerUrls: offer?.offers?.map(url => url?.offerAbsoluteUri),
        workplace: offer?.offers?.map(place => place?.displayWorkplace),
      }),
    );
  }

  protected async scrapePage(pageNumber: number) {
    const page = await this?.browser?.newPage();
    if (!page) return;

    try {
      await page.goto(`${this.url}?pn=${pageNumber}`, { waitUntil: "networkidle2" });
      const content = await page.evaluate(() => {
        const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });

      await page.close();
      if (content) return content as JobOfferJustjoin[];
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
    return 2;
  }
}

export { ScrapperJustjoin };
