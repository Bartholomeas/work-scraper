import { type Browser, ElementHandle, EventEmitter, type Page } from "puppeteer";

import type { JobOffer, ScrappedDataResponse } from "shared/src/offers/offers.types";

import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";

enum EventTypes {
  DONE_SCRAPPING = "done",
  ERROR_SCRAPPING = "error",
}

type Events = {
  [key: string]: unknown;
  [EventTypes.DONE_SCRAPPING]: () => void;
  [EventTypes.ERROR_SCRAPPING]: (err: Error) => void;
};

export class ScrapperNofluffjobs extends ScrapperBase {
  private eventEmitter: EventEmitter<Events>;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
    this.eventEmitter = new EventEmitter();
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

    const data: T[] = [];

    return new Promise<T[] | undefined>((resolve, reject) => {
      let keepLoading = true;

      page.on("response", response => {
        const url = response.url();

        if (url.includes("https://nofluffjobs.com/api/joboffers/main")) {
          console.log("Gicik :))", url);
          response
            .json()
            .then(res => {
              const contentType = response.headers()["content-type"];
              if (contentType && contentType.includes("application/json")) {
                if (res?.postings) data.push(...res.postings);
              }

              page
                .evaluateHandle(() => {
                  const buttons = Array.from(document.querySelectorAll("button"));
                  const targetBtn = buttons.find(btn => btn.textContent?.includes("Pokaż kolejne"));
                  return targetBtn || null;
                })
                .then(loadMoreBtn => {
                  if (loadMoreBtn && loadMoreBtn.asElement()) {
                    const element = loadMoreBtn.asElement() as ElementHandle<Element>;
                    wait().then(() => element?.click());

                    // Wait until the button changes back to "Pokaż kolejne" or a timeout
                    page
                      .waitForFunction(el => el.textContent?.includes("Pokaż kolejne"), {}, element)
                      .catch(() => {
                        keepLoading = false; // Stop if button is no longer available or changed
                      });
                  } else {
                    keepLoading = false; // No more buttons found, stop loading
                  }
                })
                .catch(err => {
                  keepLoading = false;
                  reject(ErrorHandlerController.handleError(err));
                });
            })
            .catch(err => {
              keepLoading = false;
              reject(ErrorHandlerController.handleError(err));
            });
        }
      });

      // Initial page load
      page
        .goto(this.url, { waitUntil: "networkidle2" })
        .then(() => this.pressCookieConsent(page))
        .then(() => {
          // Start the scraping process with the first click on "Pokaż kolejne"
          return page.evaluateHandle(() => {
            const buttons = Array.from(document.querySelectorAll("button"));
            const targetBtn = buttons.find(btn => btn.textContent?.includes("Pokaż kolejne"));
            return targetBtn || null;
          });
        })
        .then(loadMoreBtn => {
          if (loadMoreBtn && loadMoreBtn.asElement()) {
            const element = loadMoreBtn.asElement() as ElementHandle<Element>;
            element?.click();
          } else {
            keepLoading = false; // No button to click initially, so stop loading
          }
        })
        .catch(reject);

      // Wait until scraping is done
      const waitUntilFinished = () =>
        new Promise<void>(resolveWait => {
          const interval = setInterval(() => {
            if (!keepLoading) {
              clearInterval(interval);
              resolveWait();
            }
          }, 100); // Check every 100ms if scraping is finished
        });

      waitUntilFinished().then(() => resolve(data));
    });
  }

  private async pressCookieConsent(page: Page | undefined): Promise<void> {
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
