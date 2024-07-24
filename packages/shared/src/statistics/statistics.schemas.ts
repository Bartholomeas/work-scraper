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

export const dailyAllOffersCountPayloadSchema = z.object({
  totalOffers: z.number({ message: "Total offers must be a number" }),
});

export const dailyCountPayloadSchema = z.object({
  juniorOffers: z.number({ message: "Junior offers must be a number" }),
  midOffers: z.number({ message: "Mid offers must be a number" }),
  seniorOffers: z.number({ message: "Senior offers must be a number" }),
  otherOffers: z.number({ message: "Other offers must be a number" }),
});

const dailyCategorySchema = z.object({
  name: z.string({ message: "Name is required" }),
  count: z.number().default(0),
});
export const dailyCategoriesPayloadSchema = z.object({
  categories: z.array(dailyCategorySchema),
});
