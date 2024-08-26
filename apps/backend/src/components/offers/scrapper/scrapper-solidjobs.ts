import { Browser } from "puppeteer";

import { currenciesSchema, timeUnitTypeSchema } from "shared/src/offers/offers.schemas";
import { CurrencyCodes, JobOffer, ScrappedDataResponse, TimeUnitTypes } from "shared/src/offers/offers.types";

import { generateId } from "@/utils/generate-id";
import { JOB_DATA_SOURCES } from "@/misc/constants";

import { ScrapperBase, ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";

import { type JobOfferSolidJobs } from "@/types/offers/solidjobs.types";

class ScrapperSolidJobs extends ScrapperBase {
  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public getScrappedData = async (): Promise<ScrappedDataResponse> => {
    if (!this.page) this.page = await this.browser?.newPage();
    if (!this.page) return { createdAt: new Date(Date.now()).toISOString(), data: [] };

    const data = await this.saveScrappedData<JobOffer>();

    return { createdAt: new Date(Date.now()).toISOString(), data: data || [] };
  };

  protected scrapePage = async <T = unknown>(): Promise<T[] | undefined> => {
    if (!this.page) {
      return;
    }

    try {
      let offers: T[] = [];
      await this.listenAndRestrictRequests(this.page);
      this.page.on("response", async response => {
        if (response.url().includes("https://solid.jobs/api/offers")) {
          console.log("Scrapping Solid.jobs..");
          try {
            console.log("SolidJobs.it scrapping..");
            offers = await response.json();
          } catch (err) {
            offers = [];
          }
        }
      });

      await this.page.goto(this.url, {
        waitUntil: "networkidle2",
        // timeout: 60000,
      });
      return offers;
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.closePage();
    }
  };

  protected standardizeData(offers: JobOfferSolidJobs[]): JobOffer[] {
    if (!offers || !offers.length) return [];
    return offers?.map(offer => {
      const allSalaries = offer?.secondarySalaryRange
        ? [offer?.salaryRange, offer?.secondarySalaryRange, offer?.normalizedSalaryRange]
        : [offer?.salaryRange, offer?.normalizedSalaryRange];
      const allCategories = [...(offer?.requiredSkills || []), ...(offer?.requiredLanguages || [])];

      const positionLevels = this.standardizePositionLevels(offer?.experienceLevel);
      const contractTypes = this.standardizeContractTypes(allSalaries);
      const workModes = this.standardizeWorkModes(offer?.remotePossible);
      const workSchedules = this.standardizeWorkSchedules(offer?.workload);
      const salaryRange = this.standardizeSalary(allSalaries);
      const technologies = this.standardizeCategories(allCategories);

      return {
        id: generateId(offer?.jobOfferKey),
        dataSourceCode: "solid.jobs",
        dataSource: JOB_DATA_SOURCES.solid,
        slug: "",
        createdAt: offer?.validFrom,
        expirationDate: offer?.validTo,
        positionName: offer?.jobTitle,
        company: {
          name: offer?.companyName,
          logoUrl: null,
        },
        positionLevels,
        contractTypes,
        workModes,
        workSchedules,
        salaryRange,
        technologies,
        description: undefined,
        offerUrls: [`https://solid.jobs/offer/${offer?.id}/${offer?.jobOfferUrl}`],
        workplaces: [
          {
            city: offer?.companyCity,
            address: offer?.companyAddress ?? null,
          },
        ],
      } satisfies JobOffer;
    });
  }

  private standardizePositionLevels(positionLevel: JobOfferSolidJobs["experienceLevel"] | undefined): JobOffer["positionLevels"] {
    switch (positionLevel?.toLowerCase()) {
      case "staż":
        return ["intern"];
      case "junior":
        return ["junior"];
      case "regular":
        return ["mid"];
      case "senior":
        return ["senior"];
      default:
        return ["junior"];
    }
  }

  protected standardizeContractTypes(types: JobOfferSolidJobs["salaryRange"][] | undefined): JobOffer["contractTypes"] {
    if (!types || !types.length) return [];
    return types?.reduce(
      (acc, curr) => {
        const employmentType = curr?.employmentType?.toLowerCase();

        if (employmentType.includes("b2b")) acc.push("b2b");
        else if (employmentType.includes("o pracę")) acc.push("uop");
        else if (employmentType.includes("zlecenie")) acc.push("uz");
        else if (employmentType.includes("dzieło")) acc.push("uod");
        return acc;
      },
      [] as JobOffer["contractTypes"],
    );
  }

  private standardizeWorkModes(mode: JobOfferSolidJobs["remotePossible"] | undefined): JobOffer["workModes"] {
    if (!mode || !mode.length) return [];

    if (mode.toLowerCase().includes("w całości")) return ["remote"];
    else if (mode.toLowerCase().includes("brak")) return ["stationary"];
    else if (mode.toLowerCase().includes("częściowo")) return ["hybrid"];
    return ["hybrid"];
  }

  private standardizeWorkSchedules(schedule: JobOfferSolidJobs["workload"] | undefined): JobOffer["workSchedules"] {
    if (!schedule || !schedule.length) return [];

    if (schedule.includes("100%")) return ["full-time"];
    else if (schedule.includes("75%")) return ["part-time"];
    else if (schedule.includes("25%")) return ["freelance"];
    else return ["internship"];
  }

  protected standardizeSalary(salary: JobOfferSolidJobs["salaryRange"][] | undefined): JobOffer["salaryRange"] {
    if (!salary || !salary.length) return [];

    const isCorrectTimeUnit = (timeUnit: unknown): timeUnit is TimeUnitTypes => timeUnitTypeSchema.safeParse(timeUnit).success;
    const isCorrectCurrency = (currency: unknown): currency is CurrencyCodes => currenciesSchema.safeParse(currency).success;

    return salary?.map(salaryRange => {
      const currency = salaryRange?.currency.toLowerCase();
      const timeUnit = salaryRange?.salaryPeriod.toLowerCase();

      return {
        min: salaryRange?.lowerBound,
        max: salaryRange?.upperBound,
        currency: isCorrectCurrency(currency) ? currency : "pln",
        type: "brutto",
        timeUnit: isCorrectTimeUnit(timeUnit) ? timeUnit : "month",
      };
    });
  }

  private standardizeCategories(categories: JobOfferSolidJobs["requiredSkills"] | undefined): JobOffer["technologies"] {
    if (!categories || !categories.length) return [];

    return categories?.map(cat => cat?.name.toLowerCase());
  }

  protected async getMaxPages(): Promise<number> {
    return 1;
  }
}

export { ScrapperSolidJobs };
