import request from "supertest";
import { app } from "@/app";
import { BASE_URL } from "@/misc/constants";

describe("GET offers/metadata", () => {
  it("should return correct  when offers exists in db", async () => {
    console.log("DB URL", process.env.DATABASE_URL, process.env.NODE_ENV);
    const res = await request(app).get(`${BASE_URL}/offers`).expect(200);
    expect(res.body).toBeDefined();
  });
});
