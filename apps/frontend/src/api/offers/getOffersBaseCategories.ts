import { useQuery } from "vue-query/esm";
import { fetcher } from "@/utils/fetcher";
import { offersQueryKeys } from "@/api/offers/offersQueryKeys";
import type { OffersBaseCategories } from "shared/src/offers/offers.types";

export const getOffersBaseCategories = async (): Promise<OffersBaseCategories | undefined> => {
  try {
    return await fetcher.get(import.meta.env.VITE_API_URL + "/offers" + "/base-categories");
  } catch (err) {
    throw err;
  }
};

export const useGetOffersBaseCategories = () =>
  useQuery({
    queryKey: offersQueryKeys.getOffersBaseCategories(),
    queryFn: getOffersBaseCategories,
  });
