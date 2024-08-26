import fs from "node:fs";
import path from "node:path";
import dayjs from "dayjs";
import { type Browser, ElementHandle, type Page } from "puppeteer";

import { currenciesSchema } from "shared/src/offers/offers.schemas";
import type { JobOffer, ScrappedDataResponse, WorkSchedulesCodes } from "shared/src/offers/offers.types";

import { generateId } from "@/utils/generate-id";
import { JOB_DATA_SOURCES, NOFLUFF_NAME } from "@/misc/constants";

import { isWorkPositionLevelsArr } from "@/components/offers/helpers/offers.utils";
import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";

import type { JobOfferNofluffJobs } from "@/types/offers/nofluffjobs.types";

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
    await this.initializePage();
    const wait = (duration = 100) => new Promise(resolve => setTimeout(resolve, duration));

    await this.page?.setViewport({
      width: 1200,
      height: 1080,
    });
    await this.listenAndRestrictRequests(this.page);

    const data: T[] = [];

    return new Promise<T[] | undefined>((resolve, reject) => {
      let keepLoading = true;

      this.page?.on("response", response => {
        const url = response.url();

        if (url.includes("https://nofluffjobs.com/api/search/posting")) {
          console.log("Nofluffjobs url: ", url);

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
        .then(async () => {
          // await this.setITCategory();
          await this.page?.screenshot({ path: path.join(__dirname, "nofluffjobs_page_content.html") });

          // Save HTML page content
          const pageContent = await this.page?.content();
          if (pageContent) {
            const htmlFilePath = path.join(__dirname, "nofluffjobs_page_content.html");
            fs.writeFileSync(htmlFilePath, pageContent);
            console.log(`Page content saved to: ${htmlFilePath}`);
          }

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

      // const pageContent = this.page?.content().then(res => res);
      // const htmlFilePath = path.join(__dirname, "theprotocol_page_content.html");
      // fs.writeFile(htmlFilePath, pageContent, err => {
      //   if (err) {
      //     console.error(`Error saving page content: ${err}`);
      //   } else {
      //     console.log(`Page content saved to: ${htmlFilePath}`);
      //   }
      // });
      const waitUntilFinished = () =>
        new Promise<void>(resolveWait => {
          const interval = setInterval(() => {
            if (!keepLoading) {
              clearInterval(interval);
              resolveWait();
            }
          }, 500);
        });

      waitUntilFinished().then(() => resolve(data));
    });
  }
  private async setITCategory() {
    try {
      const wait = (duration = 100) => new Promise(resolve => setTimeout(resolve, duration));
      await wait(500);

      const filtersBtn = await this.page
        ?.evaluateHandle(() => {
          const filtersBtnContainer = document.querySelector('nfj-filter-executor[data-cy="btnFilter-category"]');
          return filtersBtnContainer?.querySelector("button");
        })
        .then(res => res.asElement() as ElementHandle<Element>);

      await filtersBtn?.click();
      await filtersBtn?.dispose();

      //TODO: To improve if its because of timeout
      await wait(500);

      const categoriesSection = await this.page?.waitForSelector('div[data-cy-section="btnFilters-category"]');

      if (categoriesSection) {
        if (categoriesSection) {
          const firstArticle = await categoriesSection?.evaluateHandle(() => document.querySelector("article"));
          await firstArticle.asElement()?.$$eval('nfj-filter-control[type="checkbox"]', checkboxElements => {
            const inputs = Array.from(checkboxElements).map(el => el.querySelector('input[type="checkbox"]') as HTMLInputElement);
            inputs.forEach(el => {
              el?.click();
            });
          });

          this.page?.evaluateHandle(this.getSubmitFiltersButton).then(async submitBtn => {
            const btnElement = submitBtn.asElement() as ElementHandle<Element>;

            if (btnElement) {
              await btnElement?.click();
              await btnElement?.dispose();
            }
          });
        }
      }
    } catch (err) {
      console.log("ERROR IN SETTING IT: ", err);
      return;
    }
  }

  private getSubmitFiltersButton() {
    const buttons = Array.from(document.querySelectorAll("button"));
    const targetBtn = buttons.find(btn => btn.textContent?.includes("Pokaż wyniki"));
    return targetBtn || null;
  }

  private getLoadMoreButton() {
    const buttons = Array.from(document.querySelectorAll("button"));
    const targetBtn = buttons.find(btn => btn.textContent?.includes("Pokaż kolejne"));
    return targetBtn || null;
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

  protected standardizeData(offers: JobOfferNofluffJobs[]): JobOffer[] {
    if (!offers || !offers.length) return [];
    return offers?.map((offer): JobOffer => {
      const positionLevels = this.standardizePositionLevels(offer?.seniority);
      const workModes = this.standardizeWorkModes(offer?.location);
      const contractTypes = this.standardizeContractTypes(offer?.salary?.type);
      const workSchedules = ["full-time"] as WorkSchedulesCodes[];
      const salaryRange = this.standardizeSalary(offer?.salary);
      const technologies = this.standardizeTechnologies(offer?.tiles?.values);
      const workplaces = this.standardizeWorkplaces(offer?.location?.places);

      const todayDate = dayjs(new Date());

      const expirationDate = offer?.renewed
        ? dayjs(new Date(offer?.renewed)).add(1, "month").toISOString()
        : todayDate.add(1, "month").toISOString();
      const createdAt = offer?.posted ? dayjs(new Date(offer?.posted)).toISOString() : todayDate.toISOString();

      const idHash = `${offer?.title}-${offer?.name}-nofluffjobs`;

      return {
        id: generateId(idHash),
        dataSourceCode: NOFLUFF_NAME,
        dataSource: JOB_DATA_SOURCES.nofluff,
        slug: "",
        positionName: offer?.title,
        company: {
          logoUrl: null,
          name: offer?.name,
        },

        positionLevels,
        contractTypes,
        workModes,
        workSchedules,
        salaryRange,
        technologies,
        description: undefined,
        createdAt,
        expirationDate,
        offerUrls: [`https://nofluffjobs.com/pl/job/${offer?.url}`],
        workplaces,
      } satisfies JobOffer;
    });
  }

  protected async getMaxPages(): Promise<number> {
    return 1;
  }

  private standardizeWorkplaces = (locations: JobOfferNofluffJobs["location"]["places"]): JobOffer["workplaces"] => {
    return locations
      ?.filter(loc => loc.provinceOnly !== true && loc.city !== "Remote")
      ?.map(
        loc =>
          ({
            city: loc?.city ?? "",
            address: loc?.street ? `${loc?.postalCode ? loc?.postalCode + " " : ""}${loc.street}` : null,
          }) satisfies JobOffer["workplaces"][0],
      );
  };

  private standardizeTechnologies = (skills: JobOfferNofluffJobs["tiles"]["values"]): JobOffer["technologies"] => {
    if (!skills || (Array.isArray(skills) && !skills.length)) return [];
    return skills?.reduce(
      (acc, curr) => {
        if (curr.type === "requirement") acc.push(curr.value.toLowerCase());
        return acc;
      },
      [] as JobOffer["technologies"],
    );
  };

  private standardizeSalary = (salary: JobOfferNofluffJobs["salary"] | undefined): JobOffer["salaryRange"] => {
    if (!salary) return [];

    const min = salary.from;
    const max = salary.to;
    const type = salary?.type === "b2b" ? "netto" : "brutto";
    const parsedCurrency = currenciesSchema.safeParse(salary.currency.toLowerCase());
    const currency = parsedCurrency.success ? parsedCurrency.data : "pln";

    return [
      {
        min,
        max,
        currency,
        type,
        timeUnit: "month",
      },
    ];
  };

  private standardizeWorkModes = (modes: JobOfferNofluffJobs["location"]): JobOffer["workModes"] => {
    const { fullyRemote } = modes;
    const isFullyRemote = fullyRemote || modes?.places?.some(place => place.city === "Remote");
    if (isFullyRemote) return ["remote"];
    else return ["hybrid"];
  };

  private standardizeContractTypes = (type: string): JobOffer["contractTypes"] => {
    switch (type) {
      case "b2b":
        return ["b2b"];
      case "permanent":
        return ["uop"];
      case "zlecenie":
        return ["uz"];
      case "uod":
        return ["uod"];
      case "intern":
        return ["intern"];
      default:
        return ["b2b"];
    }
  };

  private standardizePositionLevels = (levels: JobOfferNofluffJobs["seniority"] | undefined): JobOffer["positionLevels"] => {
    if (!Array.isArray(levels) || !levels.length) return ["junior"];
    const standardizedLevels = levels.reduce(
      (acc, _level) => {
        const level = _level.toLowerCase();
        if (level.includes("trainee")) acc.push("intern");
        if (level.includes("junior")) acc.push("junior");
        if (level.includes("mid")) acc.push("mid");
        if (level.includes("senior")) acc.push("senior");
        if (level.includes("expert")) acc.push("manager");
        return acc;
      },
      [] as JobOffer["positionLevels"],
    );

    if (isWorkPositionLevelsArr(standardizedLevels)) return standardizedLevels;
    else return ["junior"];
  };
}
