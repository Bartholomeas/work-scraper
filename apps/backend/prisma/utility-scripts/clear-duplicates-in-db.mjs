import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clearDuplicateOfferUrls() {
  try {
    // Get all job offers
    const jobOffers = await prisma.jobOffer.findMany({
      include: {
        offerUrls: true,
      },
    });

    for (const jobOffer of jobOffers) {
      // Get unique offer URLs
      const uniqueUrls = [...new Set(jobOffer.offerUrls.map(url => url.value))];

      console.log("Job Offer: ", jobOffer?.positionName);

      // Delete all existing offer URLs for this job offer
      await prisma.offerUrl.deleteMany({
        where: {
          jobOfferId: jobOffer.id,
        },
      });

      // Create new offer URLs with unique values
      await prisma.jobOffer.update({
        where: {
          id: jobOffer.id,
        },
        data: {
          offerUrls: {
            create: uniqueUrls.map(url => ({ value: url })),
          },
        },
      });
    }

    console.log("Duplicate offer URLs have been cleared successfully.");
  } catch (error) {
    console.error("Error clearing duplicate offer URLs:", error);
  } finally {
    await prisma.$disconnect();
  }
}

clearDuplicateOfferUrls();
