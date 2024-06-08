import type { DataSourceCodes } from "shared/src/offers/offers.types";

export const getServiceIconUrlByCode = (code: DataSourceCodes | undefined): { url: string; alt: string } => {
  switch (code) {
    case "justjoin":
      return { url: "/icons/justjoin.svg", alt: "Logo JustJoin" };
    case "pracuj":
      return { url: "/icons/pracuj.svg", alt: "Logo Pracuj" };
    default:
      return { url: "", alt: "" };
  }
};
