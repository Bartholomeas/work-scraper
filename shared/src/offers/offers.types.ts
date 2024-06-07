import { z } from "zod";
import {
  companySchema,
  contractTypeCodesSchema,
  jobOfferSchema,
  jobOffersResponseSchema,
  type offersQueryParameters,
  positionLevelsSchema,
  workModesSchema,
  workSchedulesSchema,
} from "./offers.schemas";

export type ContractTypesCodes = z.infer<typeof contractTypeCodesSchema>;
export type WorkModesCodes = z.infer<typeof workModesSchema>;
export type WorkSchedulesCodes = z.infer<typeof workSchedulesSchema>;
export type PositionLevelsCodes = z.infer<typeof positionLevelsSchema>;
export type JobOffer = z.infer<typeof jobOfferSchema>;
export type OfferCompany = z.infer<typeof companySchema>;
export type JobOffersResponse = z.infer<typeof jobOffersResponseSchema>;

export interface JobQueryParams {
  search?: string;
  categories?: string[];
}

export interface ScrappedDataResponse<T extends JobOffer[] = JobOffer[]> {
  createdAt: string;
  data: T;
}

export type OffersQueryParams = z.infer<typeof offersQueryParameters>;
