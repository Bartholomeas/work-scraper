import dayjs from "dayjs";
import { PrismaClient } from "@prisma/client";

import { AppError } from "@/utils/app-error";
import { connectOrCreateArray } from "@/utils/prisma";

import { PrismaInstance } from "@/components/libs/prisma.instance";
import { ERROR_CODES } from "@/misc/error.constants";

import type { JobOffer, JobOffersResponse, OffersQueryParams } from "shared/src/offers/offers.types";
import { OFFERS_METADATA_ID } from "@/misc/constants";

interface SetOffersMetadataProps {
  total: number;
}

class OffersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  public async getOffersMetadata() {
    try {
      return await this.prisma.offersMetadata.findUnique({ where: { id: OFFERS_METADATA_ID } });
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.invalid_type,
        message: JSON.stringify(err),
      });
    }
  }

  public async getJobOffers(params: OffersQueryParams | undefined) {
    const defaultParams: { perPage: OffersQueryParams["perPage"]; page: OffersQueryParams["page"] } = {
      perPage: params?.perPage ?? 24,
      page: params?.page && params?.page < 1 ? 1 : params?.page ?? 1,
    };
    try {
      const data = await this.prisma.jobOffer.findMany({
        ...OfferHelper.getDefaultParams({ ...params, ...defaultParams } as OffersQueryParams),
        where: OfferHelper.getJobOffersCondiitons({ ...params, ...defaultParams } as OffersQueryParams),
        // where: {
        //   ...OfferHelper.getSearchConditions(params?.search),
        //   AND: [
        //     ...OfferHelper.getCategoriesConditions(params?.categories),
        //     ...OfferHelper.getPositionLevelsConditions(params?.positionLevels),
        //     ...OfferHelper.getContractTypesConditions(params?.contractTypes),
        //     ...OfferHelper.getWorkModesConditions(params?.workModes),
        //     ...OfferHelper.getWorkSchedulesConditions(params?.workSchedules),
        //   ],
        // ...OfferHelper.getDataSourcesConditions(params?.dataSources),
        // },
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

      const totalOffers = await this.prisma.jobOffer
        .count({
          where: OfferHelper.getJobOffersCondiitons({ ...params, ...defaultParams } as OffersQueryParams),
        })
        .catch(() => 0);

      const totalPages = Math.ceil(totalOffers / defaultParams.perPage);
      const meta = {
        page: defaultParams.page,
        perPage: defaultParams.perPage,
        total: totalOffers,
        totalPages,
        hasPrevPage: defaultParams.page > 1,
        hasNextPage: defaultParams.page < totalPages,
      };

      // return OfferHelper.parsePrismaToJobOffer(data as never[]);
      return {
        meta,
        data: OfferHelper.parsePrismaToJobOffer(data as never[]),
      } satisfies JobOffersResponse;
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
      const totalCount = await this.prisma.jobOffer.count({});
      await this.setOffersMetadata({ total: totalCount ?? 0 });
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
        where: { id: OFFERS_METADATA_ID },
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
          id: OFFERS_METADATA_ID,
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
  offerUrls: { value: string }[];
  company?: { logoUrl: string | null; name: string };
};

class OfferHelper {
  private static keysToMap = ["workplaces", "workModes", "contractTypes", "technologies", "workSchedules", "positionLevels"] as const;

  constructor() {}

  public static getJobOffersCondiitons(params: OffersQueryParams | undefined) {
    try {
      return {
        ...this.getSearchConditions(params?.search),
        AND: [
          ...this.getCategoriesConditions(params?.categories),
          ...this.getPositionLevelsConditions(params?.positionLevels),
          ...this.getContractTypesConditions(params?.contractTypes),
          ...this.getWorkModesConditions(params?.workModes),
          ...this.getWorkSchedulesConditions(params?.workSchedules),
        ],
        // ...OfferHelper.getDataSourcesConditions(params?.dataSources),
      };
    } catch (err) {
      console.log("getJobOffersConditions error: ", err);
      return {};
    }
  }

  public static getDefaultParams(params: OffersQueryParams | undefined) {
    return {
      take: params?.perPage,
      skip: (params?.perPage ?? 24) * ((params?.page ?? 1) - 1),
      // take: params?.perPage ? parseInt(params?.perPage) : 24,
      // skip: (params?.perPage ? parseInt(params?.perPage) : 24) * ((params?.page ? parseInt(params?.page) : 1) - 1),
      orderBy: params?.orderBy
        ? {
            [params.orderBy]: params?.sortOrder,
          }
        : {},
    };
  }

  public static getSearchConditions(search?: OffersQueryParams["search"]) {
    return search?.trim()
      ? {
          OR: [
            {
              positionName: {
                contains: search,
              },
            },
            {
              description: {
                contains: search,
              },
            },
          ],
        }
      : {};
  }

  public static getCategoriesConditions(categories?: OffersQueryParams["categories"]) {
    return Array.isArray(categories) && categories.length > 0
      ? categories.map(category => ({
          technologies: {
            some: {
              value: category,
            },
          },
        }))
      : [];
  }

  public static getPositionLevelsConditions(positionLevels?: OffersQueryParams["positionLevels"]) {
    return Array.isArray(positionLevels) && positionLevels.length > 0
      ? positionLevels.map(value => ({
          positionLevels: {
            some: {
              value,
            },
          },
        }))
      : [];
  }

  public static getContractTypesConditions(contractTypes?: OffersQueryParams["contractTypes"]) {
    return Array.isArray(contractTypes) && contractTypes.length > 0
      ? contractTypes.map(value => ({
          contractTypes: {
            some: {
              value,
            },
          },
        }))
      : [];
  }

  public static getWorkModesConditions(workModes?: OffersQueryParams["workModes"]) {
    return Array.isArray(workModes) && workModes.length > 0
      ? workModes.map(value => ({
          workModes: {
            some: {
              value,
            },
          },
        }))
      : [];
  }

  public static getWorkSchedulesConditions(workSchedules?: OffersQueryParams["workSchedules"]) {
    return Array.isArray(workSchedules) && workSchedules.length > 0
      ? workSchedules.map(value => ({
          workSchedules: {
            some: {
              value,
            },
          },
        }))
      : [];
  }

  public static getDataSourcesConditions(dataSources?: OffersQueryParams["dataSources"]) {
    return Array.isArray(dataSources) && dataSources.length > 0
      ? dataSources.map(value => ({
          dataSource: {
            some: {
              value,
            },
          },
        }))
      : [];
  }

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
        offerUrls: offer.offerUrls.map((o: { value: string }) => o.value) as JobOffer["offerUrls"],
        // offerUrls: offer.offerUrls.map((p: { value: string }) => p.value) as JobOffer["offerUrls"],
      };

      return newJobOffer;
    });
  }

  public static parseJobOfferToPrismaModel(offer: JobOffer) {
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
