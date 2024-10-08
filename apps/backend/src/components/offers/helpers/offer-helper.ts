import { JOB_DATA_SOURCES } from "@/misc/constants";
import { connectOrCreateArray } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import type { JobOffer, OffersQueryParams } from "shared/src/offers/offers.types";

type PrismaJobOffer = JobOffer & {
  workplaces: { city: string; address?: string }[];
  workModes: { value: string }[];
  contractTypes: { value: string }[];
  technologies: { value: string }[];
  workSchedules: { value: string }[];
  positionLevels: { value: string }[];
  offerUrls: { value: string }[];
  company?: { logoUrl: string | null; name: string };
};

class OfferHelper {
  public static getJobOffersConditions(params: OffersQueryParams | undefined) {
    const [mainSearch, categoriesString] = params?.search?.split(";") ?? [params?.search, undefined];
    const categories = categoriesString?.split(",").filter(Boolean) ?? [];
    const allCategories = [...new Set([...categories, ...(params?.categories ?? [])])];

    try {
      return {
        ...this.getSearchConditions(mainSearch),
        AND: [
          ...this.getCategoriesConditions(allCategories),
          ...this.getDataSourcesConditions(params?.dataSources),
          ...this.getPositionLevelsConditions(params?.positionLevels),
          ...this.getContractTypesConditions(params?.contractTypes),
          ...this.getWorkModesConditions(params?.workModes),
          ...this.getWorkSchedulesConditions(params?.workSchedules),
          ...this.getWorkplacesConditions(params?.workplaces),
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
      skip: (params?.perPage ?? 48) * ((params?.page ?? 1) - 1),
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
    const searchValue = search?.trim();

    return searchValue
      ? {
          OR: [
            {
              positionName: {
                contains: searchValue,
              },
            },
            {
              companyName: {
                contains: searchValue,
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
    return [
      {
        positionLevels: {
          some: {
            value: {
              in: positionLevels,
            },
          },
        },
      },
    ];
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
    return Array.isArray(dataSources)
      ? [
          {
            dataSourceCode: {
              in: dataSources,
            },
          },
        ]
      : [];
  }

  public static getWorkplacesConditions(workplaces?: OffersQueryParams["workplaces"]) {
    return Array.isArray(workplaces) && workplaces?.length > 0
      ? workplaces?.map(value => ({
          workplaces: {
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
        workplaces: offer.workplaces as JobOffer["workplaces"],
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

  public static parseJobOfferToPrismaModel(offer: JobOffer): Prisma.JobOfferCreateInput {
    const uniqueOfferUrls = [...new Set(offer?.offerUrls)]?.map(el => ({
      value: el,
    }));

    const dataSource = Object.values(JOB_DATA_SOURCES)?.find(el => el.value === offer?.dataSourceCode);
    const salaryRange =
      offer?.salaryRange && offer?.salaryRange?.length > 0
        ? {
            create: Array.from(
              new Map(
                offer.salaryRange.map(salary => [
                  `${salary?.min}-${salary?.max}-${salary?.currency}-${salary?.type}-${salary?.timeUnit}`,
                  salary,
                ]),
              ).values(),
            ).map(salary => ({
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
      dataSource: {
        connectOrCreate: {
          where: { name: dataSource?.name },
          create: {
            name: dataSource?.name ?? "Brak kategorii",
            value: dataSource?.value ?? "uncategorized",
          },
        },
      },
      description: offer?.description,
      expirationDate: offer?.expirationDate,
      positionLevels: connectOrCreateArray(offer.positionLevels),
      workplaces: {
        connectOrCreate: offer?.workplaces?.map(place => ({
          where: {
            value: place?.city?.toLowerCase() ?? "polska",
          },
          create: {
            value: place?.city?.toLowerCase() ?? "polska",
            city: place?.city,
            address: place?.address ?? null,
          },
        })),
      },
      contractTypes: connectOrCreateArray(offer?.contractTypes),
      workModes: connectOrCreateArray(offer?.workModes),
      workSchedules: connectOrCreateArray(offer?.workSchedules),
      technologies: connectOrCreateArray(offer?.technologies),
      offerUrls: uniqueOfferUrls ? { create: uniqueOfferUrls } : undefined,
      salaryRange,
      company: {
        connectOrCreate: {
          where: { name: offer?.company?.name ?? "Nieznana" },
          create: {
            name: offer?.company?.name ?? "Nieznana",
            logoUrl: offer?.company?.logoUrl,
          },
        },
      },
    };
  }
}

export { OfferHelper };
