import { PrismaClient } from "@prisma/client";
import { PrismaInstance } from "@/components/libs/prisma.instance";
import type { JobOffer } from "shared/src/offers/offers.types";

const prisma = PrismaInstance.getInstance();

export const mockOffer: JobOffer = {
  id: "TestId123",
  slug: "test-slug",
  positionName: "Test Developer",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  dataSourceCode: "justjoin",
  companyName: "Google",
  description: "Description of this offer",
  // createdAt: new Date().toISOString(),
  company: {
    name: "Google",
    logoUrl: "/xd",
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
  offerUrls: ["www.google.pl"],
  workplaces: [],
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
      data: { total: existingOffersCount },
    });

    // TODO: Uncomment to make seed working (wrong typing)
    // await prismaClient.jobOffer.create({
    //   data: OfferHelper.parseJobOfferToPrismaModel(mockOffer),
    // });

    // await Promise.all([positionLevelsPromise]);
  } catch (err) {
    console.error({ SeedError: err });
  } finally {
    await prismaClient.$disconnect();
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
