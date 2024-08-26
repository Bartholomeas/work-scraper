import { z } from "zod";
import { newsSchema, newsSchemaResponse } from "./news.schemas";

export type NewsSingle = z.infer<typeof newsSchema>;
export type NewsResponse = z.infer<typeof newsSchemaResponse>;
