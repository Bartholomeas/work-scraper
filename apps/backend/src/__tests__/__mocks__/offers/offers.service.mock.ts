import {
  deleteOutdatedRecordsMockResponse,
  getJobOffersMockResponse,
  updateCategoriesCountsMockResponse,
  updateWorkplacesCountsMockResponse,
} from "@/__tests__/__mocks__/offers/offers.service.constants";
import { OffersService } from "@/components/offers/service/offers.service";

export const OffersServiceMock = jest.fn().mockImplementation(() => ({
  // getCategoriesCount: jest.fn().mockResolvedValue("MOCK getCategoriesCount"),
  updateCategoriesCounts: jest.fn().mockResolvedValue(updateCategoriesCountsMockResponse),
  // getWorkplaceCounts: jest.fn().mockResolvedValue("MOCK getWorkplaceCounts"),
  updateWorkplacesCounts: jest.fn().mockResolvedValue(updateWorkplacesCountsMockResponse),
  // getAllWorkplaces: jest.fn().mockResolvedValue("MOCK getAllWorkplaces"),
  getJobOffers: jest.fn().mockResolvedValue(getJobOffersMockResponse),
  deleteOutdatedRecords: jest.fn().mockResolvedValue(deleteOutdatedRecordsMockResponse),
})) as jest.Mock<OffersService>;
