import { z } from "zod";
import { type paginationMetadataSchema, paginationSchema } from "./query.schemas";

export type OffersPaginationMetadata = z.infer<typeof paginationMetadataSchema>;
export type PagePagination = z.infer<typeof paginationSchema>;
