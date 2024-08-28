import { createQueryKeyFactory, type QueryFunctionContextCreator } from "@/lib/tanstack-query/queryKeyFactory";

const keyFactory = createQueryKeyFactory("news");
export const newsQueryKeys = {
  getNews: () => keyFactory.list("getNews"),
};

export type NewsQueryFunctionContext = QueryFunctionContextCreator<typeof newsQueryKeys>;
