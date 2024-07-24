import { NextFunction, type Request, type Response } from "express";

import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

import type { StatisticsService } from "@/components/statistics/statistics.service";
import {
  dailyAllOffersCountPayloadSchema,
  dailyCategoriesPayloadSchema,
  dailyCountPayloadSchema,
} from "shared/src/statistics/statistics.schemas";

interface IStatisticsController {
  getGeneralStatistics(req: Request, res: Response, next: NextFunction): void;

  generateGeneralStatistics(req: Request, res: Response, next: NextFunction): Promise<unknown>;
}

class StatisticsController implements IStatisticsController {
  private statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
  }

  public postAllOffersCountStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = dailyAllOffersCountPayloadSchema.parse(req.body);
      const data = await this.statisticsService.addAllOffersCountStatistics(payload);
      res.status(201).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public postDailyOffersCountStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = dailyCountPayloadSchema.parse(req.body);
      console.log("PEJLOD", payload);
      const data = await this.statisticsService.addDailyOffersCountStatistics(payload);
      res.status(201).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        }),
      );
    }
  };
  public postDailyCategoriesStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = dailyCategoriesPayloadSchema.parse(req.body);
      const data = await this.statisticsService.addDailyCategoriesStatistics(payload);
      res.status(201).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public getAllOffersCountStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveDailyCategoryStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public getDailyCategoryStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveDailyCategoryStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public getDailyCountStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveDailyCountStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public getGeneralStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.getGeneralStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  public generateGeneralStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.generateGeneralStatistics();
      res.status(201).json(data);
    } catch (err) {
      if (err instanceof AppError) next(err);
      next(
        new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        }),
      );
    }
  };
}

export { StatisticsController };
