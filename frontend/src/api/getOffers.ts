import { fetcher } from "@/lib/fetcher";
import { useQuery } from "vue-query/esm";

const OFFERS_LIST_KEY = "OFFERS_LIST_KEY";
const getOffersList = async () => {
  const url = `${import.meta.env.VITE_API_URL}/offers`;
  return await fetcher.get(url);
};

export const useGetOffersList = () =>
  useQuery({
    queryKey: [OFFERS_LIST_KEY],
    queryFn: getOffersList,
  });
