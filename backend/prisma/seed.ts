import { PrismaClient } from "@prisma/client";
import { generateJobOfferSlug } from "../src/utils/generate-job-offer-slug";
import type { JobOffer } from "shared/src/offers/offers.types";

const prisma = new PrismaClient();

const positionLevels = ["intern", "junior", "mid", "senior", "manager"];
const contractTypes = ["uz", "uop", "b2b", "uod", "intern"];
const workModes = ["remote", "hybrid", "stationary"];
const workSchedules = ["full-time", "part-time", "internship", "freelance"];

// const dataSources = ["pracuj", "justjoin"];

function connectOrCreateField(values: string[]) {
  return {
    connectOrCreate: values.map(value => ({
      where: { value },
      create: { value },
    })),
  };
}

const mockOffer: JobOffer = {
  id: "aSDAJS4jasdj5r",
  slug: "",
  positionName: "TEST gineer",
  createdAt: new Date().toISOString(),
  dataSourceCode: "justjoin",
  companyName: "Google",
  description: "",
  // createdAt: new Date().toISOString(),
  company: {
    name: "Google",
    logoUrl: null,
  },
  expirationDate: new Date().toISOString(),
  positionLevels: ["mid"],
  contractTypes: ["uod", "b2b"],
  workModes: ["remote"],
  workSchedules: ["freelance"],
  technologies: ["Javascript", "Nodejs", "Typescript"],
  offerUrls: [""],
  workplaces: ["Zielona Góra"],
};

async function main() {
  try {
    const existingOffersCount = await prisma.jobOffer
      .count({
        where: { positionName: mockOffer.positionName },
      })
      .catch(() => 0);

    // const positionLevelsExists = await prisma.positionLevel.findMany().catch(() => false);
    // const contractTypesExists = await prisma.contractType.findMany().catch(() => false);
    // const workModesExists = await prisma.workMode.findMany().catch(() => false);
    // const workSchedulesExists = await prisma.workSchedule.findMany().catch(() => false);
    //
    // if (!positionLevelsExists || (Array.isArray(positionLevelsExists) && !positionLevelsExists.length))
    //   await prisma.positionLevel.createMany({
    //     data: positionLevels.map(p => ({ value: p })),
    //   });
    //
    // if (!contractTypesExists || (Array.isArray(contractTypesExists) && !contractTypesExists.length))
    //   await prisma.contractType.createMany({
    //     data: contractTypes.map(p => ({ value: p })),
    //   });
    //
    // if (!workModesExists || (Array.isArray(workModesExists) && !workModesExists.length))
    //   await prisma.workMode.createMany({
    //     data: workModes.map(p => ({ value: p })),
    //   });
    //
    // if (!workSchedulesExists || (Array.isArray(workSchedulesExists) && !workSchedulesExists.length))
    //   await prisma.workSchedule.createMany({
    //     data: workSchedules.map(p => ({ value: p })),
    //   });

    await prisma.jobOffer.create({
      data: {
        positionName: mockOffer.positionName!,
        slug: generateJobOfferSlug(mockOffer, existingOffersCount > 0 ? [(existingOffersCount + 1).toString()] : []),
        positionLevels: connectOrCreateField(mockOffer?.positionLevels),
        contractTypes: connectOrCreateField(mockOffer?.contractTypes),
        workModes: connectOrCreateField(mockOffer?.workModes),
        workSchedules: connectOrCreateField(mockOffer?.workSchedules),
        technologies: connectOrCreateField(mockOffer?.technologies),
        workplaces: {
          connectOrCreate: mockOffer?.workplaces?.map(value => ({
            where: { value },
            create: { value },
          })),
        },
        // workplaces: connectOrCreateField(mockOffer?.workplaces),

        company: {
          connectOrCreate: {
            where: { name: mockOffer.company?.name },
            create: {
              name: mockOffer.company?.name ?? "Undefined name",
              logoUrl: null,
            },
          },
        },
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
