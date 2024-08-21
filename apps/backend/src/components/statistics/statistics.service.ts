import dayjs from "dayjs";

import { Prisma } from "@prisma/client/extension";
import { PrismaClient } from "@prisma/client";

import { PrismaInstance } from "@/components/libs/prisma.instance";
import PrismaPromise = Prisma.PrismaPromise;

interface IStatisticsService {
  addDailyDataSourcesStatistics(): Promise<void>;

  addAllOffersCountStatistics(): Promise<unknown>;

  addDailyPositionsStatistics(): Promise<unknown>;

  addDailyCategoriesStatistics(): Promise<unknown>;

  addDailyWorkplacesStatistics(): Promise<unknown>;

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

  public async checkTodayWasCounted<T extends PrismaPromise<number>>(countFn: T): Promise<boolean> {
    try {
      const statCount = (await countFn) ?? 0;

      return statCount > 0;
    } catch (err) {
      return true;
    }
  }

  public async addDailyDataSourcesStatistics(): Promise<void> {
    const todayStats = await this.prisma?.dataSourcesStatistics?.findFirst({
      where: {
        createdAt: {
          gte: dayjs(Date.now()).startOf("day").toISOString(),
          lt: dayjs(Date.now()).endOf("day").toISOString(),
        },
      },
      include: {
        dataSources: true,
      },
    });

    // Check current DataSources
    const dataSourcesCounts = await this.prisma?.dataSource?.findMany({
      select: {
        id: true,
        name: true,
        value: true,
        _count: true,
      },
    });

    // If today stats are already in DB then update records by Average of it. Otherwise create new records
    if (todayStats) {
      const dataSourcesUpdates = dataSourcesCounts?.map(dataSrc => {
        const existingData = todayStats?.dataSources?.find(ds => ds.name === dataSrc.name);

        if (existingData) {
          const avgCount = dataSrc?._count?.jobOffers
            ? Math.round(((dataSrc?._count?.jobOffers ?? 0) + existingData?.count) / 2)
            : (existingData?.count ?? 0);

          return this.prisma.dataSourceSingleStatistic.update({
            where: {
              id: existingData.id,
            },
            data: {
              count: avgCount,
            },
          });
        } else {
          return this.prisma.dataSourcesStatistics.update({
            where: {
              id: todayStats.id,
            },
            data: {
              dataSources: {
                create: {
                  name: dataSrc?.name,
                  count: dataSrc?._count?.jobOffers ?? 0,
                },
              },
            },
          });
        }
      });

      await this.prisma.$transaction(dataSourcesUpdates);
    } else {
      await this.prisma?.dataSourcesStatistics?.create({
        data: {
          dataSources: {
            create: dataSourcesCounts?.map(el => {
              return {
                name: el?.name,
                count: el?._count?.jobOffers ?? 0,
              };
            }),
          },
        },
      });
    }

    return;
  }

  public async addAllOffersCountStatistics() {
    const countPromise = this.prisma.allOffersCountStatistics.count({
      where: {
        createdAt: {
          gte: dayjs(Date.now()).startOf("day").toISOString(),
        },
      },
    });
    const alreadyCounted = await this.checkTodayWasCounted(countPromise);
    if (alreadyCounted) return;

    const offersCount = await this.prisma.jobOffer.count();

    return this.prisma.allOffersCountStatistics.create({
      data: {
        totalOffers: offersCount,
      },
    });
  }

  public async addDailyPositionsStatistics() {
    const countPromise = this.prisma.offersCountStatistics.count({
      where: {
        createdAt: {
          gte: dayjs(Date.now()).startOf("day").toISOString(),
        },
      },
    });
    const alreadyCounted = await this.checkTodayWasCounted(countPromise);
    if (alreadyCounted) return;

    const juniorOffers = await this.prisma.jobOffer.count({
      where: {
        positionLevels: {
          some: {
            value: {
              equals: "junior",
            },
          },
        },
      },
    });
    const midOffers = await this.prisma.jobOffer.count({
      where: {
        positionLevels: {
          some: {
            value: {
              equals: "mid",
            },
          },
        },
      },
    });
    const seniorOffers = await this.prisma.jobOffer.count({
      where: {
        positionLevels: {
          some: {
            value: {
              equals: "senior",
            },
          },
        },
      },
    });

    const otherOffers = await this.prisma.jobOffer.count({
      where: {
        positionLevels: {
          some: {
            value: {
              notIn: ["junior", "mid", "senior"],
            },
          },
        },
      },
    });

    return this.prisma.offersCountStatistics.create({
      data: {
        juniorOffers,
        midOffers,
        seniorOffers,
        otherOffers,
      },
    });
  }

  public async addDailyCategoriesStatistics() {
    const countPromise = this.prisma.categoriesStatistics.count({
      where: {
        createdAt: {
          gte: dayjs(Date.now()).startOf("day").toISOString(),
        },
      },
    });
    const alreadyCounted = await this.checkTodayWasCounted(countPromise);
    if (alreadyCounted) return;

    const topCategories = await this.prisma.technology.findMany({
      take: 6,
      select: {
        value: true,
        count: true,
      },
      orderBy: {
        count: "desc",
      },
    });
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
          create:
            topCategories?.map(category => ({
              name: category.value,
              count: category.count,
            })) ?? [],
        },
      },
    });
  }

  public async addDailyWorkplacesStatistics() {
    const countPromise = this.prisma.workplacesStatistics.count({
      where: {
        createdAt: {
          gte: dayjs(Date.now()).startOf("day").toISOString(),
        },
      },
    });
    const alreadyCounted = await this.checkTodayWasCounted(countPromise);
    if (alreadyCounted) return;

    const topWorkplaces = await this.prisma.workplace.findMany({
      take: 8,
      orderBy: {
        count: "desc",
      },
      select: {
        city: true,
        count: true,
      },
    });
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
          create: topWorkplaces,
        },
      },
    });
  }

  public async retrieveDailyDataSourcesStatistics() {
    return this.prisma.dataSourcesStatistics.findMany({
      orderBy: {
        createdAt: "asc",
      },
      select: {
        id: true,
        createdAt: true,
        dataSources: {
          select: {
            id: true,
            name: true,
            count: true,
          },
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

  public async deleteAllDailyStats(): Promise<void> {
    const deleteDailyOffers = this.prisma.allOffersCountStatistics.deleteMany();
    const deleteOffersCount = this.prisma.offersCountStatistics.deleteMany();
    const deleteWorkplacesStats = this.prisma.workplacesStatistics.deleteMany();
    const deleteCategoriesStats = this.prisma.categoriesStatistics.deleteMany();

    await Promise.all([deleteDailyOffers, deleteOffersCount, deleteWorkplacesStats, deleteCategoriesStats]);
    return;
  }
}

export { StatisticsService, type IStatisticsService };
