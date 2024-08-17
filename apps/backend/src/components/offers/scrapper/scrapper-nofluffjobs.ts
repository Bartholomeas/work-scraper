import { type Browser, ElementHandle, type Page } from "puppeteer";

import type { JobOffer, ScrappedDataResponse } from "shared/src/offers/offers.types";

import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";

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

    const wait = (duration = 100) => new Promise(resolve => setTimeout(resolve, duration));

    await this.listenAndRestrictRequests(page);

    const data = [];
    page?.on("response", async response => {
      const url = response.url();

      if (url.includes("https://nofluffjobs.com/api/joboffers/main")) {
        try {
          const element = loadMoreBtn.asElement() as ElementHandle<Element>;
          await wait();
          await element?.click();

          const contentType = response.headers()["content-type"];
          if (contentType && contentType.includes("application/json")) {
            const res = await response.json();
            console.log("Response ok", url, { DATA: res.postings });
            if (res?.postings) data.push(...res.postings);
          }
        } catch (err) {
          throw ErrorHandlerController.handleError(err);
        }
      }
    });
    await page.goto(this.url, { waitUntil: "networkidle2" });

    await this.pressCookieConsent(page);

    const loadMoreBtn = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      const targetBtn = buttons.find(btn => btn.textContent?.includes("Pokaż kolejne"));
      return targetBtn || null;
    });

    if (loadMoreBtn && loadMoreBtn.asElement()) {
      const element = loadMoreBtn.asElement() as ElementHandle<Element>;

      await element?.click();

      await page.waitForFunction(el => el.textContent?.includes("Pokaż kolejne"), {}, element);
    } else {
      console.log("Nieprawdziwe costam");
    }

    return [] as T[];
  }

  private async pressCookieConsent(page: Page): Promise<void> {
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
  }

  protected standardizeData(offers: unknown[]): JobOffer[] {
    return [];
  }

  protected async getMaxPages(): Promise<number> {
    return 1;
  }
}
