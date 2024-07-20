import { z } from "zod";

export const topWorkplaceSchema = z.object({
  id: z.string(),
  count: z.number().default(0),
  city: z.string(),
});
export const topCategoriesSchema = z.object({
  id: z.string(),
  count: z.number().default(0),
  value: z.string(),
});

export const generalStatisticsSchema = z.object({
  id: z.literal("general-statistics"),
  updatedAt: z.string().date(),
  totalOffers: z.number().default(0),
  topWorkplaces: z.array(topWorkplaceSchema),
  topCategories: z.array(topCategoriesSchema),
});
