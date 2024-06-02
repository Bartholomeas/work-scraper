import { z } from "zod";

export const paginationSchema = z.object({
  currentPage: z.number().default(1),
  itemsPerPage: z.number().default(24),
});
export const paginationMetadataSchema = z.intersection(
  paginationSchema,
  z.object({
    // currentPage: z.number().default(1),
    totalPages: z.number().default(1),
    totalItems: z.number(),
    // itemsPerPage: z.number().default(24),
    hasNextPage: z.boolean().default(false),
    hasPrevPage: z.boolean().default(false),
  }),
);
