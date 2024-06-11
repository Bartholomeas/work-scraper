import slugify from "slugify";
import { SLUGIFY_CONFIG } from "./../lib/slugify";
import type { JobOffer } from "@shared/offers/offers.types";

/**
 * @description - Free to use keys string but preffered keys are: [positionName, companyName, workplace[0],positionLevels[0]]
 * @param offer
 */
// export const generateJobOfferSlug = (keys: string[] = []) => slugify(keys.join(" "), SLUGIFY_CONFIG);
export const generateJobOfferSlug = (offer: JobOffer) => {
  const slugKeys = [
    offer?.positionName,
    offer?.company.name,
    (offer?.workplace ?? []).join(" "),
    (offer?.positionLevels ?? []).join(" "),
    (offer?.technologies ?? []).join(" "),
    offer?.dataSourceCode,
  ].filter(Boolean);

  return slugify(slugKeys.join(" "), SLUGIFY_CONFIG);
};
