const request = require("supertest")

describe("invalidRouter", () => {
  test("invalidRouter response with code 404", async () => {
    const { statusCode, body } = await request("http://localhost:3000").get("/")

    const { ok, error } = body

    expect(statusCode).toBe(404)
    expect(ok).toBeFalsy()
    expect(error).toBe("Not Found")
  })
})
