import path from "node:path";
import { type Browser } from "puppeteer";

import { FilesManagerController } from "@/components/files-manager/files-manager.controller";
import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/instances/scrapper-base";
import { PRACUJ_DATA_FILENAME } from "@/components/offers/helpers/offers.constants";

import type { JobOfferPracuj } from "@/types/offers/pracuj.types";
import type { JobOffer, JobQueryParams } from "@/types/offers/offers.types";

class ScrapperPracuj extends ScrapperBase {
  protected browser: Browser | undefined;
  protected maxPages: number;
  private filesManager: FilesManagerController;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.browser = browser;
    this.maxPages = 1;
    this.filesManager = new FilesManagerController(path.resolve(__dirname, "../../../../public/scrapped-data"));
  }

  public getScrappedData = async (query: JobQueryParams = {}): Promise<JobOffer[] | null> => {
    if (!this.page) return null;

    const fileStat = await this.filesManager.getFileUpdatedDate({
      fileName: PRACUJ_DATA_FILENAME,
    });

    let parsedData: JobOffer[] | null = null;
    const isDataOutdated = this.isFileOutdated(fileStat?.mtime.toString() ?? undefined);

    if (isDataOutdated) parsedData = await this.saveScrappedDataToFile();
    else {
      const savedData = await this.filesManager.readFromFile(PRACUJ_DATA_FILENAME);
      if (savedData) parsedData = JSON.parse(savedData);
      else parsedData = await this.saveScrappedDataToFile();
    }

    return parsedData;
  };

  protected async saveScrappedDataToFile(): Promise<JobOffer[] | null> {
    const pagePromises: Promise<JobOfferPracuj[] | undefined>[] = [];

    this.maxPages = await this.getMaxPages();
    for (let page = 1; page <= this.maxPages; page++) {
      pagePromises.push(this.scrapePage(page));
    }

    const results = await Promise.all(pagePromises);
    const aggregatedData = results.filter(Boolean).flat() as JobOfferPracuj[];
    const standardizedData = this.standardizeData(aggregatedData);

    await Promise.all([
      this.filesManager.saveToFile({
        data: aggregatedData,
        fileName: "pracuj-data",
      }),
      this.filesManager.saveToFile({
        data: standardizedData,
        fileName: PRACUJ_DATA_FILENAME,
      }),
    ]);

    return standardizedData;
  }

  protected standardizeData(offers: JobOfferPracuj[]): JobOffer[] {
    if (!offers.length) return [];
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

      if (content) return content.props.pageProps.data.jobOffers.groupedOffers as JobOfferPracuj[];
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
    const maxPagesElement = await this.page.$('span[data-test="top-pagination-max-page-number"]');
    let maxPagesValue = "1";
    if (maxPagesElement) {
      const textContent = await this.page.evaluate(el => el?.textContent, maxPagesElement);
      if (textContent) maxPagesValue = textContent ?? "1";
    }
    return parseInt(maxPagesValue);
    // return 2;
  }
}

export { ScrapperPracuj };
