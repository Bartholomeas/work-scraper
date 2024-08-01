import { PrismaClient } from "@prisma/client";
import { DATABASE_URL } from "./src/misc/constants";

export const testPrisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL ?? "./test.db",
    },
  },
});

// const seedTest = async () => {
//   try {
//     // await testPrisma.offersMetadata.deleteMany();
//     // await testPrisma.offersMetadata.create({
//     //   data: { total: 420 },
//     // });
//     const offersMetadata = await testPrisma.offersMetadata.findUnique({
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
  // await seedDb(testPrisma);
};
