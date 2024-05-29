import { z } from "zod";

const employmentTypeSchema = z.object({
  to: z.number(),
  from: z.number(),
  type: z.string(),
  gross: z.boolean(),
  to_chf: z.number(),
  to_eur: z.number(),
  to_gbp: z.number(),
  to_pln: z.string(),
  to_usd: z.number(),
  currency: z.string(),
  from_chf: z.number(),
  from_eur: z.number(),
  from_gbp: z.number(),
  from_pln: z.string(),
  from_usd: z.number(),
  fromChf: z.number(),
  fromEur: z.number(),
  fromGbp: z.number(),
  fromPln: z.string(),
  fromUsd: z.number(),
  toChf: z.number(),
  toEur: z.number(),
  toGbp: z.number(),
  toPln: z.string(),
  toUsd: z.number(),
});

const multilocationSchema = z.object({
  city: z.string(),
  slug: z.string(),
  street: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

const jobOfferJustjoinSchema = z.object({
  slug: z.string(),
  title: z.string(),
  requiredSkills: z.array(z.string()),
  niceToHaveSkills: z.string().nullable(),
  workplaceType: z.string(),
  workingTime: z.string(),
  experienceLevel: z.string(),
  employmentTypes: z.array(employmentTypeSchema),
  categoryId: z.number(),
  multilocation: z.array(multilocationSchema),
  city: z.string(),
  street: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  remoteInterview: z.boolean(),
  companyName: z.string(),
  companyLogoThumbUrl: z.string(),
  publishedAt: z.string(),
  openToHireUkrainians: z.boolean(),
});

export type JobOfferJustjoin = z.infer<typeof jobOfferJustjoinSchema>;
