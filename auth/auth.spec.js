const db = require("../database/dbConfig");
const Users = require("../users/users-model");

beforeAll(async () => {
  await db("users").truncate();
});

describe("Users Model", () => {
  describe("insert()", () => {
    it("inserts the users without breaking them", async () => {
      const users = await Users.insert({
        username: "Babatunde",
        password: "1234"
      });
      expect(users).toMatchObject({ username: "Babatunde", password: "1234" });
    });
  });
});
