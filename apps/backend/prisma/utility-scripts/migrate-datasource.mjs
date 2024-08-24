import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const JOB_DATA_SOURCES = {
  justjoin: "justjoin.it",
  pracuj: "Pracuj.pl",
  ["solid.jobs"]: "Solid.jobs",
  ["nofluffjobs"]: "NoFluffJobs",
};

const migrateData = async () => {
  const distinctDataSourceCodes = await prisma.jobOffer.findMany({
    where: {
      dataSourceCode: {
        not: null,
      },
    },
    distinct: ["dataSourceCode"],
    select: {
      dataSourceCode: true,
    },
  });
  // JOB_DATA_SOURCES
  for (let name of Object.values(JOB_DATA_SOURCES)) {
    console.log({ name });
  }
  for (const { dataSourceCode } of distinctDataSourceCodes) {
    await prisma.dataSource.upsert({
      where: { name: JOB_DATA_SOURCES[dataSourceCode] },
      update: { name: JOB_DATA_SOURCES[dataSourceCode], value: dataSourceCode },
      create: { name: JOB_DATA_SOURCES[dataSourceCode], value: dataSourceCode },
    });
  }

  const allSourceCodes = await prisma.dataSource.findMany();
  console.log({ allSourceCodes });

  const jobOffers = await prisma.jobOffer.findMany();

  for (const offer of jobOffers) {
    const dataSource = await prisma.dataSource.findUnique({
      where: { name: JOB_DATA_SOURCES[offer?.dataSourceCode] },
    });
    console.log("Migrating offer: ", offer?.positionName);
    await prisma.jobOffer.update({
      where: {
        id: offer.id,
      },
      data: {
        dataSourceId: dataSource.id,
      },
    });
  }
  console.log("Migration Completed");
};

migrateData()
  .catch(e => {
    console.error("Error: ", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
