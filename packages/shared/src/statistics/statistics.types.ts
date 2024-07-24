import { z } from "zod";
import {
  dailyAllOffersCountPayloadSchema,
  dailyAllOffersCountResponseSchema,
  dailyCategoriesPayloadSchema,
  dailyPositionsCountPayloadSchema,
  dailyPositionsCountResponseSchema,
  generalStatisticsSchema,
} from "./statistics.schemas";

export type GeneralStatisticsResponse = z.infer<typeof generalStatisticsSchema>;

export type DailyAllOffersCountPayload = z.infer<typeof dailyAllOffersCountPayloadSchema>;
export type DailyAllOffersCountResponse = z.infer<typeof dailyAllOffersCountResponseSchema>;

export type DailyPositionsCountPayload = z.infer<typeof dailyPositionsCountPayloadSchema>;
export type DailyPositionsCountResponse = z.infer<typeof dailyPositionsCountResponseSchema>;

export type DailyCategoriesCountPayload = z.infer<typeof dailyCategoriesPayloadSchema>;
export type DailyCategoriesCountResponse = z.infer<typeof dailyCategoriesPayloadSchema>;
