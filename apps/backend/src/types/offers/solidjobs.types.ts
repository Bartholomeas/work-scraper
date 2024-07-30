import { z } from "zod";

const salaryRangeSchema = z.object({
  lowerBound: z.number(),
  upperBound: z.number(),
  currency: z.string(),
  employmentType: z.string(),
  salaryPeriod: z.string(),
});

const skillSchema = z.object({
  name: z.string(),
  skillType: z.string(),
  skillLevel: z.string(),
});

const languageSchema = z.object({
  name: z.string(),
  skillType: z.string(),
  skillLevel: z.string(),
});

const jobOfferSolidJobsSchema = z.object({
  id: z.number(),
  jobOfferKey: z.string(),
  division: z.string(),
  mainCategory: z.string(),
  subCategory: z.string(),
  jobTitle: z.string(),
  experienceLevel: z.string(),
  minimalExperienceInField: z.number(),
  salaryRange: salaryRangeSchema,
  normalizedSalaryRange: salaryRangeSchema,
  isSalaryNormalized: z.boolean(),
  workload: z.string(),
  remotePossible: z.string(),
  requiredSkills: z.array(skillSchema),
  requiredLanguages: z.array(languageSchema),
  validFrom: z.string(),
  validTo: z.string(),
  companyName: z.string(),
  companyAddress: z.string(),
  companyCity: z.string(),
  companyLogoUrl: z.string(),
  jobOfferUrl: z.string(),
  jobOfferShortUrl: z.string(),
  officeLatitude: z.number(),
  officeLongitude: z.number(),
  isPremium: z.boolean(),
});

export type JobOfferSolidJobs = z.infer<typeof jobOfferSolidJobsSchema>;
