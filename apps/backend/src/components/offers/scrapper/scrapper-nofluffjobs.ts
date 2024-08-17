import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";
import { type Browser, ElementHandle, type Page } from "puppeteer";
import type { JobOffer, ScrappedDataResponse } from "shared/src/offers/offers.types";

export class ScrapperNofluffjobs extends ScrapperBase {
  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public async getScrappedData(): Promise<ScrappedDataResponse> {
    const data = await this.saveScrappedData<JobOffer>();
    return { createdAt: new Date(Date.now()).toISOString(), data: data || [] };
  }

  protected async scrapePage<T>(pageNumber: number): Promise<T[] | undefined> {
    let { page } = this;
    if (!page) {
      page = await this.browser?.newPage();
    }
    if (!page) return;

    await page?.setRequestInterception(true);
    await this.listenAndRestrictRequests(page);

    page?.on("response", async response => {
      const url = response.url();

      if (url.includes("https://nofluffjobs.com/api")) {
        console.log("FFF URL: ", url);
      }
    });

    await page.goto(this.url, { waitUntil: "networkidle2" });

    const cookieBtn = await page
      ?.waitForSelector("#onetrust-accept-btn-handler", {
        timeout: 5000,
      })
      .catch(() => {
        console.log("Cookie consent not found");
        return;
      });

    if (cookieBtn) {
      await cookieBtn?.click();
      await cookieBtn?.dispose();
    }

    // const selector = "button";
    // const loadMoreText = "Pokaż kolejne oferty";
    // const loadingText = "Ładowanie";
    //
    // const loadMoreSelector = 'text="Pokaż kolejne oferty"';
    // const loadingSelector = 'text="Ładowanie"';

    await this.scrollToEndOfPage(page);
    const buttons = await page?.$$("button");
    const loadMoreBtn = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      const targetBtn = buttons.find(btn => btn.textContent?.includes("Pokaż kolejne"));
      return targetBtn || null;
    });

    if (loadMoreBtn && loadMoreBtn.asElement()) {
      const element = loadMoreBtn.asElement() as ElementHandle<Element>;
      if (element) {
        await element?.click();
        console.log("Klikando inside element if");
      }
      console.log("Klikando");
    } else {
      console.log("Nieprawdziwe costam");
    }

    return [] as T[];
  }

  private async scrollToEndOfPage(page: Page) {
    if (!page) return;

    let prevScrollHeight = await page?.evaluate(() => document.body.scrollHeight as number);
    let currentScrollHeight: number = prevScrollHeight;

    const wait = (duration = 100) => new Promise(resolve => setTimeout(resolve, duration));

    const isFooterVisible = async () => {
      return await page.evaluate(() => {
        const footer = document.querySelector('footer[data-cy="footer"]');
        console.log("Futer exist: ", !!footer);
        return footer && footer.getBoundingClientRect().top < window.innerHeight;
      });
    };
    while (!(await isFooterVisible())) {
      await page.evaluate(() => window.scrollBy(0, 960));
      await wait(200);

      currentScrollHeight = await page.evaluate(() => document.body.scrollHeight ?? 0);

      if (currentScrollHeight > prevScrollHeight) {
        prevScrollHeight = currentScrollHeight;
      }
    }
  }

  protected standardizeData(offers: unknown[]): JobOffer[] {
    return [];
  }

  protected async getMaxPages(): Promise<number> {
    return 1;
  }
}
