import { NextFunction, type Request, type Response } from "express";

import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

import type { StatisticsService } from "@/components/statistics/statistics.service";

interface IStatisticsController {
  getGeneralStatistics(req: Request, res: Response, next: NextFunction): Promise<unknown>;

  generateGeneralStatistics(req: Request, res: Response, next: NextFunction): Promise<unknown>;
}

class StatisticsController implements IStatisticsController {
  private statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
  }

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
