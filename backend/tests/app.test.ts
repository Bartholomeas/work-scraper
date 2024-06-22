import request from "supertest";
import { app } from "@/app";
import { BASE_URL } from "@/misc/constants";

describe("app instance tests", () => {
  it("should respond 404 for unknown route", async () => {
    const res = await request(app).get(`${BASE_URL}/unknown`).expect(404);
    expect(res.status).toBe(404);
  });
  it("should respond with status 200 from existing route", async () => {
    const res = await request(app).get(`${BASE_URL}/offers`);
    return expect(res.status).toBe(200);
  });
});
