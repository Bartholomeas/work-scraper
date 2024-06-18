import dayjs from "dayjs";
import { PrismaClient } from "@prisma/client";

import { AppError } from "@/utils/app-error";
import { connectOrCreateArray } from "@/utils/prisma";

import { PrismaInstance } from "@/components/libs/prisma.instance";
import { ERROR_CODES } from "@/misc/error.constants";

import type { JobOffer } from "shared/src/offers/offers.types";

interface SetOffersMetadataProps {
  total: number;
}

class OffersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  public async getJobOffers() {
    try {
      const data = await this.prisma.jobOffer.findMany({
        orderBy: {
          expirationDate: "asc",
        },
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

      return OfferHelper.parsePrismaToJobOffer(data as never[]);
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.internal_error,
        message: JSON.stringify(err),
      });
    }
  }

  public async saveJobOffers(offers: JobOffer[]) {
    try {
      if (!offers.length) return;

      const upsertOfferPromises = offers
        ?.filter(offer => offer?.positionName)
        ?.map(offer => {
          const parsedOffer = OfferHelper.parseJobOfferToPrismaModel(offer);

          return this.prisma.jobOffer.upsert({
            where: { id: offer?.id },
            create: parsedOffer as never,
            update: parsedOffer as never,
          });
        });

      await this.prisma.$transaction(upsertOfferPromises);
      await this.setOffersMetadata({ total: offers?.length ?? 0 });
      return;
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.internal_error,
        message: JSON.stringify(err),
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
        message: JSON.stringify(err),
        // message: ERROR_MESSAGES.invalid_data,
      });
    }
  }
}

type PrismaJobOffer = JobOffer & {
  workplaces: { value: string }[];
  workModes: { value: string }[];
  contractTypes: { value: string }[];
  technologies: { value: string }[];
  workSchedules: { value: string }[];
  positionLevels: { value: string }[];
  company?: { logoUrl: string | null; name: string };
};

class OfferHelper {
  private static keysToMap = ["workplaces", "workModes", "contractTypes", "technologies", "workSchedules", "positionLevels"] as const;

  constructor() {}

  public static parsePrismaToJobOffer<T extends PrismaJobOffer>(prismaOffers: T[]): JobOffer[] {
    return prismaOffers?.map(offer => {
      const newJobOffer: JobOffer = {
        ...offer,
        workplaces: offer.workplaces.map((w: { value: string }) => w.value),
        workModes: offer.workModes.map((w: { value: string }) => w.value) as JobOffer["workModes"],
        contractTypes: offer.contractTypes.map((c: { value: string }) => c.value) as JobOffer["contractTypes"],
        technologies: offer.technologies.map((t: { value: string }) => t.value) as JobOffer["technologies"],
        workSchedules: offer.workSchedules.map((w: { value: string }) => w.value) as JobOffer["workSchedules"],
        positionLevels: offer.positionLevels.map((p: { value: string }) => p.value) as JobOffer["positionLevels"],
      };

      return newJobOffer;
    });
  }

  public static parseJobOfferToPrismaModel(offer: JobOffer) {
    console.log("MODEL TEGO OK", offer);
    return {
      id: offer.id,
      positionName: offer?.positionName,
      slug: offer?.slug ?? offer?.id,
      dataSourceCode: offer?.dataSourceCode,
      description: offer?.description,
      expirationDate: offer?.expirationDate,
      positionLevels: connectOrCreateArray(offer.positionLevels),
      workplaces: connectOrCreateArray(offer?.workplaces),
      contractTypes: connectOrCreateArray(offer?.contractTypes),
      workModes: connectOrCreateArray(offer?.workModes),
      workSchedules: connectOrCreateArray(offer?.workSchedules),
      technologies: connectOrCreateArray(offer?.technologies),
      offerUrls: {
        create: offer?.offerUrls?.map(el => ({
          value: el,
        })),
      },
      salaryRange:
        offer?.salaryRange && offer.salaryRange.length > 0
          ? {
              create: offer?.salaryRange.map(salary => ({
                min: salary?.min,
                max: salary?.max,
                currency: salary?.currency,
                type: salary?.type,
                timeUnit: salary?.timeUnit,
              })),
            }
          : undefined,

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
