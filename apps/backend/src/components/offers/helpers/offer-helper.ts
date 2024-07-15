import { connectOrCreateArray } from "@/utils/prisma";
import type { JobOffer, OffersQueryParams } from "shared/src/offers/offers.types";

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
    const offerUrls = offer?.offerUrls?.map(el => ({
      value: el,
    }));

    const salaryRange =
      offer?.salaryRange && offer?.salaryRange?.length > 0
        ? {
            create: offer?.salaryRange?.map(salary => ({
              min: salary?.min,
              max: salary?.max,
              currency: salary?.currency,
              type: salary?.type,
              timeUnit: salary?.timeUnit,
            })),
          }
        : undefined;

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
      offerUrls: offerUrls ? { create: offerUrls } : undefined,
      salaryRange,
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

export { OfferHelper };
