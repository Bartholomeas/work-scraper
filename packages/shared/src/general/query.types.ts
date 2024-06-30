import { z } from "zod";
import { paginationMetadataSchema } from "src/general/query.schemas";

export type OffersQueryParams = z.infer<typeof paginationMetadataSchema>;
