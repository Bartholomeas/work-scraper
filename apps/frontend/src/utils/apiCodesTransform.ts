import type { TimeUnitTypes } from "shared/src/offers/offers.types";

export const transformTimeUnitType = (type: TimeUnitTypes | undefined): string => {
  switch (type) {
    case "day":
      return "dzień";
    case "month":
      return "mies";
    case "hour":
      return "godz.";
    default:
      return "mies";
  }
};
