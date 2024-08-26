import { useQuery } from "vue-query";

import type { NewsResponse } from "shared/src/news/news.types";

import { fetcher } from "@/utils/fetcher";
import { NEWS_URL } from "@/constants";
import type { NewsResponse } from "shared/src/news/news.types";
import { useQuery } from "vue-query/esm";
import { newsQueryKeys } from "@/api/news/newsQueryKeys";

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

export const useGetNews = () =>
  useQuery<NewsResponse | undefined>({
    queryKey: newsQueryKeys.getNews(),
    queryFn: getNews,
  });
