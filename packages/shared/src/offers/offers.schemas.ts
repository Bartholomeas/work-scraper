import { z } from "zod";
import { paginationMetadataSchema, paginationSchema } from "../general/query.schemas";

export const positionLevelsSchema = z.enum(["intern", "junior", "mid", "senior", "manager"]);
export const contractTypeCodesSchema = z.enum(["uz", "uop", "b2b", "uod", "intern"]);
export const workModesSchema = z.enum(["remote", "hybrid", "stationary"]);
export const workSchedulesSchema = z.enum(["full-time", "part-time", "internship", "freelance"]);

export const dataSourceSchema = z.object({
  name: z.string(),
  value: z.string(),
});

export const dataSourceCodesSchema = z.enum(["pracuj", "justjoin", "solid.jobs", "nofluffjobs", "theprotocol"]);

export const currenciesSchema = z.enum(["pln", "usd"]);
export const salaryTypeSchema = z.enum(["brutto", "netto"]);
export const timeUnitTypeSchema = z.enum(["month", "hour", "day"]);
export const salaryRangeSchema = z
  .object({
    min: z.number(),
    max: z.number(),
    currency: currenciesSchema.default("pln"),
    type: salaryTypeSchema.default("brutto"),
    timeUnit: timeUnitTypeSchema.default("month"),
  })
  .optional();

export const jobOfferSchema = z.object({
  id: z.string(),
  dataSourceCode: dataSourceCodesSchema.optional(),
  dataSource: dataSourceSchema,
  slug: z.string(),
  positionName: z.string(),
  companyName: z.string().optional(),
  company: z.object({
    logoUrl: z.string().nullable(),
    name: z.string(),
  }),
  salaryRange: z.array(salaryRangeSchema),
  positionLevels: z.array(positionLevelsSchema),
  contractTypes: z.array(contractTypeCodesSchema),
  workModes: z.array(workModesSchema),
  workSchedules: z.array(workSchedulesSchema),
  technologies: z.array(z.string()),
  description: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  expirationDate: z.string().optional(),
  offerUrls: z.array(z.string().url()),
  workplaces: z.array(
    z.object({
      city: z.string(),
      address: z.string().nullable(),
    }),
  ),
});

export const companySchema = z.object({
  logoUrl: z.string().nullable(),
  name: z.string(),
});

// export const offerTechCategories = z.union([
//   z.literal("html"),
//   z.literal("css"),
//   z.literal("javascript"),
//   z.literal("typescript"),
//   z.literal("sql"),
//   z.literal("python"),
//   z.literal("java"),
//   z.literal("c#"),
//   z.literal("php"),
//   z.literal("c++"),
//   z.literal("go"),
//   z.literal("c"),
//   z.literal("rust"),
//   z.literal("r"),
//   z.literal("node.js"),
//   z.literal(".net"),
//   z.literal("react"),
//   z.literal("angular"),
//   z.literal("android"),
//   z.literal("aws"),
//   z.literal("ios"),
//   z.literal("ruby on rails"),
// ]);

const stringToArray = (val: unknown) => (typeof val === "string" ? val.split(",").map(v => v.trim()) : val);

const orderByEnumSchema = z.enum(["createdAt", "expirationDate", "salary"]).default("createdAt");
const sortOrderEnumSchema = z.enum(["asc", "desc"]).default("asc");

export const coreSearchParamsSchema = z.object({
  search: z.string().optional(),
  orderBy: orderByEnumSchema,
  sortOrder: sortOrderEnumSchema,
});

export const baseCategoriesSchema = z.object({
  // search: z.string().optional(),
  // orderBy: z.enum(["createdAt", "expirationDate", "salary"]).default("createdAt"),
  // sortOrder: z.enum(["asc", "desc"]).default("desc"),
  categories: z.preprocess(stringToArray, z.array(z.string())).optional(),
  dataSources: z.preprocess(stringToArray, z.array(dataSourceCodesSchema)).optional(),
  positionLevels: z.preprocess(stringToArray, z.array(positionLevelsSchema)).optional(),
  contractTypes: z.preprocess(stringToArray, z.array(contractTypeCodesSchema)).optional(),
  workModes: z.preprocess(stringToArray, z.array(workModesSchema)).optional(),
  workSchedules: z.preprocess(stringToArray, z.array(workSchedulesSchema)).optional(),
  workplaces: z.preprocess(stringToArray, z.array(z.string())).optional(),
});
export const offersQueryParamsSchema = baseCategoriesSchema.extend(paginationSchema.shape).extend(coreSearchParamsSchema.shape).strip();

export const jobOffersResponseSchema = z.object({
  meta: paginationMetadataSchema,
  data: z.array(jobOfferSchema),
});

export const offersMetadataSchema = z.object({
  id: z.literal("offers-metadata"),
  updatedAt: z.string().date(),
  total: z.number(),
});
