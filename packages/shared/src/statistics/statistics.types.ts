import { z } from "zod";
import {
  dailyAllOffersCountPayloadSchema,
  dailyAllOffersCountResponseSchema,
  dailyCategoriesPayloadSchema,
  dailyCategoriesResponseSchema,
  dailyPositionsCountPayloadSchema,
  dailyPositionsCountResponseSchema,
  dailyWorkplacesPayloadSchema,
  dailyWorkplacesResponseSchema,
  generalStatisticsSchema,
} from "./statistics.schemas";

export type GeneralStatisticsResponse = z.infer<typeof generalStatisticsSchema>;

export type DailyAllOffersCountPayload = z.infer<typeof dailyAllOffersCountPayloadSchema>;
export type DailyAllOffersCountResponse = z.infer<typeof dailyAllOffersCountResponseSchema>;

export type DailyPositionsCountPayload = z.infer<typeof dailyPositionsCountPayloadSchema>;
export type DailyPositionsCountResponse = z.infer<typeof dailyPositionsCountResponseSchema>;

export type DailyCategoriesCountPayload = z.infer<typeof dailyCategoriesPayloadSchema>;
export type DailyCategoriesCountResponse = z.infer<typeof dailyCategoriesResponseSchema>;

export type DailyWorkplacesCountPayload = z.infer<typeof dailyWorkplacesPayloadSchema>;
export type DailyWorkplacesCountResponse = z.infer<typeof dailyWorkplacesResponseSchema>;
