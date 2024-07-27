export const HEADER_HEIGHT = 64;
export const CURRENCY = "PLN";
export const DATE_FORMAT = "DD.MM.YYYY";
export const DATE_FORMAT_WITH_HOURS = `${DATE_FORMAT}, HH:mm`;

// API Urls

const API_URL = import.meta.env.VITE_API_URL;
export const OFFERS_URL = `${API_URL}/offers`;
export const STATISTICS_URL = `${API_URL}/statistics`;
export const STATISTICS_DAILY_URL = `${STATISTICS_URL}/daily`;

export const PAGE_NAME = "Scrappie";
