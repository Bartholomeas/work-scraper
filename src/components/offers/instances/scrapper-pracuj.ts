import { ScrapperBase, type ScrapperBaseProps } from "src/components/offers/instances/scrapper-base";
import type { Browser } from "puppeteer";

class ScrapperPracuj extends ScrapperBase {
  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    // super.initPage()
  }
}

export { ScrapperPracuj };
