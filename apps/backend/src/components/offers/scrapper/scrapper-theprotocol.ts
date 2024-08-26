import { type Browser } from "puppeteer";
import dayjs from "dayjs";

import type { CurrencyCodes, JobOffer, ScrappedDataResponse } from "shared/src/offers/offers.types";

import { JOB_DATA_SOURCES, THEPROTOCOL_NAME } from "@/misc/constants";
import { generateId } from "@/utils/generate-id";

import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import { isContractTypesArr, isWorkModesArr, isWorkPositionLevelsArr } from "@/components/offers/helpers/offers.utils";
import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/scrapper/scrapper-base";

import { JobOfferTheProtocol } from "@/types/offers/theprotocol.types";

class ScrapperTheProtocol extends ScrapperBase {
  protected maxPages: number;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public async getScrappedData(): Promise<ScrappedDataResponse> {
    const data = await this.saveScrappedData<JobOffer>();
    return { createdAt: new Date().toISOString(), data: data || [] };
  }

  protected standardizeData(offers: JobOfferTheProtocol[]): JobOffer[] {
    if (!offers?.length) return [];
    return offers.map(offer => {
      const idHash = `${offer?.title}-${offer?.employer}-theprotocol`;

      return {
        id: generateId(idHash),
        dataSourceCode: THEPROTOCOL_NAME,
        dataSource: JOB_DATA_SOURCES.theprotocol,
        slug: "",
        positionName: offer?.title,
        company: {
          logoUrl: null,
          name: offer?.employer,
        },
        positionLevels: this.standardizePositionLevels(offer?.positionLevels),
        contractTypes: this.standardizeContractTypes(offer?.typesOfContracts),
        workModes: this.standardizeWorkModes(offer?.workModes),
        workSchedules: ["full-time"] as JobOffer["workSchedules"],
        salaryRange: this.standardizeSalary(offer?.typesOfContracts),
        technologies: offer?.technologies,
        description: undefined,
        createdAt: dayjs(new Date(offer?.publicationDateUtc)).toISOString(),
        expirationDate: dayjs(new Date(offer?.publicationDateUtc)).add(1, "month").toISOString(),
        offerUrls: [`https://theprotocol.it/praca/${offer?.offerUrlName}`],
        workplaces: offer?.workplace?.map(this.mapWorkplace),
      } satisfies JobOffer;
    });
  }

  private mapWorkplace = (place: JobOfferTheProtocol["workplace"][0]): { city: string; address: string | null } => {
    const [placeCity, placeAddress] = place?.location.split(",") ?? ["", null];
    return {
      city: placeCity?.trim(),
      address: placeAddress?.trim() ?? null,
    };
  };

  protected scrapePage = async <T>(pageNumber: number, retries = 3): Promise<T[] | undefined> => {
    const page = await this.browser?.newPage();
    if (!page) return [];
    try {
      await this.listenAndRestrictRequests(page);
      console.log(`Scrapping TheProtocol page: ${pageNumber}`);
      await page.goto(`${this.url}?pageNumber=${pageNumber}`, { waitUntil: "networkidle2" });

      await page.waitForSelector('script[id="__NEXT_DATA__"]').catch(err => {
        console.log("TheProtocol nextdata wait error: ", err);
        return undefined;
      });

      const content = await page.evaluate(() => {
        const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });
      return (content?.props.pageProps.offersResponse.offers as T[]) || [];
    } catch (err) {
      if (retries > 0) return this.scrapePage<T>(pageNumber, retries - 1);
      throw ErrorHandlerController.handleError(err);
    } finally {
      await page.close();
    }
  };

  protected async getMaxPages(): Promise<number> {
    try {
      const page = await this.browser?.newPage();
      if (!page) return 1;
      await page?.goto(this.url);
      const paginationElements = await page.$$('a[data-test="anchor-pageNumber"]');
      const lastPaginationElement = paginationElements[paginationElements.length - 1];
      const maxPagesValue = await page.evaluate(el => el.textContent, lastPaginationElement);
      return parseInt(maxPagesValue ?? "1", 10);
    } catch (err) {
      console.log("Error while getting max pages");
      return 1;
    }
  }

  private standardizeSalary = (salaries: JobOfferTheProtocol["typesOfContracts"] | undefined): JobOffer["salaryRange"] => {
    if (!salaries || !salaries.length) return [];

    const getSalaryType = (salary: JobOfferTheProtocol["typesOfContracts"][0]["salary"]) => {
      switch (salary?.kindName) {
        case "net (+ VAT)":
        case "netto (+ VAT)":
          return "netto";
        default:
          return "brutto";
      }
    };

    const getTimeUnit = (timeUnit: JobOfferTheProtocol["typesOfContracts"][0]["salary"]) => {
      switch (timeUnit?.timeUnit?.shortForm) {
        case "mth.":
          return "month";
        case "hr.":
          return "hour";
        case "godz.":
          return "day";
        case "mies.":
          return "month";
        default:
          return "month";
      }
    };

    return salaries
      ?.filter(el => el.salary)
      ?.map(({ salary }): JobOffer["salaryRange"][0] => {
        return {
          min: salary?.from ?? 0,
          max: salary?.to ?? 0,
          currency: salary?.currencySymbol === "zł" ? "pln" : ((salary?.currencySymbol?.toLowerCase() ?? "pln") as CurrencyCodes),
          type: getSalaryType(salary),
          timeUnit: getTimeUnit(salary),
        } satisfies JobOffer["salaryRange"][0];
      });
  };

  public standardizeContractTypes = (types: JobOfferTheProtocol["typesOfContracts"] | undefined): JobOffer["contractTypes"] => {
    if (!types?.length) return [];

    const standardizedTypes = types?.map(type => {
      switch (type.id) {
        case 0:
          return "uop";
        case 1:
          return "uod";
        case 2:
          return "uz";
        case 3:
          return "b2b";
        case 4:
          return "uz";
        case 5:
          return "uod";
        case 6:
          return "uop";
        case 7:
          return "intern";
        default:
          return "uop";
      }
    });

    return isContractTypesArr(standardizedTypes) ? standardizedTypes : [];
  };

  public standardizeWorkModes = (modes: JobOfferTheProtocol["workModes"] | undefined): JobOffer["workModes"] => {
    if (!modes?.length) return [];

    const standardizedModes = modes?.map((mode): JobOffer["workModes"][0] => {
      switch (mode) {
        case "full office":
          return "stationary";
        case "stacjonarna":
          return "stationary";
        case "hybrid":
          return "hybrid";
        case "hybrydowa":
          return "hybrid";
        case "remote":
          return "remote";
        case "zdalna":
          return "remote";
        default:
          return "hybrid";
      }
    });

    return isWorkModesArr(standardizedModes) ? standardizedModes : [];
  };

  standardizePositionLevels = (levels: JobOfferTheProtocol["positionLevels"] | undefined): JobOffer["positionLevels"] => {
    if (!Array.isArray(levels) || !levels.length) return ["junior"];

    const standardizedLevels = levels?.map(({ value }): JobOffer["positionLevels"][0] => {
      switch (value) {
        case "trainee":
          return "intern";
        case "assistant":
          return "junior";
        case "junior":
          return "junior";
        case "mid":
          return "mid";
        case "expert":
          return "mid";
        case "senior":
          return "senior";
        case "lead":
          return "senior";
        case "manager":
          return "manager";
        case "head":
          return "manager";
        default:
          return "junior";
      }
    });

    return isWorkPositionLevelsArr(standardizedLevels) ? standardizedLevels : ["junior"];
  };
}

export { ScrapperTheProtocol };
