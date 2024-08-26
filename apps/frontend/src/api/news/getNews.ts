import { fetcher } from "@/utils/fetcher";
import { NEWS_URL } from "@/constants";
import type { NewsResponse } from "shared/src/news/news.types";

export const useGetNews = async (): Promise<NewsResponse | undefined> => {
  try {
    return await fetcher.get<NewsResponse>(`${NEWS_URL}`);
  } catch (err) {
    throw err;
  }
};
