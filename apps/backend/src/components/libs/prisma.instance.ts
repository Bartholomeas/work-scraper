import { PrismaClient } from "@prisma/client";

class PrismaInstance {
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!PrismaInstance.instance) {
      PrismaInstance.instance = new PrismaClient({
        log: ["warn", "error"],
        // log: ["query", "info", "warn", "error"],
      });
    }

    return PrismaInstance.instance;
  }
}

export { PrismaInstance };
