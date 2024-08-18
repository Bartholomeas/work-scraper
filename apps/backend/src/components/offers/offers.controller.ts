import { NextFunction, type Request, type Response } from "express";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { offersQueryParamsSchema } from "shared/src/offers/offers.schemas";

import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import { ScrapperController } from "@/components/offers/scrapper/scrapper.controller";
import { OffersCategoriesService } from "@/components/offers/service/offers-categories.service";

import type { OffersService } from "@/components/offers/service/offers.service";
import { statisticsModule } from "@/components/statistics/statistics.module";

puppeteer.use(StealthPlugin());

class OffersController {
  private offersService: OffersService;
  private offersCategoriesService: OffersCategoriesService;
  private scrapperController: ScrapperController;

  constructor(offersService: OffersService, _scrapperController?: ScrapperController) {
    this.offersService = offersService;
    this.offersCategoriesService = new OffersCategoriesService();
    this.scrapperController = _scrapperController || new ScrapperController(offersService);
    statisticsModule.controller;
  }

  public updateCategoriesCounts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.offersService.updateCategoriesCounts();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };
  public updateWorkplacesCounts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.offersService.updateWorkplacesCounts();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public deleteOutdatedOffers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedCount = await this.offersService.deleteOutdatedRecords();

      res.status(200).json({
        createdAt: new Date(Date.now()),
        data: `Deleted ${deletedCount} outdated records.`,
        // data2: deletedCount.length,
      });
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public scrapeOffersData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      this.scrapperController.scrapeOffersData().then(async () => {
        await this.generateScrappedStatistics();
      });

      res.status(204).json();
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getOffersMetadata = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.offersService.getOffersMetadata();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getOffers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { data: queryParams, success } = offersQueryParamsSchema.safeParse(req.query);
      const { data, meta } = await this.offersService.getJobOffers(success ? queryParams : undefined);

      res.status(200).json({
        createdAt: new Date(Date.now()),
        meta,
        data,
      });
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getAllWorkplaces = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const placesDTO = await this.offersService.getAllWorkplaces();

      res.status(200).json(placesDTO);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getOffersBaseFilters = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.offersCategoriesService.retrieveBaseFilters();

      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  private generateScrappedStatistics = async (): Promise<void> => {
    const statsController = statisticsModule.controller;

    // Without Promise.all as it needs to be called in this order
    await this.offersService.updateWorkplacesCounts();
    await this.offersService.updateCategoriesCounts();
    await this.offersService.deleteOutdatedRecords();
    await statsController.generateAllOffersCountStatistics();
    await statsController.generateDailyPositionsStatistics();
    await statsController.generateDailyCategoriesStatistics();
    await statsController.generateDailyWorkplacesStatistics();
    await statsController.generateGeneralStatisticsCommand();
  };
}

export { OffersController };
