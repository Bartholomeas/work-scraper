import { PrismaClient } from "@prisma/client";
import { generateJobOfferSlug } from "../src/utils/generate-job-offer-slug";
import type { JobOffer } from "shared/src/offers/offers.types";

const prisma = new PrismaClient();

const positionLevels = ["intern", "junior", "mid", "senior", "manager"];
const contractTypes = ["uz", "uop", "b2b", "uod", "intern"];
const workModes = ["remote", "hybrid", "stationary"];
const workSchedules = ["full-time", "part-time", "internship", "freelance"];

// const dataSources = ["pracuj", "justjoin"];

const mockOffer: JobOffer = {
  positionName: 
}
async function main() {
  try {
    const positionLevelsExists = await prisma.positionLevel.findMany().catch(() => false);
    const contractTypesExists = await prisma.contractType.findMany().catch(() => false);
    const workModesExists = await prisma.workMode.findMany().catch(() => false);
    const workSchedulesExists = await prisma.workSchedule.findMany().catch(() => false);

    if (!positionLevelsExists || (Array.isArray(positionLevelsExists) && !positionLevelsExists.length))
      await prisma.positionLevel.createMany({
        data: positionLevels.map(p => ({ value: p })),
      });

    if (!contractTypesExists || (Array.isArray(contractTypesExists) && !contractTypesExists.length))
      await prisma.contractType.createMany({
        data: contractTypes.map(p => ({ value: p })),
      });

    if (!workModesExists || (Array.isArray(workModesExists) && !workModesExists.length))
      await prisma.workMode.createMany({
        data: workModes.map(p => ({ value: p })),
      });

    if (!workSchedulesExists || (Array.isArray(workSchedulesExists) && !workSchedulesExists.length))
      await prisma.workSchedule.createMany({
        data: workSchedules.map(p => ({ value: p })),
      });

    await prisma.jobOffer.create({
      data: {
        // slug: slugify(["Junior FS Dev", "Google", "intern", "costam"].join(" "), SLUGIFY_CONFIG),
        slug: generateJobOfferSlug(["junior fs DEV", "Testowa firma", "Kekw"]),
        positionName: "Junior FS Dev",
        company: {
          connectOrCreate: {
            where: { name: "Testowa firma" },
            create: {
              name: "Testowa firma",
            },s
          },
        },
        // workSchedules: {
        //   connect: {
        //     value: "intern",
        //   },
        // },
      },
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
