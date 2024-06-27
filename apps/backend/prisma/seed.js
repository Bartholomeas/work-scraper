"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockOffer = void 0;
exports.seedDb = seedDb;
const prisma_instance_1 = require("./../src/components/libs/prisma.instance");
const offer_helper_1 = require("./../src/components/offers/helpers/offer-helper");
const prisma = prisma_instance_1.PrismaInstance.getInstance();
exports.mockOffer = {
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
    workplaces: ["Zielona Góra"],
};
const cleanupDb = async (prismaClient) => {
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
    }
    catch (err) {
        console.error("Seed error: ", err);
        return undefined;
    }
};
async function seedDb(prismaClient) {
    try {
        await cleanupDb(prismaClient);
        const existingOffersCount = await prismaClient.jobOffer
            .count({
            where: { positionName: exports.mockOffer.positionName },
        })
            .catch(() => 0);
        await prismaClient.offersMetadata.create({
            data: { total: existingOffersCount },
        });
        await prismaClient.jobOffer.create({
            data: offer_helper_1.OfferHelper.parseJobOfferToPrismaModel(exports.mockOffer),
        });
        // await Promise.all([positionLevelsPromise]);
    }
    catch (err) {
        console.error({ SeedError: err });
    }
    finally {
        await prismaClient.$disconnect();
    }
    return prismaClient;
}
seedDb(prisma)
    .then(async (prismaClient) => {
    await prismaClient.$disconnect();
})
    .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
});
