import { Prisma } from "@prisma/client";
import { NextFunction, type Request, type Response } from "express";

jest.mock("@/components/statistics/statistics.service");
import { IStatisticsController, StatisticsController } from "@/components/statistics/statistics.controller";

import { StatisticsServiceMock } from "@/tests/__mocks__/statistics/statistics.service.mock";
import { ErrorHandlerController } from "@/tests/__mocks__/error-handler.controller";
import {
  expectedAllStatsResponse,
  retrieveallDailyOffersStatisticsMockResponse,
  retrieveDailyPositionsStatisticsMockResponse,
} from "@/tests/__mocks__/statistics/statistics.service.constants";
import { IStatisticsService, StatisticsService } from "@/components/statistics/statistics.service";

const req = {} as Request;
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as Response;
const next = jest.fn() as NextFunction;

const checkPrismaErrorHandling = async (methodKey: keyof IStatisticsController, mockStatisticsService: StatisticsService) => {
  const mockErrorValidation = new Prisma.PrismaClientValidationError("Validation error", { clientVersion: "5.17.0" });
  // const mockErrorKnown = new Prisma.PrismaClientKnownRequestError("Known request error", {
  //   clientVersion: "5.17.0",
  //   code: "P2025",
  // });

  const statisticsController = new StatisticsController({
    ...mockStatisticsService,
    [methodKey]: jest.fn().mockRejectedValue(mockErrorValidation),
  } as StatisticsService);

  try {
    // Check method needs 3 params, if it, then pass req,res,next
    const method = statisticsController[methodKey] as (...args: unknown[]) => Promise<unknown>;
    if (method.length === 3) await method(req as Request, res as Response, next);
    else await method();
  } catch (err) {
    expect(ErrorHandlerController.handleError).toHaveBeenCalledWith(mockErrorValidation);
  }
};

describe("StatisticsController", () => {
  const mockStatisticsService: StatisticsService = new StatisticsServiceMock();
  const req = {} as Request;
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response;
  const next = jest.fn() as NextFunction;

  describe("Generating statistics", () => {
    describe("generateAllOffersCountStatistics", () => {
      it("should generate all offers count statistics successfully", async () => {
        const statisticsController = new StatisticsController(mockStatisticsService);

        const result = await statisticsController.generateAllOffersCountStatistics();

        expect(mockStatisticsService.addAllOffersCountStatistics).toHaveBeenCalled();
        expect(result.totalOffers).toEqual(7565);
      });

      it("should handle Prisma error when generateAllOffersCountStatistics runs", async () => {
        await checkPrismaErrorHandling("generateAllOffersCountStatistics", mockStatisticsService);
      });
    });

    describe("generateDailyPositionsStatistics", () => {
      it("should generate daily positions statistics successfully", async () => {
        const statisticsController = new StatisticsController(mockStatisticsService);

        const result = await statisticsController.generateDailyPositionsStatistics();

        expect(mockStatisticsService.addDailyPositionsStatistics).toHaveBeenCalled();

        expect(result.juniorOffers).toEqual(621);
        expect(result.midOffers).toEqual(4358);
        expect(result.seniorOffers).toEqual(3026);
        expect(result.otherOffers).toEqual(414);
      });

      it("should handle Prisma error when generateDailyPositionsStatistics runs", async () => {
        await checkPrismaErrorHandling("generateDailyPositionsStatistics", mockStatisticsService);
      });
    });

    describe("generateDailyCategoriesStatistics", () => {
      it("should generate daily categories statistics successfully", async () => {
        const mockTopCategories = expectedAllStatsResponse.filter(el => el.categories).flatMap(el => el.categories);

        const statisticsController = new StatisticsController({
          ...mockStatisticsService,
          addDailyCategoriesStatistics: jest.fn().mockResolvedValue(mockTopCategories),
        } as unknown as StatisticsService);

        const result = await statisticsController.generateDailyCategoriesStatistics();

        expect(mockStatisticsService.addDailyPositionsStatistics).toHaveBeenCalled();
        expect(result).toHaveLength(6);
        expect(result).toEqual(mockTopCategories);
      });

      it("should handle Prisma error when generateDailyCategoriesStatistics runs", async () => {
        await checkPrismaErrorHandling("generateDailyCategoriesStatistics", mockStatisticsService);
      });
    });

    describe("generateAllStatistics", () => {
      it("should run generateAllStatistics and return these stats with status 201", async () => {
        const statisticsController = new StatisticsController(mockStatisticsService);
        await statisticsController.generateAllStatistics(req, res, next);

        expect(mockStatisticsService.generateGeneralStatistics).toHaveBeenCalled();
        expect(mockStatisticsService.addAllOffersCountStatistics).toHaveBeenCalled();
        expect(mockStatisticsService.addDailyPositionsStatistics).toHaveBeenCalled();
        expect(mockStatisticsService.addDailyCategoriesStatistics).toHaveBeenCalled();
        expect(mockStatisticsService.addDailyWorkplacesStatistics).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expectedAllStatsResponse);
      });

      it("should handle Prisma error when generateAllStatistics runs", async () => {
        await checkPrismaErrorHandling("generateAllStatistics", mockStatisticsService);
      });
    });

    describe("getAllDailyOffersCountStatistics", () => {
      it("should run getAllDailyOffersCountStatistics and return these stats with status 200", async () => {
        const statisticsController = new StatisticsController(mockStatisticsService);
        await statisticsController.getAllDailyOffersCountStatistics(req, res, next);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(retrieveallDailyOffersStatisticsMockResponse);
      });

      it("should handle Prisma error when getAllDailyOffersCountStatistics runs", async () => {
        await checkPrismaErrorHandling("getAllDailyOffersCountStatistics", mockStatisticsService);
      });
    });

    describe("getDailyCategoryStatistics", () => {
      it("should run getDailyCategoryStatistics and return these stats with status 200", async () => {
        const statisticsController = new StatisticsController(mockStatisticsService);
        await statisticsController.getDailyCategoryStatistics(req, res, next);

        expect(mockStatisticsService.retrieveDailyCategoryStatistics).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(retrieveallDailyOffersStatisticsMockResponse);
      });

      it("should handle Prisma error when getDailyCategoryStatistics runs", async () => {
        await checkPrismaErrorHandling("getDailyCategoryStatistics", mockStatisticsService);
      });
    });
    describe("getDailyPositionsStatistics", () => {
      it("should run getDailyPositionsStatistics and return these stats with status 200", async () => {
        const statisticsController = new StatisticsController(mockStatisticsService);
        await statisticsController.getDailyPositionsStatistics(req, res, next);

        expect(mockStatisticsService.retrieveDailyPositionsStatistics).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(retrieveDailyPositionsStatisticsMockResponse);
      });

      it("should handle Prisma error when getDailyPositionsStatistics runs", async () => {
        await checkPrismaErrorHandling("getDailyPositionsStatistics", mockStatisticsService);
      });
    });
  });
});
