import { z } from "zod";

// Probably need to move it (and backend one) to shared preferences

export const positionLevelsSchema = z.enum(["intern", "junior", "mid", "senior", "manager"]);
export const contractTypeCodesSchema = z.enum(["uz", "uop", "b2b", "uod", "intern"]);
export const workModesSchema = z.enum(["remote", "hybrid", "stationary"]);
export const workSchedulesSchema = z.enum(["full-time", "part-time", "internship", "freelance"]);
export const dataSourceCodesSchema = z.enum(["pracuj", "justjoin"]);

export const companySchema = z.object({
  logoUrl: z.string().nullable(),
  name: z.string(),
});

const jobOfferSchema = z.object({
  id: z.string(),
  dataSourceCode: dataSourceCodesSchema.optional(),
  slug: z.string(),
  positionName: z.string(),
  company: companySchema,
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

export type ContractTypesCodes = z.infer<typeof contractTypeCodesSchema>;
export type WorkModesCodes = z.infer<typeof workModesSchema>;
export type WorkSchedulesCodes = z.infer<typeof workSchedulesSchema>;
export type PositionLevelsCodes = z.infer<typeof positionLevelsSchema>;
export type OfferCompany = z.infer<typeof companySchema>;
export type JobOffer = z.infer<typeof jobOfferSchema>;
