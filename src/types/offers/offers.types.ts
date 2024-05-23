type PositionLevels = "intern" | "junior" | "mid" | "senior";
type ContractTypes = "uz" | "uop" | "b2b";
type WorkModes = "remote" | "hybrid" | "stationary";
type WorkSchedules = "full-time" | "half-time" | "part-time";

export interface JobOffer {
  id: string; //groupId
  positionName: string; // jobTitle
  company: {
    logoUrl: string | null; //companyLogoUr
    name: string;
  };
  positionLevel: PositionLevels;
  contractType: string[]; // ContractTypes[]; //typeOfContract
  workModes: string[]; // WorkModes[]; //workModes
  workSchedules: string[]; //WorkSchedules[]; //workModes
  technologies: string[]; //technologies
  description: string; //jobDescription
  createdAt: string; //lastPublicated
  expirationDate: string; //expirationDate
  offerUrls: string[]; //offers.offerAbsoluteUri
  workplace: string[]; //offers.displayWorkplace
}

export interface JobQueryParams {
  search?: string;
  categories?: string[];
}
