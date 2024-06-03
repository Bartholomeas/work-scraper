import slugify from "slugify";
import { type Browser } from "puppeteer";

import { generateId } from "@/utils/generate-id";

import { ScrapperBase, type ScrapperBaseProps } from "@/components/offers/instances/scrapper-base";
import { PRACUJ_DATA_FILENAME } from "@/components/offers/helpers/offers.constants";
import { isContractTypesArr, isWorkModesArr, isWorkPositionLevelsArr, isWorkSchedulesArr } from "@/components/offers/helpers/offers.utils";

import type { JobOfferPracuj } from "@/types/offers/pracuj.types";
import { type JobOffer, type JobQueryParams, type ScrappedDataResponse } from "@/types/offers/offers.types";

import { SLUGIFY_CONFIG } from "@/lib/slugify";

const SCRAPPED_PAGE_WIDTH = 1200;
const SCRAPPED_PAGE_HEIGHT = 980;

class ScrapperPracuj extends ScrapperBase {
  protected maxPages: number;

  constructor(browser: Browser | undefined, props: ScrapperBaseProps) {
    super(browser, props);
    this.maxPages = 1;
  }

  // public getScrappedData = async (query: JobQueryParams = {}): Promise<JobOffer[] | null> => {
  public getScrappedData = async (query: JobQueryParams = {}): Promise<ScrappedDataResponse> => {
    if (!this.page) return { createdAt: new Date(Date.now()).toISOString(), data: [] };

    await this.page.setViewport({
      width: SCRAPPED_PAGE_WIDTH,
      height: SCRAPPED_PAGE_HEIGHT,
    });
    const isDataOutdated = await this.isFileOutdated(`${PRACUJ_DATA_FILENAME}-standardized`);
    if (!isDataOutdated) {
      const savedData = await this.filesManager.readFromFile(`${PRACUJ_DATA_FILENAME}-standardized`);
      if (savedData) return JSON.parse(savedData);
    }

    const data = await this.saveScrappedData<JobOffer>({
      fileName: PRACUJ_DATA_FILENAME,
    });
    return { createdAt: new Date(Date.now()).toISOString(), data: data || [] };
  };

  protected standardizeData(offers: JobOfferPracuj[]): JobOffer[] {
    if (!offers || !offers?.length) return [];
    return offers.map(
      (offer): JobOffer => ({
        id: generateId(offer?.jobTitle),
        dataSourceCode: "pracuj",
        slug: slugify(offer?.jobTitle, SLUGIFY_CONFIG),
        positionName: offer?.jobTitle,
        company: {
          logoUrl: offer?.companyLogoUri,
          name: offer?.companyName,
        },
        positionLevels: this.standardizePositionLevels(offer?.positionLevels),
        contractTypes: this.standardizeContractTypes(offer?.typesOfContract),
        workModes: this.standardizeWorkModes(offer?.workModes),
        workSchedules: this.standardizeWorkSchedules(offer?.workSchedules),
        technologies: offer?.technologies,
        description: offer?.jobDescription,
        createdAt: offer?.lastPublicated,
        expirationDate: offer?.expirationDate,
        offerUrls: offer?.offers?.map(url => url?.offerAbsoluteUri),
        workplace: offer?.offers?.map(place => place?.displayWorkplace),
      }),
    );
  }

  // Abstract class from ScrapperBase which is used inside base instance in saveScrappedDataToFile
  protected scrapePage = async <T>(pageNumber: number): Promise<T[] | undefined> => {
    const page = await this?.browser?.newPage();
    if (!page) return;

    try {
      await page.goto(`${this.url}?pn=${pageNumber}`, { waitUntil: "networkidle2" });

      const content = await page.evaluate(() => {
        const scriptTag = document.querySelector('script[id="__NEXT_DATA__"]');
        return scriptTag ? JSON.parse(scriptTag.innerHTML) : undefined;
      });

      await page.close();
      if (content) return content.props.pageProps.data.jobOffers.groupedOffers as T[];
      return;
    } catch (err) {
      console.error(`Error processing page ${pageNumber}:`, err);
      await page.close();
      return;
    }
  };

  protected async getMaxPages() {
    if (!this.page) return 1;

    // // TODO: Uncomment that, added low pages to prevent overload
    // const maxPagesElement = await this.page.$('span[data-test="top-pagination-max-page-number"]');
    // let maxPagesValue = "1";
    // if (maxPagesElement) {
    //   const textContent = await this.page.evaluate(el => el?.textContent, maxPagesElement);
    //   if (textContent) maxPagesValue = textContent ?? "1";
    // }
    // return parseInt(maxPagesValue);
    return 10;
  }

  standardizeContractTypes = (types: JobOfferPracuj["typesOfContract"] | undefined): JobOffer["contractTypes"] => {
    if (!types || !types.length) return [];
    const standardizedTypes = types.reduce(
      (acc, _type) => {
        const type = _type.toLowerCase();
        if (type.includes("prace")) acc.push("uop");
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
    if (!levels || !levels.length) return [];

    const standardizedLevels = levels.reduce(
      (acc, _level) => {
        const level = _level.toLowerCase();
        if (level.includes("junior")) acc.push("junior");
        else if (level.includes("mid") || level.includes("regular") || level.includes("ekspert")) acc.push("mid");
        else if (level.includes("senior")) acc.push("senior");
        else if (level.includes("menager") || level.includes("kierownik")) acc.push("manager");
        return acc;
      },
      [] as JobOffer["positionLevels"],
    );

    if (isWorkPositionLevelsArr(levels)) return standardizedLevels;
    else return [];
  };
}

export { ScrapperPracuj };
