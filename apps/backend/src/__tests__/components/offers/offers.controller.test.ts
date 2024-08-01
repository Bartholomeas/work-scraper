import { NextFunction, Request, Response } from "express";

import { OffersController } from "@/components/offers/offers.controller";

import {
  deleteOutdatedRecordsMockResponse,
  updateCategoriesCountsMockResponse,
  updateWorkplacesCountsMockResponse,
} from "@/__tests__/__mocks__/offers/offers.service.constants";
import { OffersServiceMock } from "@/__tests__/__mocks__/offers/offers.service.mock";

describe("OffersController", () => {
  let mockOffersService = new OffersServiceMock();
  let offersController: OffersController = new OffersController(mockOffersService);
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    // mockOffersService = new OffersServiceMock();
    // offersController = new OffersController(mockOffersService);

    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    next = jest.fn() as NextFunction;
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
});
