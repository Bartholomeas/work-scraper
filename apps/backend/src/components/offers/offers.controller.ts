import { NextFunction, type Request, type Response } from "express";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { offersQueryParamsSchema } from "shared/src/offers/offers.schemas";

import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

import { OffersCategoriesService } from "@/components/offers/service/offers-categories.service";
import { ScrapperController } from "@/components/offers/scrapper/scrapper.controller";

import type { OffersService } from "@/components/offers/service/offers.service";

puppeteer.use(StealthPlugin());

class OffersController {
  private offersService: OffersService;
  private offersCategoriesService: OffersCategoriesService;
  private scrapperController: ScrapperController;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
    this.offersCategoriesService = new OffersCategoriesService();
    this.scrapperController = new ScrapperController(offersService);
  }

  public deleteOutdatedOffers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedCount = await this.offersService.deleteOutdatedRecords();
      // console.log("Deleted count xdd: ", deletedCount);

      res.status(200).json({
        createdAt: new Date(Date.now()),
        data: `Deleted ${deletedCount} outdated records.`,
        // data2: deletedCount.length,
      });
    } catch (err) {
      next(
        new AppError({
          statusCode: 400,
          code: ERROR_CODES.invalid_type,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public scrapeOffersData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.scrapperController.scrapeOffersData();
      res.status(200).json({
        createdAt: new Date(Date.now()),
        data,
      });
    } catch (err) {
      next(
        new AppError({
          statusCode: 400,
          code: ERROR_CODES.invalid_type,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public getOffersMetadata = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.offersService.getOffersMetadata();
      res.status(200).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 400,
          code: ERROR_CODES.invalid_type,
          message: JSON.stringify(err),
        }),
      );
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
      next(err);
    }
  };

  public getAllWorkplaces = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const placesDTO = await this.offersService.getAllWorkplaces();

      res.status(200).json(placesDTO);
    } catch (err) {
      next(
        new AppError({
          statusCode: 400,
          code: ERROR_CODES.invalid_type,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public getOffersBaseCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.offersCategoriesService.getBaseCategories();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
}

export { OffersController };
