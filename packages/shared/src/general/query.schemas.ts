import { z } from "zod";

const toNumberWithDefault = (defaultValue: number) => (val: unknown) => {
  if (!val) return defaultValue;
  const parsed = typeof val === "string" ? parseInt(val, 10) : `${val}`;
  return isNaN(+parsed) ? defaultValue : parsed;
};

export const paginationSchema = z.object({
  page: z.preprocess(toNumberWithDefault(1), z.number().min(1)),
  perPage: z.preprocess(toNumberWithDefault(24), z.number().min(8)),
});
export const paginationMetadataSchema = z.intersection(
  paginationSchema,
  z.object({
    // currentPage: z.number().default(1),
    totalPages: z.number().default(1),
    total: z.number().min(0),
    // perPage: z.number().default(24),
    hasNextPage: z.boolean().default(false),
    hasPrevPage: z.boolean().default(false),
  }),
);
