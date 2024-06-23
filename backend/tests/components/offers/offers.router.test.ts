import request from "supertest";
import { app } from "@/app";
import { BASE_URL } from "@/misc/constants";
import type { JobOffersResponse } from "@shared/offers/offers.types";
import { paginationMetadataSchema } from "@shared/general/query.schemas";
import { jobOfferSchema } from "@shared/offers/offers.schemas";

describe("GET offers/metadata", () => {
  let response: JobOffersResponse | undefined;

  beforeAll(async () => {
    response = await request(app)
      .get(`${BASE_URL}/offers`)
      .expect(200)
      .then(res => res?.body)
      .catch(() => undefined);
  });
  it("should return correct response from /offers", () => {
    expect(response).toBeDefined();
    expect(response?.meta).toBeDefined();
    expect(response?.data).toBeDefined();
  });

  it("should return meta property with correct data", () => {
    const { meta } = response ?? { meta: undefined, data: undefined };
    const isCorrectMetadata = paginationMetadataSchema.safeParse({
      ...meta,
      page: meta?.page.toString(),
      perPage: meta?.perPage.toString(),
    });

    expect(isCorrectMetadata.success).toBe(true);
    expect(meta?.page).toBe(1);
    expect(meta?.perPage).toBe(24);
    expect(meta?.total).toBeGreaterThanOrEqual(1);
    expect(meta?.totalPages).toBe(1);
    expect(meta?.hasPrevPage).toBe(false);
    expect(meta?.hasNextPage).toBe(false);
  });
  it("should return array of offers", () => {
    expect(response?.data).toBeDefined();
    expect(response?.data).toBeInstanceOf(Array);
  });
  it("should return offers with matching properties", () => {
    const { data } = response ?? { data: undefined };

    const firstOffer = data?.[0];
    expect(firstOffer).toHaveProperty("id");
    expect(firstOffer).toHaveProperty("slug");
    expect(firstOffer).toHaveProperty("positionName");
  });
  it("should check that offers are matching schema", () => {
    const { data } = response ?? { data: undefined };
    const firstOffer = data?.[0];

    const jobOfferProperties = Object.keys(jobOfferSchema.shape);
    jobOfferProperties.forEach(prop => expect(firstOffer).toHaveProperty(prop));
  });
});
