import { type Browser, ElementHandle, type Page } from "puppeteer";

import type { JobOffer, ScrappedDataResponse, WorkSchedulesCodes } from "shared/src/offers/offers.types";

import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";

import type { JobOfferNofluffJobs } from "@/types/offers/nofluffjobs.types";
import { generateId } from "@/utils/generate-id";
import { NOFLUFF_NAME } from "@/misc/constants";
import { isWorkPositionLevelsArr } from "@/components/offers/helpers/offers.utils";
import { currenciesSchema } from "shared/src/offers/offers.schemas";
import dayjs from "dayjs";

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

    await this.listenAndRestrictRequests(this.page);

    const data: T[] = [];

    return new Promise<T[] | undefined>((resolve, reject) => {
      let keepLoading = true;

      this.page?.on("response", response => {
        const url = response.url();

        if (url.includes("https://nofluffjobs.com/api/joboffers/main") || url.includes("https://nofluffjobs.com/api/search/posting")) {
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
      const expirationDate = dayjs(new Date(offer?.renewed)).add(1, "month").toISOString();

      return {
        id: generateId(offer?.id),
        dataSourceCode: NOFLUFF_NAME,
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
        description: undefined,
        technologies,
        createdAt: dayjs(new Date(offer?.posted)).toISOString(),
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
      ?.filter(loc => !loc.provinceOnly)
      ?.map(
        loc =>
          ({
            city: loc?.city ?? "",
            address: loc?.street ? `${loc?.postalCode ? loc?.postalCode + " " : ""}${loc.street}` : "",
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
