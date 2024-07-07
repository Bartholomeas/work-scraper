import { z } from "zod";
import type { paginationMetadataSchema } from "./query.schemas";

export type OffersPaginationMetadata = z.infer<typeof paginationMetadataSchema>;
