import { Prisma } from "@prisma/client";
import { NextFunction, type Request, type Response } from "express";

jest.mock("@/components/statistics/statistics.service");
import { StatisticsController } from "@/components/statistics/statistics.controller";

import { StatisticsServiceMock, mockUUID, mockCreatedAtDate } from "@/tests/__mocks__/statistics.controller.mock";
import { ErrorHandlerController } from "@/tests/__mocks__/error-handler.controller";

describe("StatisticsController", () => {
  const mockStatisticsService = new StatisticsServiceMock();
  const req = {} as Request;
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response;
  const next = jest.fn() as NextFunction;

  describe("generateStatistics", () => {
    it("should generate all offers count statistics successfully", async () => {
      const statisticsController = new StatisticsController(mockStatisticsService);

      const result = await statisticsController.generateAllOffersCountStatistics();

      expect(mockStatisticsService.addAllOffersCountStatistics).toHaveBeenCalled();
      expect(result.totalOffers).toEqual(7565);
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
        const mockError = new Prisma.PrismaClientValidationError("Validation error", { clientVersion: "5.17.0" });
        const statisticsController = new StatisticsController({
          ...mockStatisticsService,
          generateAllStatistics: jest.fn().mockRejectedValue(mockError),
        });

        try {
          await statisticsController.generateAllStatistics(req, res, next);
        } catch (err) {
          expect(ErrorHandlerController.handleError).toHaveBeenCalledWith(mockError);
        }
      });
    });
  });
});

const expectedAllStatsResponse = [
  {
    id: mockUUID,
    updatedAt: "2024-08-01T08:14:09.611Z",
    totalOffers: 7565,
    topWorkplaces: [
      {
        id: mockUUID,
        city: "warszawa",
        count: 4306,
      },
      {
        id: mockUUID,
        city: "kraków",
        count: 2061,
      },
      {
        id: mockUUID,
        city: "wrocław",
        count: 1476,
      },
      {
        id: mockUUID,
        city: "poznań",
        count: 1097,
      },
      {
        id: mockUUID,
        city: "gdańsk",
        count: 1095,
      },
    ],
    topCategories: [
      {
        id: mockUUID,
        value: "sql",
        count: 1297,
      },
      {
        id: mockUUID,
        value: "python",
        count: 1114,
      },
      {
        id: mockUUID,
        value: "angielski",
        count: 1038,
      },
      {
        id: mockUUID,
        value: "java",
        count: 966,
      },
      {
        id: mockUUID,
        value: "polski",
        count: 932,
      },
      {
        id: mockUUID,
        value: "git",
        count: 674,
      },
      {
        id: mockUUID,
        value: "javascript",
        count: 624,
      },
      {
        id: mockUUID,
        value: "docker",
        count: 617,
      },
    ],
  },
  {
    id: mockUUID,
    createdAt: mockCreatedAtDate,
    totalOffers: 7565,
  },
  {
    id: mockUUID,
    createdAt: mockCreatedAtDate,
    juniorOffers: 621,
    midOffers: 4358,
    seniorOffers: 3026,
    otherOffers: 414,
  },
  {
    id: mockUUID,
    createdAt: mockCreatedAtDate,
    categories: [
      {
        id: mockUUID,
        name: "sql",
        count: 1297,
      },
      {
        id: mockUUID,
        name: "python",
        count: 1114,
      },
      {
        id: mockUUID,
        name: "angielski",
        count: 1038,
      },
      {
        id: mockUUID,
        name: "java",
        count: 966,
      },
      {
        id: mockUUID,
        name: "polski",
        count: 932,
      },
      {
        id: mockUUID,
        name: "git",
        count: 674,
      },
    ],
  },
  {
    id: mockUUID,
    createdAt: mockCreatedAtDate,
    workplaces: [
      {
        id: mockUUID,
        city: "Warszawa",
        count: 4306,
      },
      {
        id: mockUUID,
        city: "Kraków",
        count: 2061,
      },
      {
        id: mockUUID,
        city: "Wrocław",
        count: 1476,
      },
      {
        id: mockUUID,
        city: "Poznań",
        count: 1097,
      },
      {
        id: mockUUID,
        city: "Gdańsk",
        count: 1095,
      },
      {
        id: mockUUID,
        city: "Katowice",
        count: 695,
      },
      {
        id: mockUUID,
        city: "Łódź",
        count: 662,
      },
      {
        id: mockUUID,
        city: "Szczecin",
        count: 332,
      },
    ],
  },
];
