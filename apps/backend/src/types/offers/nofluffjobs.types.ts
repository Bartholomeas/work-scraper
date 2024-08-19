export interface JobOfferNofluffJobs {
  id: string;
  name: string;
  location: {
    places: {
      country: {
        code: string;
        name: string;
      };
      city: string;
      street: string;
      postalCode: string;
      url: string;
      province?: string;
      provinceOnly?: boolean;
    }[];
    fullyRemote: boolean;
    covidTimeRemotely: boolean;
  };
  posted: number;
  renewed: number;
  title: string;
  technology: string;
  logo: {
    original: string;
    jobs_details: string;
    jobs_listing: string;
    jobs_details_2x: string;
    jobs_listing_2x: string;
    companies_details: string;
    companies_listing: string;
    jobs_details_webp: string;
    jobs_listing_webp: string;
    companies_details_2x: string;
    companies_listing_2x: string;
    jobs_details_2x_webp: string;
    jobs_listing_2x_webp: string;
    original_pixel_image: string;
    companies_details_webp: string;
    companies_listing_webp: string;
    companies_details_2x_webp: string;
    companies_listing_2x_webp: string;
  };
  category: string;
  seniority: string[];
  url: string;
  regions: string[];
  fullyRemote: boolean;
  salary: {
    from: number;
    to: number;
    type: string;
    currency: string;
    disclosedAt: string;
  };
  flavors: string[];
  topInSearch: boolean;
  highlighted: boolean;
  help4Ua: boolean;
  reference: string;
  searchBoost: boolean;
  onlineInterviewAvailable: boolean;
  tiles: {
    values: {
      value: string;
      type: string;
    }[];
  };
}
