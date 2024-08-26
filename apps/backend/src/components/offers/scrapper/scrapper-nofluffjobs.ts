import dayjs from "dayjs";
import { type Browser, ElementHandle, type Page } from "puppeteer";

import { currenciesSchema } from "shared/src/offers/offers.schemas";
import type { JobOffer, ScrappedDataResponse, WorkSchedulesCodes } from "shared/src/offers/offers.types";

import { generateId } from "@/utils/generate-id";
import { JOB_DATA_SOURCES, NOFLUFF_NAME } from "@/misc/constants";

import { isWorkPositionLevelsArr } from "@/components/offers/helpers/offers.utils";
import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";

import type { JobOfferNofluffJobs } from "@/types/offers/nofluffjobs.types";

export class ScrapperNofluffjobs extends ScrapperBase {
  private keepLoading: boolean = true;
  private loadAttempts: number = 0;
  private readonly maxLoadAttempts: number = 5;
  private readonly maxRetries: number = 4;
  private readonly retryDelay: number = 3000;

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

    await this.page?.setViewport({
      width: 1200,
      height: 1080,
    });
    await this.listenAndRestrictRequests(this.page);

    const data: T[] = [];

    return new Promise<T[] | undefined>((resolve, reject) => {
      this.page?.on("response", async response => {
        const url = response.url();
        if (url.includes("https://nofluffjobs.com/api/search/posting")) {
          console.log("Nofluffjobs url: ", url);
          try {
            const res = await response.json();
            const contentType = response.headers()["content-type"];
            if (contentType && contentType.includes("application/json")) {
              if (res?.postings) data.push(...res.postings);
            }
            await this.clickLoadMoreButtonWithRetry();
          } catch (err) {
            console.error("Error processing response:", err);
            this.keepLoading = false;
          }
        }
      });

      this.page
        ?.goto(this.url, { waitUntil: "networkidle2", timeout: 60000 })
        .then(() => this.pressCookieConsent(this.page))
        .then(() => this.clickLoadMoreButtonWithRetry())
        .catch(reject);

      const waitUntilFinished = async () => {
        while (this.keepLoading && this.loadAttempts < this.maxLoadAttempts) {
          await this.wait(1000);
          this.loadAttempts++;
          if (!this.keepLoading || this.loadAttempts >= this.maxLoadAttempts) break;
          await this.clickLoadMoreButtonWithRetry();
        }

        resolve(data);
      };

      waitUntilFinished();
    });
  }

  private async clickLoadMoreButtonWithRetry(): Promise<void> {
    for (let i = 0; i < this.maxRetries; i++) {
      try {
        const loadMoreBtn = await this.page?.evaluateHandle(this.getLoadMoreButton);
        const element = loadMoreBtn?.asElement() as ElementHandle<Element>;
        if (element) {
          await element.click();
          await this.wait(1000);
          await element.dispose();
          return;
        } else {
          console.log(`No 'Load More' button found (attempt ${i + 1}/${this.maxRetries})`);
        }
      } catch (err) {
        console.error(`Error clicking 'Load More' button (attempt ${i + 1}/${this.maxRetries}):`, err);
      }

      if (i < this.maxRetries - 1) {
        await this.wait(this.retryDelay);
      }
    }

    console.log("Max retries reached. No more 'Load More' button found.");
    this.keepLoading = false;
  }

  private wait(duration: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, duration));
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
