import { type NewsResponse } from "shared/src/news/news.types";

const mockNews: NewsResponse = [
  {
    id: "08944e5c-320a-4a80-9938-945ee8986b1b",
    title: "New Feature: Dark Mode",
    shortDescription: "Dark mode has been added to improve user experience in low-light environments.",
    date: "2023-05-15T10:30:00Z",
  },
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    title: "Bug Fix: Login Issues Resolved",
    shortDescription: "We've fixed a critical bug that was causing login problems for some users.",
    date: "2023-05-14T15:45:00Z",
  },
  {
    id: "7q8r9s0t-1u2v-3w4x-5y6z-7a8b9c0d1e2f",
    title: "Performance Improvement",
    shortDescription: "App loading time has been significantly reduced for a smoother experience.",
    date: "2023-05-13T08:20:00Z",
  },
  {
    id: "3g4h5i6j-7k8l-9m0n-1o2p-3q4r5s6t7u8v",
    title: "New Integration: Social Media Sharing",
    shortDescription: "Users can now easily share content directly to their favorite social media platforms.",
    date: "2023-05-12T14:10:00Z",
  },
  {
    id: "9w0x1y2z-3a4b-5c6d-7e8f-9g0h1i2j3k4l",
    title: "Security Update",
    shortDescription: "We've implemented additional security measures to protect user data.",
    date: "2023-05-11T11:55:00Z",
  },
  {
    id: "5m6n7o8p-9q0r-1s2t-3u4v-5w6x7y8z9a0b",
    title: "UI Refresh: New Color Scheme",
    shortDescription: "The app's interface has been updated with a fresh, modern color palette.",
    date: "2023-05-10T09:40:00Z",
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
