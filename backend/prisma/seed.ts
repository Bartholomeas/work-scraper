import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const positionLevels = ["intern", "junior", "mid", "senior", "manager"];
const contractTypes = ["uz", "uop", "b2b", "uod", "intern"];
const workModes = ["remote", "hybrid", "stationary"];
const workSchedules = ["full-time", "part-time", "internship", "freelance"];
// const dataSources = ["pracuj", "justjoin"];

async function main() {
  try {
    const positionLevelsExists = await prisma.positionLevel.findMany();
    const contractTypesExists = await prisma.contractType.findMany();
    const workModesExists = await prisma.workMode.findMany();
    const workSchedulesExists = await prisma.workSchedule.findMany();

    if (Array.isArray(positionLevelsExists) && !positionLevelsExists.length)
      await prisma.positionLevel.createMany({
        data: positionLevels.map(p => ({ value: p })),
      });

    if (Array.isArray(contractTypesExists) && !contractTypesExists.length)
      await prisma.contractType.createMany({
        data: contractTypes.map(p => ({ value: p })),
      });

    if (Array.isArray(workModesExists) && !workModesExists.length)
      await prisma.workMode.createMany({
        data: workModes.map(p => ({ value: p })),
      });

    if (Array.isArray(workSchedulesExists) && !workSchedulesExists.length)
      await prisma.workSchedule.createMany({
        data: workSchedules.map(p => ({ value: p })),
      });

    // await Promise.all([positionLevelsPromise]);
  } catch (err) {
    console.error({ SeedError: err });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
