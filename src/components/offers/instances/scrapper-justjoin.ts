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
}

export { ScrapperJustjoin };
