import { PrismaClient } from "@prisma/client";
import { DATABASE_URL } from "./src/misc/constants";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL ?? "./test.db",
    },
  },
});

module.exports = async () => {
  console.log("Teradown DB");
  await prisma.$disconnect();
};
