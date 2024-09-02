import { type NewsResponse } from "shared/src/news/news.types";

const mockNews: NewsResponse = [
  {
    id: "08944e5c-320a-4a80-9938-945ee8986b1b",
    title: "Usunięcie jednego z serwisów z bazy danych",
    shortDescription:
      "Niestety, z powodu niechęci jednego serwisu z ogłoszeniami pracy do współpracy, byliśmy zmuszeni wyłączyć go z naszej aplikacji.",
    date: "2023-06-26T10:30:00Z",
  },
] as const;

class NewsService {
  constructor() {}

  public async getAll(): Promise<NewsResponse> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockNews);
      }, 500);
    });
  }
}

export { NewsService };
