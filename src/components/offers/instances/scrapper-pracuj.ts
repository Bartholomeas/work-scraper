import { type Browser } from "puppeteer";
import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/instances/scrapper-base";
import fs from "node:fs";
import path from "node:path";
import type { JobOfferPracuj } from "@/types/offers.types";

class ScrapperPracuj extends ScrapperBase {
  browser: Browser | undefined;
  maxPages: number;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.browser = browser;
    this.maxPages = 1;
  }

  public initialize = async () => {
    if (!this.page) {
      await this.initPage();
    }
  };
  public getScrappedData = async () => {
    if (!this.page) return null;
    this.maxPages = await this.getMaxPages();

    const pagePromises: Promise<JobOfferPracuj[] | undefined>[] = [];

    for (let page = 1; page <= this.maxPages; page++) {
      pagePromises.push(this.scrapePage(page));
    }

    const results = await Promise.all(pagePromises);
    const aggregatedData = results.filter(Boolean).flat();

    this.saveToFile(JSON.stringify(aggregatedData), "pracuj-data");

    return aggregatedData;
  };

  private async scrapePage(pageNumber: number) {
    console.time(`PAGE-${pageNumber}`);

    const page = await this?.browser?.newPage();
    if (!page) return;

    try {
      await page.goto(`${this.url}?pn=${pageNumber}`, { waitUntil: "networkidle2" });

      const content = await page.evaluate(() => {
        const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });

      await page.close();

      console.timeEnd(`PAGE-${pageNumber}`);
      if (content) return content.props.pageProps.data.jobOffers.groupedOffers as JobOfferPracuj[];
      return;
    } catch (err) {
      console.error(`Error processing page ${pageNumber}:`, err);
      await page.close();
      return;
    }
  }

  private async getMaxPages() {
    if (!this.page) return 1;

    // TODO: Uncomment that, added low pages to prevent overload
    // const maxPagesElement = await this.page.$('span[data-test="top-pagination-max-page-number"]');
    // let maxPagesValue = "1";
    // if (maxPagesElement) {
    //   const textContent = await this.page.evaluate(el => el?.textContent, maxPagesElement);
    //   if (textContent) maxPagesValue = textContent ?? "1";
    // }
    // return parseInt(maxPagesElement);
    return 2;
  }

  private saveToFile(data: string, fileName: string) {
    const dir = path.resolve(__dirname, "../../../../public/scrapped-data");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = path.join(dir, `${fileName}.json`);
    fs.writeFile(filePath, data, err => {
      if (err) {
        console.log("ERROR SAVING SCRAPPED FILE JSON", err);
      }
    });
  }
}

export { ScrapperPracuj };
