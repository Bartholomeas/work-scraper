import { PrismaClient } from "@prisma/client";
import type {
  DailyAllOffersCountPayload,
  DailyCategoriesCountPayload,
  DailyPositionsCountPayload,
  DailyWorkplacesCountPayload,
} from "shared/src/statistics/statistics.types";

import { PrismaInstance } from "@/components/libs/prisma.instance";

interface IStatisticsService {
  addAllOffersCountStatistics(payload: DailyAllOffersCountPayload): Promise<unknown>;

  addDailyOffersCountStatistics(payload: DailyPositionsCountPayload): Promise<unknown>;

  addDailyCategoriesStatistics(payload: DailyCategoriesCountPayload): Promise<unknown>;

  addDailyWorkplacesStatistics(payload: DailyWorkplacesCountPayload): Promise<unknown>;

  retrieveAllDailyOffersStatistics(): Promise<unknown>;

  retrieveDailyPositionsStatistics(): Promise<unknown>;

  retrieveDailyCategoryStatistics(): Promise<unknown>;

  retrieveDailyWorkplacesStatistics(): Promise<unknown>;

  getGeneralStatistics(): Promise<unknown>;

  generateGeneralStatistics(): Promise<unknown>;
}

class StatisticsService implements IStatisticsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  public async addAllOffersCountStatistics(payload: DailyAllOffersCountPayload) {
    return this.prisma.allOffersCountStatistics.create({
      data: payload,
    });
  }

  public async addDailyOffersCountStatistics(payload: DailyPositionsCountPayload) {
    return this.prisma.offersCountStatistics.create({
      data: payload,
    });
  }

  public async addDailyCategoriesStatistics(payload: DailyCategoriesCountPayload) {
    return this.prisma.categoriesStatistics.create({
      select: {
        id: true,
        createdAt: true,
        categories: {
          select: {
            id: true,
            name: true,
            count: true,
          },
        },
      },
      data: {
        categories: {
          create: payload?.categories?.map(category => ({
            count: category.count,
            name: category.name,
          })),
        },
      },
    });
  }

  public async addDailyWorkplacesStatistics(payload: DailyWorkplacesCountPayload) {
    return this.prisma.workplacesStatistics.create({
      select: {
        id: true,
        createdAt: true,
        workplaces: {
          select: {
            id: true,
            city: true,
            count: true,
          },
        },
      },
      data: {
        workplaces: {
          create: payload?.workplaces?.map(workplace => ({
            city: workplace.city,
            count: workplace.count,
          })),
        },
      },
    });
  }

  public async retrieveAllDailyOffersStatistics() {
    return this.prisma.allOffersCountStatistics.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  public async retrieveDailyPositionsStatistics() {
    return this.prisma.offersCountStatistics.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  public async retrieveDailyCategoryStatistics() {
    return this.prisma.categoriesStatistics.findMany({
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
        createdAt: true,
        categories: {
          select: {
            id: true,
            name: true,
            count: true,
          },
        },
      },
    });
  }

  public async retrieveDailyWorkplacesStatistics() {
    return this.prisma.workplacesStatistics.findMany({
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
        createdAt: true,
        workplaces: {
          select: {
            id: true,
            city: true,
            count: true,
          },
        },
      },
    });
  }

  public async getGeneralStatistics() {
    return this.prisma.generalStatistics.findFirst({
      include: {
        topWorkplaces: {
          select: {
            id: true,
            count: true,
            city: true,
          },
        },
        topCategories: {
          select: {
            id: true,
            count: true,
            value: true,
          },
        },
      },
    });
  }

  private async getTopWorkplaces() {
    return this.prisma.workplace.findMany({
      take: 5,
      orderBy: {
        count: "desc",
      },

      select: {
        id: true,
        value: true,
        count: true,
      },
    });
  }

  private async getTopCategories() {
    return this.prisma.technology.findMany({
      take: 8,
      orderBy: {
        count: "desc",
      },
    });
  }

  public async generateGeneralStatistics() {
    const topWorkplaces = await this.getTopWorkplaces();
    const topCategories = await this.getTopCategories();
    const totalOffers = await this.prisma.jobOffer.count();

    console.time("Delete workplaces");
    await this.prisma.topWorkplace.deleteMany({});
    console.timeEnd("Delete workplaces");

    console.time("Delete categories");
    await this.prisma.topCategory.deleteMany({});
    console.timeEnd("Delete categories");

    const topWorkplacesData = {
      connectOrCreate: topWorkplaces.map(place => ({
        where: { id: place.id },
        create: {
          city: place.value,
          count: place.count,
        },
      })),
    };

    const topCategoriesData = {
      connectOrCreate: topCategories?.map(cat => ({
        where: {
          id: cat.id,
        },
        create: {
          id: cat.id,
          count: cat.count,
          value: cat.value,
        },
      })),
    };

    return this.prisma.generalStatistics.upsert({
      where: {
        id: "general-statistics",
      },
      select: {
        id: true,
        updatedAt: true,
        totalOffers: true,
        topWorkplaces: {
          select: {
            id: true,
            city: true,
            count: true,
          },
        },
        topCategories: {
          select: {
            id: true,
            value: true,
            count: true,
          },
        },
      },
      create: {
        topWorkplaces: topWorkplacesData,
        topCategories: topCategoriesData,
        totalOffers,
      },
      update: {
        topWorkplaces: topWorkplacesData,
        topCategories: topCategoriesData,
        totalOffers,
      },
    });
  }
}

export { StatisticsService };
