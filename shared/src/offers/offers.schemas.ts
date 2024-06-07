import { z } from "zod";
import { paginationMetadataSchema } from "../general/query.schemas";

export const positionLevelsSchema = z.enum(["intern", "junior", "mid", "senior", "manager"]);
export const contractTypeCodesSchema = z.enum(["uz", "uop", "b2b", "uod", "intern"]);
export const workModesSchema = z.enum(["remote", "hybrid", "stationary"]);
export const workSchedulesSchema = z.enum(["full-time", "part-time", "internship", "freelance"]);
export const dataSourceCodesSchema = z.enum(["pracuj", "justjoin"]);
export const salarySchema = z
  .object({
    min: z.number(),
    max: z.number(),
    currency: z.enum(["pln", "usd"]).default("pln"),
  })
  .optional();

export const jobOfferSchema = z.object({
  id: z.string(),
  dataSourceCode: dataSourceCodesSchema.optional(),
  slug: z.string(),
  positionName: z.string(),
  company: z.object({
    logoUrl: z.string().nullable(),
    name: z.string(),
  }),
  positionLevels: z.array(positionLevelsSchema),
  // contractTypes: z.array(contractTypeCodesSchema),
  contractTypes: z.array(contractTypeCodesSchema),
  workModes: z.array(workModesSchema),
  // workModes: z.array(z.string()),
  workSchedules: z.array(workSchedulesSchema),
  // workSchedules: z.array(z.string()),
  technologies: z.array(z.string()),
  description: z.string().optional(),
  createdAt: z.string(),
  expirationDate: z.string().optional(),
  offerUrls: z.array(z.string().url()),
  workplace: z.array(z.string()),
});

export const companySchema = z.object({
  logoUrl: z.string().nullable(),
  name: z.string(),
});

export const offerTechCategories = z.union([
  z.literal("html"),
  z.literal("css"),
  z.literal("javascript"),
  z.literal("typescript"),
  z.literal("sql"),
  z.literal("python"),
  z.literal("java"),
  z.literal("c#"),
  z.literal("php"),
  z.literal("c++"),
  z.literal("go"),
  z.literal("c"),
  z.literal("rust"),
  z.literal("r"),
  z.literal("node.js"),
  z.literal(".net"),
  z.literal("react"),
  z.literal("angular"),
  z.literal("android"),
  z.literal("aws"),
  z.literal("ios"),
  z.literal("ruby on rails"),
]);

export const offersQueryParameters = z.object({
  search: z.string().optional(),
  categories: z.array(offerTechCategories).optional(),
});

export const jobOffersResponseSchema = z.object({
  meta: paginationMetadataSchema,
  data: z.array(jobOfferSchema),
});