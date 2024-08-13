import { PrismaClient } from "@prisma/client";

import { JUSTJOIN_NAME, PRACUJ_NAME, SOLID_NAME } from "@/misc/constants";
import { ERROR_CODES } from "@/misc/error.constants";

import { AppErrorController } from "@/components/error/app-error.controller";
import { PrismaInstance } from "@/components/libs/prisma.instance";

import type { OffersBaseCategories, PositionLevelsCodes } from "shared/src/offers/offers.types";

interface IOffersCategoriesService {
  retrieveBaseFilters(): Promise<OffersBaseCategories>;
}

class OffersCategoriesService implements IOffersCategoriesService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  private async getSortedPositionLevels() {
    const sortingArray: PositionLevelsCodes[] = ["intern", "junior", "mid", "senior", "manager"];
    return await this.prisma.positionLevel
      .findMany()
      .then(res =>
        res
          .slice()
          .sort(
            (a, b) =>
              (sortingArray.indexOf(a?.value as PositionLevelsCodes) ?? 0) - (sortingArray.indexOf(b?.value as PositionLevelsCodes) ?? 1),
          ),
      );
  }

  public async retrieveBaseFilters(): Promise<OffersBaseCategories> {
    try {
      const contractTypes = {
        name: "Forma zatrudnienia",
        items: await this.prisma.contractType.findMany(),
      } as OffersBaseCategories["contractTypes"];
      const positionLevels = {
        name: "Poziom stanowiska",
        items: await this.getSortedPositionLevels(),
      } as OffersBaseCategories["positionLevels"];
      const workModes = {
        name: "Tryb pracy",
        items: await this.prisma.workMode.findMany(),
      } as OffersBaseCategories["workModes"];
      const workSchedules = {
        name: "Etat",
        items: await this.prisma.workSchedule.findMany(),
      } as OffersBaseCategories["workSchedules"];
      const dataSources = {
        name: "Źródło ofert",
        items: [
          {
            id: "2db909e1-ec5f-4ad1-a6ef-7736ce1e1c5f",
            value: JUSTJOIN_NAME,
          },
          {
            id: "6a7a44cc-08d4-47e9-acb1-f2bb397d48b2",
            value: PRACUJ_NAME,
          },
          {
            id: "173defa4-4ede-49ef-8f31-f957c6108076",
            value: SOLID_NAME,
          },
        ],
      } as OffersBaseCategories["dataSources"];
      const categories = {
        name: "Kategorie",
        items: await this.prisma.technology.findMany({
          take: 15,
          orderBy: {
            count: "desc",
          },
        }),
      };

      return {
        contractTypes,
        positionLevels,
        workModes,
        workSchedules,
        dataSources,
        categories,
      };
    } catch (err) {
      throw new AppErrorController({
        statusCode: 400,
        code: ERROR_CODES.invalid_type,
        message: JSON.stringify(err),
      });
    }
  }
}

export { OffersCategoriesService };
