import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clearDuplicateOfferUrls() {
  try {
    const jobOffers = await prisma.jobOffer.findMany({
      include: {
        offerUrls: true,
        salaryRange: true,
      },
    });

    for (const jobOffer of jobOffers) {
      const uniqueUrls = [...new Set(jobOffer.offerUrls.map(url => url.value))];
      const uniqueSalaryRanges = jobOffer?.salaryRange
        .map(el => {
          const { jobOfferId, ...rest } = el;
          return { ...rest, currency: rest?.currency === "zł" ? "pln" : rest?.currency };
        })
        ?.filter(
          (salary, index, self) =>
            index ===
            self.findIndex(
              t =>
                t.min === salary.min &&
                t.max === salary.max &&
                t.currency === salary.currency &&
                t.type === salary.type &&
                t.timeUnit === salary.timeUnit,
            ),
        );

      console.log("Clearing duplicates at: ", jobOffer?.positionName);

      await prisma.$transaction(async prisma => {
        await prisma.offerUrl.deleteMany({
          where: {
            jobOfferId: jobOffer.id,
          },
        });

        await prisma.offerUrl.createMany({
          data: uniqueUrls.map(url => ({ value: url, jobOfferId: jobOffer.id })),
        });

        await prisma.jobOffer.update({
          where: {
            id: jobOffer.id,
          },
          data: {
            salaryRange: {
              deleteMany: {},
              createMany: {
                data: uniqueSalaryRanges,
              },
            },
          },
        });
      });
    }

    console.log("Duplicate offer URLs and salary ranges have been cleared successfully.");
  } catch (error) {
    console.error("Error clearing duplicates:", error);
  } finally {
    await prisma.$disconnect();
  }
}

clearDuplicateOfferUrls();
