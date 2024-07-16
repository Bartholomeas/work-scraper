import dayjs from "dayjs";
import { PrismaClient } from "@prisma/client";

import { AppError } from "@/utils/app-error";

import { PrismaInstance } from "@/components/libs/prisma.instance";
import { ERROR_CODES } from "@/misc/error.constants";

import type { JobOffer, JobOffersResponse, OffersQueryParams } from "shared/src/offers/offers.types";
import { OFFERS_METADATA_ID } from "@/misc/constants";
import { OfferHelper } from "@/components/offers/helpers/offer-helper";

interface SetOffersMetadataProps {
  total: number;
}

class OffersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  public async getAllWorkplaces() {
    return this.prisma.workplace.findMany();
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
            update: { ...parsedOffer, updatedAt: new Date() } as never,
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

  public async deleteOutdatedRecords() {
    try {
      const today = dayjs().startOf("day").toISOString();

      const res = await this.prisma.jobOffer.deleteMany({
        where: {
          expirationDate: {
            lt: today,
          },
        },
      });
      console.log(`Deleted ${res.count} outdated records`);
      return res.count;
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.invalid_type,
        message: JSON.stringify(err),
      });
    }
  }
}

export { OffersService };
