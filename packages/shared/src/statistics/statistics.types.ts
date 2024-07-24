import { z } from "zod";
import {
  dailyAllOffersCountPayloadSchema,
  dailyCategoriesPayloadSchema,
  dailyCountPayloadSchema,
  generalStatisticsSchema,
} from "./statistics.schemas";

export type GeneralStatisticsResponse = z.infer<typeof generalStatisticsSchema>;
export type DailyCountPayload = z.infer<typeof dailyCountPayloadSchema>;
export type DailyCategoriesPayload = z.infer<typeof dailyCategoriesPayloadSchema>;
export type DailyAllOffersCountPayload = z.infer<typeof dailyAllOffersCountPayloadSchema>;
