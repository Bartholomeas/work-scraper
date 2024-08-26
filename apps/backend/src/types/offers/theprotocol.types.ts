type WorkModes = "remote" | "hybrid" | "full office";
interface Workplace {
  location: string;
  city: string;
  region: string;
}

interface PositionLevel {
  value: "trainee" | "assistant" | "junior" | "mid" | "senior" | "expert" | "lead" | "manager" | "head";
}

interface Salary {
  from: number;
  to: number;
  currencySymbol: "zł" | "usd";
  timeUnitId: number;
  timeUnit: {
    shortForm: "mth." | "hr." | "godz." | "mies.";
    longForm: "monthly" | "hourly" | "godzinowo" | "miesięcznie";
  };
  kindName: "net (+ VAT)" | "netto (+ VAT)" | "gross" | "brutto";
}

interface ContractType {
  id: number;
  salary: Salary | null;
}

interface Addons {
  searchableLocations: unknown[];
  searchableRegions: unknown[];
  isWholePoland: boolean;
}

export interface JobOfferTheProtocol {
  id: string;
  groupId: string;
  title: string;
  employer: string;
  employerId: string;
  logoUrl: string;
  offerUrlName: string;
  aboutProject: string[];
  workplace: Workplace[];
  positionLevels: PositionLevel[];
  typesOfContracts: ContractType[];
  technologies: string[];
  new: boolean;
  publicationDateUtc: string;
  lastCall: boolean;
  language: string;
  salary: null;
  workModes: WorkModes[];
  immediateEmployment: boolean;
  isSupportingUkraine: boolean;
  addons: Addons;
  isFromExternalLocations: boolean;
}
