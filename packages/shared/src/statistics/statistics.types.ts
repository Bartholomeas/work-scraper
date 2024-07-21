import { z } from "zod";
import { generalStatisticsSchema } from "./statistics.schemas";

export type GeneralStatisticsResponse = z.infer<typeof generalStatisticsSchema>;
