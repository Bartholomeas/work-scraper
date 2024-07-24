import { routeUrls } from "@/router/routes";

interface HeaderLinks {
  label: string;
  to: string;
}

export const HEADER_LINKS: HeaderLinks[] = [
  {
    label: "Strona główna",
    to: routeUrls.index,
  },
  {
    label: "Statystyki",
    to: routeUrls.statistics,
  },
  {
    label: "Polityka strony",
    to: routeUrls.policy,
  },
];
