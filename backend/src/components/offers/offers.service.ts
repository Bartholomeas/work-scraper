import { PrismaClient } from "@prisma/client";
import { PrismaInstance } from "@/components/libs/prisma.instance";
import type { JobOffer } from "@shared/offers/offers.types";

class OffersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  // private async createCategories() {
  //   try {
  //     await this.prisma.positionLevel.createMany({
  //       data: [{ value: "intern" }, { value: "junior" }, { value: "mid" }, { value: "senior" }, { value: "manager" }],
  //     });
  //   } catch (err) {
  //     console.log("createCategories Error:", err);
  //   }
  // }

  public async saveJobOffers(offers: JobOffer[]) {
    try {
      await this.prisma.jobOffer.createMany({
        data: offers.map(offer => ({
          id: offer.id,
          dataSourceCode: offer.dataSourceCode,
          slug: offer.slug,
          positionName: offer.positionName,
          companyId: "",
          description: offer.description,
          expirationDate: offer.expirationDate,
        })),
      });

      for (const offer of offers) {
        // await this.prisma.jobOffer.upsert({
        //   where: {
        //     id: offer.id,
        //   },
        //   create: {
        //     ...offer,
        //     company: {
        //       connectOrCreate: {
        //         where: { id: offer.id },
        //         create: {
        //           name: "Testowa firma",
        //         },
        //       },
        //     },
        //     positionLevels: {
        //       connectOrCreate: offer?.positionLevels.map(value => ({
        //         where: { value },
        //         connect: { value },
        //         create: {
        //           value,
        //         },
        //       })),
        //     },
        //   },
        //   update: {},
        // });
      }
    } catch (err) {
      console.log("saveJobOffers Error:", err);
    }
  }
}

export { OffersService };
