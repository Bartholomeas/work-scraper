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
    await this.initializePage();
    const wait = (duration = 100) => new Promise(resolve => setTimeout(resolve, duration));

    await this.listenAndRestrictRequests(this.page);

    const data: T[] = [];

    return new Promise<T[] | undefined>((resolve, reject) => {
      let keepLoading = true;

      this.page?.on("response", response => {
        const url = response.url();

        if (url.includes("https://nofluffjobs.com/api/joboffers/main")) {
          console.log("Nofluffjobs scrapping: ", url);
          response
            .json()
            .then(res => {
              const contentType = response.headers()["content-type"];
              if (contentType && contentType.includes("application/json")) {
                if (res?.postings) data.push(...res.postings);
              }

              this.page
                ?.evaluateHandle(this.getLoadMoreButton)
                .then(loadMoreBtn => {
                  const element = loadMoreBtn?.asElement() as ElementHandle<Element>;
                  if (element) {
                    wait(50).then(() => {
                      element?.click();
                      element?.dispose();
                    });

                    this.page
                      ?.waitForFunction(el => el.textContent?.includes("Pokaż kolejne"), {}, element)
                      .catch(() => {
                        keepLoading = false;
                      });
                  } else {
                    keepLoading = false;
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

      this.page
        ?.goto(this.url, { waitUntil: "networkidle2" })
        .then(() => this.pressCookieConsent(this.page))
        .then(() => {
          return this.page?.evaluateHandle(this.getLoadMoreButton);
        })
        .then(loadMoreBtn => {
          if (loadMoreBtn && loadMoreBtn.asElement()) {
            const element = loadMoreBtn.asElement() as ElementHandle<Element>;
            element?.click();
          } else {
            keepLoading = false;
          }
        })
        .catch(reject);

      const waitUntilFinished = () =>
        new Promise<void>(resolveWait => {
          const interval = setInterval(() => {
            if (!keepLoading) {
              clearInterval(interval);
              resolveWait();
            }
          }, 100);
        });

      waitUntilFinished().then(() => resolve(data));
    });
  }

  private getLoadMoreButton = () => {
    const buttons = Array.from(document.querySelectorAll("button"));
    const targetBtn = buttons.find(btn => btn.textContent?.includes("Pokaż kolejne"));
    return targetBtn || null;
  };

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
