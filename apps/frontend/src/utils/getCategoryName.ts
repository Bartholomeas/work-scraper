import type { AllCategoryCodes } from "shared/src/offers/offers.types";

export const getCategoryName = <T extends AllCategoryCodes>(categoryCode: T | undefined) => {
  switch (categoryCode) {
    // Contract types
    case "uop":
      return "Umowa u pracę";
    case "uod":
      return "Umowa o dzieło";
    case "uz":
      return "Umowa zlecenia";
    case "b2b":
      return "B2B";
    case "freelance":
      return "Freelance";
    //   Position levels
    case "intern":
      return "Stażysta";
    case "junior":
      return "Młodszy specjalista";
    case "mid":
      return "Regularny specjalista";
    case "senior":
      return "Senior specjalista";
    case "manager":
      return "Menedżer";
    //   Work mode
    case "remote":
      return "Zdalnie";
    case "stationary":
      return "Stacjonarnie";
    //   Work schedule
    case "hybrid":
      return "Hybrydowo";
    case "part-time":
      return "Część etatu";
    case "internship":
      return "Staż";
    case "full-time":
      return "Pełen etat";
    default:
      return categoryCode ?? "";
  }
};
