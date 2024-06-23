import { DATABASE_URL } from "./src/misc/constants";
import { seedDb } from "./prisma/seed";

// const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: DATABASE_URL ?? "./test.db",
//     },
//   },
// });

module.exports = async () => {
  // jest.useFakeTimers();

  console.log("NIBY SEEDOWANIE", DATABASE_URL);
  await seedDb();
};
