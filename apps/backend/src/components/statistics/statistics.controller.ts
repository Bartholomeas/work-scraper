import { NextFunction, type Request, type Response } from "express";

import { AppErrorController } from "@/components/error/app-error.controller";

import type { StatisticsService } from "@/components/statistics/statistics.service";
import {
  dailyAllOffersCountPayloadSchema,
  dailyCategoriesPayloadSchema,
  dailyPositionsCountPayloadSchema,
} from "shared/src/statistics/statistics.schemas";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";

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
      next(ErrorHandlerController.handleError(err));
    }
  };

  public postDailyOffersCountStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = dailyPositionsCountPayloadSchema.parse(req.body);
      const data = await this.statisticsService.addDailyOffersCountStatistics(payload);
      res.status(201).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };
  public postDailyCategoriesStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = dailyCategoriesPayloadSchema.parse(req.body);
      const data = await this.statisticsService.addDailyCategoriesStatistics(payload);
      res.status(201).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getAllDailyOffersCountStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveAllDailyOffersCountStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getDailyCategoryStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveDailyCategoryStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getDailyPositionsCountStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveDailyPositionsCountStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getGeneralStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.getGeneralStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public generateGeneralStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.generateGeneralStatistics();
      res.status(201).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };
}

export { StatisticsController };
