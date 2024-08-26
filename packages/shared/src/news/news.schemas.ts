import { z } from "zod";

export const newsSchema = z.object({
  id: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  date: z.string(),
});

export const newsSchemaResponse = z.array(newsSchema);
