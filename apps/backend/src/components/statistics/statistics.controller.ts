import { NextFunction, type Request, type Response } from "express";

import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

import type { StatisticsService } from "@/components/statistics/statistics.service";

interface IStatisticsController {}

class StatisticsController implements IStatisticsController {
  private statisticsService: StatisticsService;

  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
  }

  public getGeneralStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json("xdd");
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
}

export { StatisticsController };
