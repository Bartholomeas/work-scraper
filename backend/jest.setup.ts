import { PrismaClient } from "@prisma/client";
import { DATABASE_URL } from "./src/misc/constants";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL ?? "./test.db",
    },
  },
});

const seedTest = async () => {
  try {
    await prisma.offersMetadata.deleteMany();
    await prisma.offersMetadata.create({
      data: { total: 420 },
    });
    const xd = await prisma.offersMetadata.findUnique({
      where: {
        id: "offers-metadata",
      },
    });

    console.log("Seed tego", xd);
  } catch (err) {
    console.log("ERUR W SEEDZIE", err);
  }
};

module.exports = async () => {
  // jest.useFakeTimers();
  await seedTest();
  console.log("NIBY SEEDOWANIE", DATABASE_URL, process.env.DATABASE_URL);

  // await seedDb();
};
