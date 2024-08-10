import { NextFunction, type Request, type Response } from "express";

import type { StatisticsService } from "@/components/statistics/statistics.service";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import { StatisticsCron } from "@/components/statistics/statistics-cron";

export interface IStatisticsController {
  generateAllOffersCountStatistics(): Promise<unknown>;

  generateDailyPositionsStatistics(): Promise<unknown>;

  generateDailyCategoriesStatistics(): Promise<unknown>;

  generateDailyWorkplacesStatistics(): Promise<unknown>;

  generateAllStatistics(req: Request, res: Response, next: NextFunction): Promise<unknown>;

  generateGeneralStatistics(req: Request, res: Response, next: NextFunction): Promise<void>;

  getAllDailyOffersCountStatistics(req: Request, res: Response, next: NextFunction): Promise<void>;

  getDailyCategoryStatistics(req: Request, res: Response, next: NextFunction): Promise<void>;

  getDailyPositionsStatistics(req: Request, res: Response, next: NextFunction): Promise<void>;

  getDailyWorkplacesStatistics(req: Request, res: Response, next: NextFunction): Promise<void>;

  getGeneralStatistics(req: Request, res: Response, next: NextFunction): Promise<void>;
}

class StatisticsController implements IStatisticsController {
  private statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
    new StatisticsCron(this);
  }

  public generateAllOffersCountStatistics = async () => {
    try {
      return await this.statisticsService.addAllOffersCountStatistics();
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  };

  public generateDailyPositionsStatistics = async () => {
    try {
      // const payload = dailyPositionsCountPayloadSchema.parse(req.body);
      return await this.statisticsService.addDailyPositionsStatistics();
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  };

  public generateDailyCategoriesStatistics = async () => {
    try {
      return await this.statisticsService.addDailyCategoriesStatistics();
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  };
  public generateDailyWorkplacesStatistics = async () => {
    try {
      return await this.statisticsService.addDailyWorkplacesStatistics();
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  };

  public generateAllStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stats = await Promise.all([
        this.statisticsService.generateGeneralStatistics(),
        this.generateAllOffersCountStatistics(),
        this.generateDailyPositionsStatistics(),
        this.generateDailyCategoriesStatistics(),
        this.generateDailyWorkplacesStatistics(),
      ]);

      res.status(201).json(stats);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };

  public getAllDailyOffersCountStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveAllDailyOffersStatistics();
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

  public getDailyPositionsStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveDailyPositionsStatistics();
      res.status(200).json(data);
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };
  public getDailyWorkplacesStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.statisticsService.retrieveDailyWorkplacesStatistics();
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

  public deleteAllDailyStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.statisticsService.deleteAllDailyStats();
      res.status(204).json();
    } catch (err) {
      next(ErrorHandlerController.handleError(err));
    }
  };
}

export { StatisticsController };
