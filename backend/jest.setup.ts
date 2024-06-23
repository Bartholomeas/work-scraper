import { PrismaClient } from "@prisma/client";
import { DATABASE_URL } from "./src/misc/constants";
import { seedDb } from "./prisma/seed";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL ?? "./test.db",
    },
  },
});

// const seedTest = async () => {
//   try {
//     // await prisma.offersMetadata.deleteMany();
//     // await prisma.offersMetadata.create({
//     //   data: { total: 420 },
//     // });
//     const offersMetadata = await prisma.offersMetadata.findUnique({
//       where: {
//         id: "offers-metadata",
//       },
//     });
//   } catch (err) {
//     console.log("Test Seed Error: ", err);
//   }
// };

module.exports = async () => {
  // jest.useFakeTimers();
  console.log("Seeding test.db", process.env.DATABASE_URL);
  await seedDb(prisma);
};
