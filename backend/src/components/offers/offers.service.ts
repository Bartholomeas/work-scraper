import { PrismaClient } from "@prisma/client";

import type { JobOffer } from "shared/src/offers/offers.types";

import { AppError } from "@/utils/app-error";
import { createOrConnectArray } from "@/utils/prisma";

import { PrismaInstance } from "@/components/libs/prisma.instance";
import { ERROR_CODES, ERROR_MESSAGES } from "@/misc/error.constants";
import dayjs from "dayjs";
import { jobOfferSchema } from "@shared/offers/offers.schemas";

interface SetOffersMetadataProps {
  total: number;
}

class OffersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  public async getJobOffers() {
    const helper = new OfferHelper();

    try {
      const data = await this.prisma.jobOffer.findMany({
        take: 5,
        include: {
          company: true,
          salaryRange: true,
          offerUrls: true,
          workplaces: {
            select: {
              value: true,
            },
          },
          workModes: {
            select: {
              value: true,
            },
          },
          contractTypes: {
            select: {
              value: true,
            },
          },
          technologies: {
            select: {
              value: true,
            },
          },
          workSchedules: {
            select: {
              value: true,
            },
          },
          positionLevels: {
            select: {
              value: true,
            },
          },
        },
      });
      // const parsedData = z.array(jobOfferSchema).parse(data);
      console.log("LENGTH", data);

      return helper.parsePrismaToJobOffer(data);
      // return data as unknown as JobOffer[];
    } catch (err) {
      console.log("saveJobOffers Error:", err);
      throw new AppError({
        statusCode: 500,
        code: ERROR_CODES.internal_error,
        message: ERROR_MESSAGES.internal_error,
      });
    }
  }

  public async saveJobOffers(offers: JobOffer[]) {
    const helper = new OfferHelper();

    try {
      const upsertOfferPromises = offers?.map(offer => {
        const parsedOffer = helper.parseJobOfferToPrismaModel(offer);
        return this.prisma.jobOffer.upsert({
          where: { id: offer?.id },
          create: parsedOffer,
          update: parsedOffer,
        });
      });

      await this.prisma.$transaction(upsertOfferPromises);
      await this.setOffersMetadata({ total: offers.length });
    } catch (err) {
      console.log("saveJobOffers Error:", err);
      throw new AppError({
        statusCode: 500,
        code: ERROR_CODES.internal_error,
        message: ERROR_MESSAGES.internal_error,
      });
    }
  }

  private async setOffersMetadata({ total }: SetOffersMetadataProps) {
    try {
      await this.prisma.offersMetadata.upsert({
        where: { id: "offers-metadata" },
        create: {
          total,
        },
        update: {
          total,
        },
      });
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.invalid_data,
        message: JSON.stringify(err),
      });
    }
  }

  public async checkDataIsOutdated(hoursAmount = 4) {
    try {
      const metadata = await this.prisma.offersMetadata.findUnique({
        where: {
          id: "offers-metadata",
        },
        select: {
          updatedAt: true,
        },
      });
      if (!metadata) return true;
      return dayjs().diff(dayjs(metadata?.updatedAt), "hours") > hoursAmount;
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.invalid_data,
        message: ERROR_MESSAGES.invalid_data,
      });
    }
  }
}

type PrismaOffers = Record<
  keyof JobOffer,
  {
    value: string;
  }[]
>;

class OfferHelper {
  private static keysToMap = ["workplaces", "workModes", "contractTypes", "technologies", "workSchedules", "positionLevels"] as const;

  constructor() {}

  public parsePrismaToJobOffer<T extends PrismaOffers>(prismaOffers: T[]): JobOffer[] {
    return prismaOffers?.map(offer => {
      // const newJobOffer: unknown = offer;
      const newJobOffer = {} as JobOffer;

      OfferHelper.keysToMap.forEach(key => {
        if (key in offer) {
          const isValueArray = Array.isArray(offer[key]);

          newJobOffer[key] = isValueArray ? (offer[key]?.map(el => el.value) as never) : [];
        }
      });

      return jobOfferSchema.parse(newJobOffer);
    });
  }

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
      company: {
        connectOrCreate: {
          where: { name: offer?.company?.name },
          create: {
            name: offer?.company?.name ?? "Nieznana firma",
            logoUrl: offer?.company?.logoUrl,
          },
        },
      },
    };
  }
}

export { OffersService };
