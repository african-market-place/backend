const request = require("supertest");

const server = require("../api/server");

describe("Server Test", () => {
  it("db environment test", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("up endpoint", () => {
    it("returns a 200 OK async/await", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("returns a 200 OK ES6 promises", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
