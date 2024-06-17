import type { JobOffer } from "shared/src/offers/offers.types";
import { PrismaInstance } from "./../src/components/libs/prisma.instance";
import { connectOrCreateArray } from "./../src/utils/prisma";
import { generateJobOfferSlug } from "./../src/utils/generate-job-offer-slug";

// import { PrismaInstance } from "src/components/libs/prisma.instance";
// import { generateJobOfferSlug } from "src/utils/generate-job-offer-slug";

const prisma = PrismaInstance.getInstance();

const positionLevels = ["intern", "junior", "mid", "senior", "manager"];
const contractTypes = ["uz", "uop", "b2b", "uod", "intern"];
const workModes = ["remote", "hybrid", "stationary"];
const workSchedules = ["full-time", "part-time", "internship", "freelance"];

// const dataSources = ["pracuj", "justjoin"];

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

const cleanupDb = async () => {
  try {
    await prisma.jobOffer.deleteMany();
    await prisma.offersMetadata.deleteMany();
    await prisma.salaryRange.deleteMany();
    await prisma.company.deleteMany();
    await prisma.workSchedule.deleteMany();
    await prisma.contractType.deleteMany();
    await prisma.workMode.deleteMany();
    await prisma.positionLevel.deleteMany();

    // await prisma.offersMetadata.delete({
    //   where: {
    //     id: "offers-metadata",
    //   },
    // });
  } catch (err) {
    console.error("Seed error: ", err);
    return undefined;
  }
};

async function main() {
  try {
    await cleanupDb();
    const existingOffersCount = await prisma.jobOffer
      .count({
        where: { positionName: mockOffer.positionName },
      })
      .catch(() => 0);

    await prisma.offersMetadata.create({
      data: { total: 1 },
    });

    await prisma.jobOffer.create({
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
