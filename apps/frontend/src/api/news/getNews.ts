import { useQuery } from "vue-query";
import { newsQueryKeys } from "@/api/news/newsQueryKeys";

import type { NewsResponse } from "shared/src/news/news.types";

import { fetcher } from "@/utils/fetcher";
import { NEWS_URL } from "@/constants";

const getNews = async (): Promise<NewsResponse | undefined> => {
  try {
    return await fetcher.get<NewsResponse>(NEWS_URL);
  } catch (err) {
    throw err;
  }
};

export const useGetNews = () =>
  useQuery<NewsResponse | undefined>({
    queryKey: newsQueryKeys.getNews(),
    queryFn: getNews,
  });
