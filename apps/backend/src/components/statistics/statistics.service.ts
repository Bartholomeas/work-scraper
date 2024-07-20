import { PrismaClient } from "@prisma/client";
import { PrismaInstance } from "@/components/libs/prisma.instance";

interface IStatisticsService {
  getGeneralStatistics(): Promise<unknown>;

  generateGeneralStatistics(): Promise<unknown>;
}

class StatisticsService implements IStatisticsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
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
      take: 5,

      orderBy: {},
    });
  }

  public async generateGeneralStatistics() {
    const topWorkplaces = await this.getTopWorkplaces();
    const topCategories = await this.getTopCategories();

    const totalOffers = await this.prisma.jobOffer.count();
    console.time("Delete workplaces");
    await this.prisma.topWorkplace.deleteMany({});
    console.timeEnd("Delete workplaces");

    const topWorkplacesData = {
      connectOrCreate: topWorkplaces.map(place => ({
        where: { id: place.id },
        create: {
          city: place.value,
          count: place.count,
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
      },
      create: { topWorkplaces: topWorkplacesData, totalOffers },
      update: { topWorkplaces: topWorkplacesData, totalOffers },
    });
  }
}

export { StatisticsService };
