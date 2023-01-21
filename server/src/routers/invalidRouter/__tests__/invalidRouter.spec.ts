const request = require("supertest")
import { describe, it, expect } from "vitest"

const BASE_URL = "https://jsm3vu1p49.execute-api.eu-west-1.amazonaws.com"

describe("invalidRouter", () => {
  it("should response with code 404", async () => {
    try {
      const { statusCode, body } = await request(BASE_URL).get("/")
      const { ok, error } = body

      expect(statusCode).toBe(404)
      expect(ok).toBeFalsy()
      expect(error).toBe("Not Found")
    } catch (err) {
      throw new Error(err)
    }
  })
})
