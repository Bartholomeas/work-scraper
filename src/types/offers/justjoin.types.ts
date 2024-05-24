export interface JobOfferJustjoin {
  technologies: string[];
  aboutProjectShortDescription: string;
  groupId: string;
  jobTitle: string;
  companyName: string;
  companyProfileAbsoluteUri: string;
  companyId: number;
  companyLogoUri: string | null;
  lastPublicated: string;
  expirationDate: string;
  salaryDisplayText: string;
  jobDescription: string;
  isSuperOffer: boolean;
  isFranchise: boolean;
  isOptionalCv: boolean;
  isOneClickApply: boolean;
  isJobiconCompany: boolean;
  offers: OfferJustjoin[];
  positionLevels: string[];
  typesOfContract: string[];
  workSchedules: string[];
  workModes: string[];
  primaryAttributes: PrimaryAttributeJustjoin[];
  commonOfferId: string | null;
  searchEngineRelevancyScore: number;
  mobileBannerUri: string | null;
  desktopBannerUri: string | null;
  appliedProducts: unknown[];
}

interface OfferJustjoin {
  partitionId: number;
  offerAbsoluteUri: string;
  displayWorkplace: string;
  isWholePoland: boolean;
  appliedProducts: unknown[];
}

interface PrimaryAttributeJustjoin {
  code: string;
  label: LabelJustjoin;
  model: ModelJustjoin;
}

interface LabelJustjoin {
  text: string;
  pracujPlText: string;
  primaryTargetSiteText: string;
}

interface ModelJustjoin {
  modelType: string;
  flag: boolean;
}
