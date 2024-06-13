import { PrismaClient } from "@prisma/client";

import type { JobOffer } from "shared/src/offers/offers.types";
import { PrismaInstance } from "@/components/libs/prisma.instance";
import { createOrConnectArray } from "@/utils/prisma";

// import { PrismaInstance } from "@/components/libs/prisma.instance";
// import type { JobOffer } from "@shared/offers/offers.types";
// import { createOrConnectArray } from "@/utils/prisma";

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
    const helper = new OfferHelper();

    const upsertOfferPromises = offers?.map(offer => {
      const parsedOffer = helper.parseJobOfferToPrismaModel(offer);
      return this.prisma.jobOffer.upsert({
        where: { id: offer?.id },
        create: parsedOffer,
        update: parsedOffer,
      });
    });

    try {
      await this.prisma.$transaction(upsertOfferPromises);
      // await Promise.all(upsertOfferPromises);
      // await this.prisma.jobOffer.upsert({
      //   where: { id: offers[0]?.id },
      //   create: helper.parseJobOfferToPrismaModel(offers[0]),
      //   update: helper.parseJobOfferToPrismaModel(offers[0]),
      // });
      // await this.prisma.jobOffer.createMany({
      //   data: offers.map(offer => ({
      //     // id: offer.id,
      //     // ...offer,
      //
      //     positionName: offer?.positionName,
      //     slug: offer?.slug,
      //     dataSourceCode: offer?.dataSourceCode,
      //     description: offer?.description,
      //     expirationDate: offer?.expirationDate,
      //     positionLevels: createOrConnectArray(offer?.positionLevels),
      //     contractTypes: createOrConnectArray(offer?.contractTypes),
      //     workModes: createOrConnectArray(offer?.workModes),
      //     workSchedules: createOrConnectArray(offer?.workSchedules),
      //     technologies: createOrConnectArray(offer?.technologies),
      //     offerUrls: createOrConnectArray(offer?.offerUrls),
      //     company: {
      //       connectOrCreate: {
      //         where: { name: offer?.company?.name },
      //         create: {
      //           name: offer?.company?.name ?? "Undefined name",
      //           logoUrl: offer?.company?.logoUrl,
      //         },
      //       },
      //     },
      //   })),
      // });
    } catch (err) {
      console.log("saveJobOffers Error:", err);
    }
  }
}

class OfferHelper {
  constructor() {}

  public parseJobOfferToPrismaModel(offer: JobOffer) {
    return {
      id: offer.id,
      positionName: offer.positionName,
      slug: offer.id,
      dataSourceCode: offer?.dataSourceCode,
      description: offer?.description,
      expirationDate: offer?.expirationDate,
      positionLevels: createOrConnectArray(offer.positionLevels),
      workplaces: createOrConnectArray(offer?.workplaces),
      contractTypes: createOrConnectArray(offer?.contractTypes),
      workModes: createOrConnectArray(offer?.workModes),
      workSchedules: createOrConnectArray(offer?.workSchedules),
      technologies: createOrConnectArray(offer?.technologies),
      // company: {
      //   connectOrCreate: {
      //     where: { name: offer?.company?.name },
      //     create: {
      //       name: offer?.company?.name ?? "Undefined name",
      //       logoUrl: offer?.company?.logoUrl,
      //     },
      //   },
      // },
    };
  }
}

export { OffersService };
