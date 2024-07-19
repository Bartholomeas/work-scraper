import type { PrismaClient } from "prisma/prisma-client/scripts/default-index";
import { PrismaInstance } from "@/components/libs/prisma.instance";

class StatisticsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }
}

export { StatisticsService };
