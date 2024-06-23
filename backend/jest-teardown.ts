// const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: DATABASE_URL ?? "./test.db",
//     },
//   },
// });
// TODO: This client instance needs better handle and disconnceting & cleaning after tests
module.exports = async () => {
  console.log("TODO: Teardown DB");
  // await prisma.$disconnect();
};
