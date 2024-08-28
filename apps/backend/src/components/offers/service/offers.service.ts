import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

import type { JobOffer, JobOffersResponse, OffersQueryParams, OffersWorkplaceListItem } from "shared/src/offers/offers.types";

import { OFFERS_METADATA_ID, PRACUJ_NAME } from "@/misc/constants";

import { PrismaInstance } from "@/components/libs/prisma.instance";
import { OfferHelper } from "@/components/offers/helpers/offer-helper";
import { ErrorHandlerController } from "@/components/error/error-handler.controller";

interface IOffersService {
  getAllWorkplaces(): Promise<OffersWorkplaceListItem[] | undefined>;

  updateWorkplacesCounts(): Promise<unknown>;

  updateCategoriesCounts(): Promise<unknown>;
}

/**
 * @description -  Service class for managing offers and workplaces.
 * Implements operations related to job offers and their metadata within a database.
 */
class OffersService implements IOffersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  public async getCategoriesCounts() {
    return this.prisma.technology.findMany({
      select: {
        id: true,
        _count: true,
        value: true,
      },
    });
  }

  /**
   * @description - Update count of each category (how much offers already have it)
   */
  public async updateCategoriesCounts() {
    const categories = await this.getCategoriesCounts();
    const transaction = categories?.map(cat =>
      this.prisma.technology.update({
        where: {
          id: cat.id,
        },
        data: {
          count: cat._count.jobOffers,
        },
      }),
    );

    return this.prisma.$transaction(transaction);
  }

  /**
   * @description - Get count of all workplaces assigned to job offers
   */
  private async getWorkplaceCounts() {
    return this.prisma.workplace.findMany({
      select: {
        id: true,
        value: true,
        _count: true,
      },
    });
  }

  /**
   * @description - Updates count of job offers at each workplace
   * @returns Promise<OffersWorkplaceListItem[] | undefined>
   */
  public async updateWorkplacesCounts() {
    try {
      const workplaces = await this.getWorkplaceCounts();
      const transaction = workplaces.map(workplace =>
        this.prisma.workplace.update({
          where: {
            id: workplace.id,
          },
          data: {
            count: workplace._count.jobOffers,
          },
        }),
      );

      return this.prisma.$transaction(transaction);
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  }

  /**
   * @description - Get all workplaces that have more than 10 offers assigned
   * @returns  Promise<{id: string, value: string, count: number}[]>
   */
  public async getAllWorkplaces() {
    return this.prisma.workplace.findMany({
      where: {
        count: {
          gte: 10,
        },
      },
      select: {
        id: true,
        value: true,
        count: true,
      },
      orderBy: {
        count: "desc",
      },
    }) satisfies Promise<OffersWorkplaceListItem[]>;
  }

  public async getOffersMetadata() {
    try {
      return await this.prisma.offersMetadata.findUnique({ where: { id: OFFERS_METADATA_ID } });
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  }

  /**
   * Fetches job offers based on specified query parameters.
   * @param {OffersQueryParams | undefined} params - Query parameters for job offer search.
   * @returns {Promise<JobOffersResponse>} A promise that resolves to job offers with pagination metadata.
   * @throws {AppErrorController} Throws an error if the operation fails.
   */
  public async getJobOffers(params: OffersQueryParams | undefined): Promise<JobOffersResponse> {
    const defaultParams: { perPage: OffersQueryParams["perPage"]; page: OffersQueryParams["page"] } = {
      perPage: params?.perPage ?? 48,
      page: params?.page && params?.page < 1 ? 1 : (params?.page ?? 1),
    };

    try {
      const data = await this.prisma.jobOffer.findMany({
        ...OfferHelper.getDefaultParams({ ...params, ...defaultParams } as OffersQueryParams),
        where: {
          ...OfferHelper.getJobOffersConditions({ ...params, ...defaultParams } as OffersQueryParams),
          dataSourceCode: {
            not: PRACUJ_NAME,
          },
        },

        select: {
          id: true,
          createdAt: true,
          expirationDate: true,
          positionName: true,
          companyName: true,
          dataSourceCode: true,
          dataSource: {
            select: {
              name: true,
              value: true,
            },
          },
          company: {
            select: {
              name: true,
            },
          },
          workplaces: {
            select: {
              value: true,
              city: true,
              address: true,
            },
          },
          workModes: {
            select: {
              id: true,
              value: true,
            },
          },
          contractTypes: {
            select: {
              id: true,
              value: true,
            },
          },
          technologies: {
            select: {
              id: true,
              count: true,
              value: true,
            },
          },
          workSchedules: {
            select: {
              id: true,
              value: true,
            },
          },
          positionLevels: {
            select: {
              id: true,
              value: true,
            },
          },
          salaryRange: {
            select: {
              id: true,
              currency: true,
              min: true,
              max: true,
              timeUnit: true,
              type: true,
            },
          },
          offerUrls: {
            select: {
              id: true,
              value: true,
            },
          },
        },
      });

      const totalOffers = await this.prisma.jobOffer
        .count({
          where: {
            dataSourceCode: {
              not: PRACUJ_NAME,
            },
            ...OfferHelper.getJobOffersConditions({ ...params, ...defaultParams } as OffersQueryParams),
          },
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
      throw ErrorHandlerController.handleError(err);
    }
  }
  /**
   * @description - Saves passed JobOffer array to database
   * @param {JobOffer[]} offers
   */
  public async saveJobOffers(offers: JobOffer[]) {
    try {
      if (!offers.length) return;
      console.log("Saving scrapped data..");

      const batchSize = 50;
      const parsedOffers = offers.filter(offer => offer?.positionName).map(offer => OfferHelper.parseJobOfferToPrismaModel(offer));
      for (let i = 0; i < parsedOffers.length; i += batchSize) {
        const batch = parsedOffers.slice(i, i + batchSize);

        await this.prisma.$transaction(async prisma => {
          for (const offer of batch) {
            const { offerUrls, salaryRange, ...restOffer } = offer;

            await prisma.jobOffer.upsert({
              where: { id: offer.id },
              create: offer,
              update: {
                ...restOffer,
                updatedAt: new Date(),
              },
            });
          }
        });
        console.log(`Processed ${i + batch.length} out of ${parsedOffers.length} offers`);
      }

      console.log("All offers saved successfully");
    } catch (err) {
      console.error("Error saving job offers:", err);
      throw ErrorHandlerController.handleError(err);
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
      throw ErrorHandlerController.handleError(err);
    }
  }

  public async deleteOutdatedRecords() {
    try {
      const today = dayjs(Date.now()).toISOString();

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
      throw ErrorHandlerController.handleError(err);
    }
  }
}

export { OffersService };
