import type { JobOffer } from "shared/src/offers/offers.types";
import { PrismaInstance } from "./../src/components/libs/prisma.instance";
import { connectOrCreateArray } from "./../src/utils/prisma";
import { generateJobOfferSlug } from "./../src/utils/generate-job-offer-slug";
import { PrismaClient } from "@prisma/client";

const prisma = PrismaInstance.getInstance();

const mockOffer: JobOffer = {
  id: "aSDAJS4jasdj5r",
  slug: "",
  positionName: "TEST gineer",
  createdAt: new Date().toISOString(),
  // updatedAt: new Date().toISOString(),
  dataSourceCode: "justjoin",
  companyName: "Google",
  description: "",
  // createdAt: new Date().toISOString(),
  company: {
    name: "Google",
    logoUrl: null,
  },
  salaryRange: [
    {
      min: 0,
      max: 2500,
      currency: "pln",
      type: "brutto",
      timeUnit: "month",
    },
  ],
  expirationDate: new Date().toISOString(),
  positionLevels: ["mid"],
  contractTypes: ["uod", "b2b"],
  workModes: ["remote"],
  workSchedules: ["freelance"],
  technologies: ["Javascript", "Nodejs", "Typescript"],
  offerUrls: [""],
  workplaces: ["Zielona Góra"],
};

const cleanupDb = async (prismaClient: PrismaClient) => {
  try {
    await prismaClient.jobOffer.deleteMany();
    await prismaClient.offersMetadata.deleteMany();
    await prismaClient.salaryRange.deleteMany();
    await prismaClient.company.deleteMany();
    await prismaClient.workSchedule.deleteMany();
    await prismaClient.contractType.deleteMany();
    await prismaClient.workMode.deleteMany();
    await prismaClient.positionLevel.deleteMany();

    // await prismaClient.offersMetadata.delete({
    //   where: {
    //     id: "offers-metadata",
    //   },
    // });
  } catch (err) {
    console.error("Seed error: ", err);
    return undefined;
  }
};

export async function seedDb(prismaClient: PrismaClient) {
  try {
    await cleanupDb(prismaClient);
    const existingOffersCount = await prismaClient.jobOffer
      .count({
        where: { positionName: mockOffer.positionName },
      })
      .catch(() => 0);

    await prismaClient.offersMetadata.create({
      data: { total: 1 },
    });

    await prismaClient.jobOffer.create({
      data: {
        positionName: mockOffer.positionName!,
        slug: generateJobOfferSlug(mockOffer, existingOffersCount > 0 ? [(existingOffersCount + 1).toString()] : []),
        positionLevels: connectOrCreateArray(mockOffer?.positionLevels),
        contractTypes: connectOrCreateArray(mockOffer?.contractTypes),
        workModes: connectOrCreateArray(mockOffer?.workModes),
        workSchedules: connectOrCreateArray(mockOffer?.workSchedules),
        technologies: connectOrCreateArray(mockOffer?.technologies),
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
        salaryRange: {
          create: [],
        },
      },
    });

    // await Promise.all([positionLevelsPromise]);
  } catch (err) {
    console.error({ SeedError: err });
  }
  return prismaClient;
}

seedDb(prisma)
  .then(async (prismaClient: PrismaClient) => {
    await prismaClient.$disconnect();
  })
  .catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
