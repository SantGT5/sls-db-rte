const request = require("supertest")

describe("first", () => {
  test("should first", (done) => {
    request("http://localhost:3000")
      .get("/")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404)
      .expect(({ body }) => {
        const { ok, error } = body
        expect(ok).toBeFalsy()
        expect(error).toBe("Not Found")
      })
      .end(done)
  })
})
