import { z } from "zod";
import { paginationSchema } from "src/schemas/query.schemas";

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

export const offersQueryParameters = z.intersection(
  z.object({
    search: z.string().optional(),
    categories: z.array(offerTechCategories).optional(),
  }),
  paginationSchema,
);