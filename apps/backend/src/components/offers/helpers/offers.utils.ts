import { z } from "zod";
import type { ContractTypesCodes, PositionLevelsCodes, WorkModesCodes, WorkSchedulesCodes } from "shared/src/offers/offers.types";
import { contractTypeCodesSchema, positionLevelsSchema, workModesSchema, workSchedulesSchema } from "shared/src/offers/offers.schemas";

export const isContractTypesArr = (types: unknown[]): types is ContractTypesCodes[] =>
  z.array(contractTypeCodesSchema).safeParse(types).success;

export const isWorkModesArr = (modes: unknown[]): modes is WorkModesCodes[] => z.array(workModesSchema).safeParse(modes).success;

export const isWorkSchedulesArr = (schedules: unknown[]): schedules is WorkSchedulesCodes[] =>
  z.array(workSchedulesSchema).safeParse(schedules).success;

export const isWorkPositionLevelsArr = (levels: unknown[]): levels is PositionLevelsCodes[] =>
  z.array(positionLevelsSchema).safeParse(levels).success;
