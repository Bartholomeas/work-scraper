import { IStatisticsService } from "@/components/statistics/statistics.service";
import {
  retrieveallDailyOffersStatisticsMockResponse,
  retrieveDailyPositionsStatisticsMockResponse,
} from "@/__tests__/__mocks__/statistics/statistics.service.constants";
import { mockCreatedAtDate, mockUUID } from "@/__tests__/__mocks__/mocks.constants";

export const StatisticsServiceMock = jest.fn().mockImplementation(
  (): IStatisticsService => ({
    addAllOffersCountStatistics: jest.fn().mockResolvedValue({
      id: mockUUID,
      createdAt: mockCreatedAtDate,
      totalOffers: 7565,
    }),
    addDailyPositionsStatistics: jest.fn().mockResolvedValue({
      id: mockUUID,
      createdAt: mockCreatedAtDate,
      juniorOffers: 621,
      midOffers: 4358,
      seniorOffers: 3026,
      otherOffers: 414,
    }),
    addDailyCategoriesStatistics: jest.fn().mockResolvedValue({
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
    }),
    addDailyWorkplacesStatistics: jest.fn().mockResolvedValue({
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
    }),
    retrieveAllDailyOffersStatistics: jest.fn().mockResolvedValue(retrieveallDailyOffersStatisticsMockResponse),
    retrieveDailyPositionsStatistics: jest.fn().mockResolvedValue(retrieveDailyPositionsStatisticsMockResponse),
    retrieveDailyCategoryStatistics: jest.fn().mockResolvedValue("Mock retrieveDailyCategoryStatistics"),
    retrieveDailyWorkplacesStatistics: jest.fn().mockResolvedValue("mock"),
    getGeneralStatistics: jest.fn().mockResolvedValue("Mock getGeneralStatistics"),
    generateGeneralStatistics: jest.fn().mockResolvedValue({
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
    }),
    addDailyDataSourcesStatistics: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
  }),
);
