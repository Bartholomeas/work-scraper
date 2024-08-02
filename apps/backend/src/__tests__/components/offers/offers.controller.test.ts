import { NextFunction, Request, Response } from "express";

import { OffersController } from "@/components/offers/offers.controller";
import { ScrapperController } from "@/components/offers/scrapper/scrapper.controller";
import { OffersService } from "@/components/offers/service/offers.service";
import { StatisticsService } from "@/components/statistics/statistics.service";

import { ErrorHandlerControllerMock } from "@/__tests__/__mocks__/error-handler.controller.mock";
import {
    deleteOutdatedRecordsMockResponse,
    getJobOffersMockResponse,
    updateCategoriesCountsMockResponse,
    updateWorkplacesCountsMockResponse,
} from "@/__tests__/__mocks__/offers/offers.service.constants";
import { OffersServiceMock } from "@/__tests__/__mocks__/offers/offers.service.mock";
import { offersQueryParamsSchema } from "shared/src/offers/offers.schemas";
import { OffersQueryParams } from "shared/src/offers/offers.types";

jest.mock("@/components/statistics/statistics.service");
jest.mock("@/components/offers/service/offers.service");
jest.mock("@/components/offers/scrapper/scrapper.controller");
jest.mock("@/components/error/error-handler.controller");

describe("OffersController", () => {
  let mockOffersService = new OffersServiceMock();
  let offersController: OffersController = new OffersController(mockOffersService);
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    next = jest.fn() as NextFunction;
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  describe("updateCategoriesCount", () => {
    it("should handle updateCategoriesCounts correctly with status 200", async () => {
      await offersController.updateCategoriesCounts(req, res, next);

      expect(mockOffersService.updateCategoriesCounts).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(updateCategoriesCountsMockResponse);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("updateWorkplacesCount", () => {
    it("should handle updateWorkplacesCount correctly with status 200", async () => {
      await offersController.updateWorkplacesCounts(req, res, next);

      expect(mockOffersService.updateWorkplacesCounts).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(updateWorkplacesCountsMockResponse);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("deleteOutdatedOffers", () => {
    it("should handle deleteOutdatedOffers correctly with status 200", async () => {
      await offersController.deleteOutdatedOffers(req, res, next);

      expect(mockOffersService.deleteOutdatedRecords).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({
        createdAt: new Date(Date.now()),
        data: `Deleted ${deleteOutdatedRecordsMockResponse} outdated records.`,
      });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
  describe("getJobsOffer", () => {
    it("should return correct data with status 200", async () => {
      await offersController.getOffers(req, res, next);

      expect(mockOffersService.getJobOffers).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(getJobOffersMockResponse);
    });
    it("should return metadata of job offers", async () => {
      await offersController.getOffers(req, res, next);

      expect(mockOffersService.getJobOffers).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(getJobOffersMockResponse);
    });
    it("should handle search params correctly", async () => {
      req = {
        query: {
          search: "java",
          perPage: 1,
          workplaces: ["Warszawa"],
        },
      } as Request & {
        query: Partial<OffersQueryParams>;
      };

      const parsedQueryParams = {
        page: 1,
        perPage: 1,
        workplaces: "warszawa",
      };

      const safeParse = jest.spyOn(offersQueryParamsSchema, "safeParse").mockReturnValue({
        data: parsedQueryParams as unknown as OffersQueryParams,
        success: true,
      });

      await offersController.getOffers(req, res, next);

      expect(mockOffersService.getJobOffers).toHaveBeenCalled();
      expect(safeParse).toHaveBeenCalledWith(req.query);
    });
    it("should handle error properly", async () => {
      const mockErr = new Error();
      const mockOffersService = {
        getJobOffers: jest.fn().mockRejectedValue(mockErr),
      } as unknown as OffersService;

      const offersController = new OffersController(mockOffersService);

      try {
        await offersController.getOffers(req, res, next);
        expect(mockOffersService.getJobOffers).toHaveBeenCalled();
      } catch (err) {
        expect(ErrorHandlerControllerMock.handleError).toHaveBeenCalledWith(mockErr);
      }
    });
  });
  describe("scrapeOffersData", () => {
    it("should scrape offers and update counts and generate general statistics, then returns with 204", async () => {
      const mockScrapperController = {
        scrapeOffersData: jest.fn().mockResolvedValue(undefined),
      };
      const mockStatsService = {
        generateGeneralStatistics: jest.fn().mockResolvedValue(undefined),
      };

      (StatisticsService as jest.Mock).mockImplementation(() => mockStatsService);
      const mockOffersController = new OffersController(mockOffersService, mockScrapperController as unknown as ScrapperController);
      await mockOffersController.scrapeOffersData(req, res, next);

      expect(mockScrapperController.scrapeOffersData).toHaveBeenCalled();

      expect(mockOffersService.updateWorkplacesCounts).toHaveBeenCalled();
      expect(mockOffersService.updateCategoriesCounts).toHaveBeenCalled();

      expect(StatisticsService).toHaveBeenCalledTimes(1);
      expect(mockStatsService.generateGeneralStatistics).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.json).toHaveBeenCalledWith(undefined);
    });
  });
});
