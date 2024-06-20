import { type Browser, type Page } from "puppeteer";

import { generateId } from "@/utils/generate-id";

import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/instances/scrapper-base";
import { PRACUJ_DATA_FILENAME } from "@/components/offers/helpers/offers.constants";
import { isContractTypesArr, isWorkModesArr, isWorkPositionLevelsArr, isWorkSchedulesArr } from "@/components/offers/helpers/offers.utils";

import type { JobOfferPracuj } from "@/types/offers/pracuj.types";
import {
  type CurrencyCodes,
  type JobOffer,
  type SalaryTypes,
  type ScrappedDataResponse,
  type TimeUnitTypes,
} from "shared/src/offers/offers.types";
import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

const SCRAPPED_PAGE_WIDTH = 1200;
const SCRAPPED_PAGE_HEIGHT = 980;

class ScrapperPracuj extends ScrapperBase {
  protected maxPages: number;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  public getScrappedData = async (): Promise<ScrappedDataResponse> => {
    if (!this.page) await this.initializePage();
    if (!this.page) return { createdAt: new Date(Date.now()).toISOString(), data: [] };

    await this.page?.setViewport({
      width: SCRAPPED_PAGE_WIDTH,
      height: SCRAPPED_PAGE_HEIGHT,
    });

    const data = await this.saveScrappedData<JobOffer>({
      fileName: PRACUJ_DATA_FILENAME,
    });
    return { createdAt: new Date(Date.now()).toISOString(), data: data || [] };
  };

  protected standardizeData(offers: JobOfferPracuj[]): JobOffer[] {
    if (!offers || !offers?.length) return [];
    return offers?.map((offer): JobOffer => {
      const positionLevels = this.standardizePositionLevels(offer?.positionLevels);
      const contractTypes = this.standardizeContractTypes(offer?.typesOfContract);
      const workSchedules = this.standardizeWorkSchedules(offer?.workSchedules);
      const workModes = this.standardizeWorkModes(offer?.workModes);
      const salaryRange = this.standardizeSalary(offer?.salaryDisplayText);

      const idHash = `${offer?.jobTitle}-${offer?.companyName}-${offer?.lastPublicated}-pracuj`;
      const parsedOffer = {
        id: generateId(idHash),
        dataSourceCode: "pracuj",
        slug: "",
        positionName: offer?.jobTitle,
        company: {
          logoUrl: offer?.companyLogoUri,
          name: offer?.companyName,
        },
        positionLevels: [],
        contractTypes: [],
        workModes: [],
        workSchedules: [],
        salaryRange,
        technologies: offer?.technologies,
        description: offer?.jobDescription,
        createdAt: offer?.lastPublicated,
        expirationDate: offer?.expirationDate,
        offerUrls: [],
        workplaces: [],
        // offerUrls: offer?.offers?.map(url => url?.offerAbsoluteUri),
        // workplaces: offer?.offers?.map(place => place?.displayWorkplace),
      } satisfies JobOffer;

      return parsedOffer;
      // return { ...parsedOffer, slug: generateJobOfferSlug(parsedOffer) } as JobOffer;
    });
  }

  private async acceptCookieConsent(page: Page | undefined): Promise<void> {
    if (!page) return;
    try {
      await page.waitForSelector('[data-test="button-submitCookie"]', { timeout: 5000 });
      await page.click('[data-test="button-submitCookie"]');
    } catch (err) {
      console.log("Cannot press cookie consent.");
    }
  }

  // Abstract class from ScrapperBase which is used inside base instance in saveScrappedDataToFile
  protected scrapePage = async <T>(pageNumber: number, retries = 3): Promise<T[] | undefined> => {
    const page = await this.browser?.newPage();
    if (!page) return [];

    try {
      await page.goto(`${this.url}?pn=${pageNumber}`, { waitUntil: "networkidle2" });
      await this.acceptCookieConsent(page).catch(err => {
        console.log("Cannot accept cookie consent: ", err);
        return undefined;
      });

      await page
        .waitForSelector('script[id="__NEXT_DATA__"]', {
          timeout: 20000,
        })
        .catch(err => {
          console.log("Pracuj nextdata wait error: ", err);
          return undefined;
        });

      const content = await page.evaluate(() => {
        const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });
      if (content) return content.props.pageProps.data.jobOffers.groupedOffers as T[];
      return [];
    } catch (err) {
      if (retries > 0) return this.scrapePage<T>(pageNumber, retries - 1);
      throw new AppError({
        statusCode: 500,
        code: ERROR_CODES.internal_error,
        message: `scrapePage: ${JSON.stringify(err)}`,
      });
    } finally {
      await page.close();
    }
  };

  protected async getMaxPages() {
    if (!this.page) return 1;
    // // TODO: Uncomment that, added low pages to prevent overload
    const maxPagesElement = await this.page.$('span[data-test="top-pagination-max-page-number"]');
    let maxPagesValue = "1";
    if (maxPagesElement) {
      const textContent = await this.page.evaluate(el => el?.textContent, maxPagesElement);
      if (textContent) maxPagesValue = textContent ?? "1";
    }
    return parseInt(maxPagesValue);
    // return 15;
  }

  private transformSalaryTimeUnit = (val: string): TimeUnitTypes => {
    switch (val) {
      case "godz":
        return "hour";
      case "dzień":
        return "day";
      case "mies":
        return "month";
      default:
        return "month";
    }
  };

  private standardizeSalary = (salary: JobOfferPracuj["salaryDisplayText"] | undefined): JobOffer["salaryRange"] => {
    if (!salary) return [];
    const regex = /(\d[\d\s]*)–(\d[\d\s]*)\s*([a-zA-Zżł$€£]*)\s*(brutto|netto)?(?:\s*\(\+\s*VAT\))?\s*\/\s*(godz|dzień|mies)/;

    const matched = salary.match(regex);

    const min = matched?.[1] ? parseInt(matched[1].replace(/\s/g, "")) : 0;
    const max = matched?.[2] ? parseInt(matched[2].replace(/\s/g, "")) : 0;

    if (!min || !max) return [];
    const currency = (matched?.[3].trim() ?? "pln") as CurrencyCodes;
    const type = (matched?.[4] ? matched[4].trim() : "brutto") as SalaryTypes;
    const timeUnit = matched?.[5] ? this.transformSalaryTimeUnit(matched[5].trim()) : "month";

    return [
      {
        min,
        max,
        currency,
        type,
        timeUnit,
      },
    ];
  };

  standardizeContractTypes = (types: JobOfferPracuj["typesOfContract"] | undefined): JobOffer["contractTypes"] => {
    if (!types || !types.length) return [];
    const standardizedTypes = types.reduce(
      (acc, _type) => {
        const type = _type.toLowerCase();
        if (type.includes("prace") || type.includes("pracę")) acc.push("uop");
        else if (type.includes("b2b")) acc.push("b2b");
        else if (type.includes("zlecenie")) acc.push("uz");
        else if (type.includes("dzieło")) acc.push("uod");
        return acc;
      },
      [] as JobOffer["contractTypes"],
    );

    if (isContractTypesArr(standardizedTypes)) return standardizedTypes;
    else return [];
  };

  standardizeWorkModes = (modes: JobOfferPracuj["workModes"] | undefined): JobOffer["workModes"] => {
    if (!modes || !modes.length) return [];

    const standardizedModes = modes.reduce(
      (acc, _mode) => {
        const mode = _mode.toLowerCase();
        if (mode.includes("zdalna")) acc.push("remote");
        else if (mode.includes("stacjonarna")) acc.push("stationary");
        else if (mode.includes("hybrydowa")) acc.push("hybrid");
        return acc;
      },
      [] as JobOffer["workModes"],
    );

    if (isWorkModesArr(standardizedModes)) return standardizedModes;
    else return [];
  };
  standardizeWorkSchedules = (schedules: JobOfferPracuj["workSchedules"] | undefined): JobOffer["workSchedules"] => {
    if (!schedules || !schedules.length) return [];

    const standardizedSchedules = schedules.reduce(
      (acc, _schedule) => {
        const schedule = _schedule.toLowerCase();
        if (schedule.includes("pełny")) acc.push("full-time");
        else if (schedule.includes("część")) acc.push("part-time");
        return acc;
      },
      [] as JobOffer["workSchedules"],
    );

    if (isWorkSchedulesArr(standardizedSchedules)) return standardizedSchedules;
    else return [];
  };
  standardizePositionLevels = (levels: JobOfferPracuj["positionLevels"] | undefined): JobOffer["positionLevels"] => {
    if (!Array.isArray(levels) || !levels?.length) return ["junior"];

    const standardizedLevels = levels.reduce(
      (acc, _level) => {
        const level = _level.toLowerCase();
        if (level.includes("junior")) acc.push("junior");
        else if (level.includes("mid") || level.includes("regular") || level.includes("ekspert")) acc.push("mid");
        else if (level.includes("senior")) acc.push("senior");
        else if (level.includes("menager") || level.includes("kierownik") || level.includes("menedżer")) acc.push("manager");
        return acc;
      },
      [] as JobOffer["positionLevels"],
    );

    if (isWorkPositionLevelsArr(standardizedLevels)) return standardizedLevels;
    else return ["junior"];
  };
}

export { ScrapperPracuj };
