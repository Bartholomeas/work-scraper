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
  totalOffers: z.number(),
});
export const dailyAllOffersCountResponseSchema = z.array(
  z.intersection(
    z.object({
      id: z.string(),
      createdAt: z.string().datetime(),
    }),
    dailyAllOffersCountPayloadSchema,
  ),
);
export const dailyPositionsCountPayloadSchema = z.object({
  juniorOffers: z.number({ message: "juniorOffers must be a number" }),
  midOffers: z.number({ message: "midOffers must be a number" }),
  seniorOffers: z.number({ message: "seniorOffers must be a number" }),
  otherOffers: z.number({ message: "otherOffers must be a number" }),
});

export const dailyPositionsCountResponseSchema = z.array(
  z.intersection(
    z.object({
      id: z.string(),
      createdAt: z.string().datetime(),
    }),
    dailyPositionsCountPayloadSchema,
  ),
);

const dailyCategorySchema = z.object({
  id: z.string().optional(),
  name: z.string({ message: "name is required" }),
  count: z.number().default(0),
});
export const dailyCategoriesPayloadSchema = z.object({
  categories: z.array(dailyCategorySchema),
});

export const dailyCategoriesResponseSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.string().datetime(),
    categories: z.array(dailyCategorySchema),
  }),
);

const dailyWorkplaceSchema = z.object({
  id: z.string().optional(),
  city: z.string({ message: "city is required" }),
  count: z.number().default(0),
});
export const dailyWorkplacesPayloadSchema = z.object({
  workplaces: z.array(dailyWorkplaceSchema),
});

export const dailyWorkplacesResponseSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.string().datetime(),
    workplaces: z.array(dailyWorkplaceSchema),
  }),
);

const dataSourceStatSchema = z.object({
  id: z.string(),
  name: z.string(),
  count: z.number().default(0),
});
export const dailyDataSourcesResponseSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.string().datetime(),
    dataSources: z.array(dataSourceStatSchema),
  }),
);
