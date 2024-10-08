import { z } from "zod";
import {
  contractTypeCodesSchema,
  type currenciesSchema,
  dataSourceCodesSchema,
  jobOfferSchema,
  jobOffersResponseSchema,
  offersMetadataSchema,
  offersQueryParamsSchema,
  positionLevelsSchema,
  type salaryTypeSchema,
  timeUnitTypeSchema,
  workModesSchema,
  workSchedulesSchema,
} from "./offers.schemas";

export type CurrencyCodes = z.infer<typeof currenciesSchema>;
export type SalaryTypes = z.infer<typeof salaryTypeSchema>;
export type TimeUnitTypes = z.infer<typeof timeUnitTypeSchema>;
export type ContractTypesCodes = z.infer<typeof contractTypeCodesSchema>;
export type WorkModesCodes = z.infer<typeof workModesSchema>;
export type WorkSchedulesCodes = z.infer<typeof workSchedulesSchema>;
export type PositionLevelsCodes = z.infer<typeof positionLevelsSchema>;
export type DataSourceCodes = z.infer<typeof dataSourceCodesSchema>;
export type JobOffer = z.infer<typeof jobOfferSchema>;
export type JobOffersResponse = z.infer<typeof jobOffersResponseSchema>;

export interface JobQueryParams {
  search?: string;
  categories?: string[];
}

export interface ScrappedDataResponse<T extends JobOffer[] = JobOffer[]> {
  createdAt: string;
  data: T;
}

export type OffersQueryParams = z.infer<typeof offersQueryParamsSchema>;
export type OffersMetadataResponse = z.infer<typeof offersMetadataSchema>;

export type AllCategoryCodes = ContractTypesCodes | WorkModesCodes | WorkSchedulesCodes | PositionLevelsCodes;

export type CategoryRecord<T extends string = AllCategoryCodes> = { id: string; value: T };

export interface OffersBaseCategory<T extends string = AllCategoryCodes> {
  name: string;
  items: CategoryRecord<T>[];
}

export interface OffersBaseCategories {
  contractTypes: OffersBaseCategory<ContractTypesCodes>;
  positionLevels: OffersBaseCategory<PositionLevelsCodes>;
  workModes: OffersBaseCategory<WorkModesCodes>;
  workSchedules: OffersBaseCategory<WorkSchedulesCodes>;
  categories: OffersBaseCategory<string>;
  dataSources: OffersBaseCategory<string>;
}

export interface OffersWorkplaceListItem {
  id: string;
  value: string;
  count: number;
}
