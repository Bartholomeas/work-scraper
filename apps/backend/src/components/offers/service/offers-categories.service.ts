import { PrismaClient } from "@prisma/client";
import { ERROR_CODES } from "@/misc/error.constants";
import { AppError } from "@/utils/app-error";
import { PrismaInstance } from "@/components/libs/prisma.instance";

import type { OffersBaseCategories } from "shared/src/offers/offers.types";

interface IOffersCategoriesService {
  getBaseCategories(): Promise<OffersBaseCategories>;
}

class OffersCategoriesService implements IOffersCategoriesService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  public async getBaseCategories(): Promise<OffersBaseCategories> {
    try {
      const contractTypes = {
        name: "Forma zatrudnienia",
        items: await this.prisma.contractType.findMany(),
      } as OffersBaseCategories["contractTypes"];
      const positionLevels = {
        name: "Poziom stanowiska",
        items: await this.prisma.positionLevel.findMany(),
      } as OffersBaseCategories["positionLevels"];
      const workModes = {
        name: "Tryb pracy",
        items: await this.prisma.workMode.findMany(),
      } as OffersBaseCategories["workModes"];
      const workSchedules = {
        name: "Etat",
        items: await this.prisma.workSchedule.findMany(),
      } as OffersBaseCategories["workSchedules"];

      return {
        contractTypes,
        positionLevels,
        workModes,
        workSchedules,
      };
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.invalid_type,
        message: JSON.stringify(err),
      });
    }
  }
}

export { OffersCategoriesService };
