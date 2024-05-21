export interface JobOfferPracuj {
  technologies: string[];
  aboutProjectShortDescription: string;
  groupId: string;
  jobTitle: string;
  companyName: string;
  companyProfileAbsoluteUri: string;
  companyId: number;
  companyLogoUri: string | null;
  lastPublicated: string; // Można użyć Date, jeśli JSON jest parsowany
  expirationDate: string; // Można użyć Date, jeśli JSON jest parsowany
  salaryDisplayText: string;
  jobDescription: string;
  isSuperOffer: boolean;
  isFranchise: boolean;
  isOptionalCv: boolean;
  isOneClickApply: boolean;
  isJobiconCompany: boolean;
  offers: OfferPracuj[];
  positionLevels: string[];
  typesOfContract: string[];
  workSchedules: string[];
  workModes: string[];
  primaryAttributes: PrimaryAttributePracuj[];
  commonOfferId: string | null;
  searchEngineRelevancyScore: number;
  mobileBannerUri: string | null;
  desktopBannerUri: string | null;
  appliedProducts: unknown[];
}

interface OfferPracuj {
  partitionId: number;
  offerAbsoluteUri: string;
  displayWorkplace: string;
  isWholePoland: boolean;
  appliedProducts: unknown[];
}

interface PrimaryAttributePracuj {
  code: string;
  label: LabelPracuj;
  model: ModelPracuj;
}

interface LabelPracuj {
  text: string;
  pracujPlText: string;
  primaryTargetSiteText: string;
}

interface ModelPracuj {
  modelType: string;
  flag: boolean;
}
