import type { PrismaClient } from "prisma/prisma-client/scripts/default-index";
import { PrismaInstance } from "@/components/libs/prisma.instance";

interface IOffersStatisticsService {}

class OffersStatisticsService implements IOffersStatisticsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }
}

export { OffersStatisticsService };
