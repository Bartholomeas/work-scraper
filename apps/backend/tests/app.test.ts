import request from "supertest";
import { BASE_URL } from "apps/backend/src/misc/constants";
import { app } from "apps/backend/src/app";

describe("app instance tests", () => {
  it("should respond 404 for unknown route", async () => {
    const res = await request(app).get(`${BASE_URL}/unknown`).expect(404);
  });
  it("should respond with status 200 from existing route", async () => {
    const res = await request(app).get(`${BASE_URL}/offers`);
    return expect(res.status).toBe(200);
  });
});
