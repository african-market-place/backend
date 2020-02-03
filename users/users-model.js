const db = require("../database/dbConfig.js");

module.exports = {
  insert,
  getBy,
  getById
};

async function insert(user) {
  const [id] = await db("users").insert(user, "id");

  return getById(id);
}

function getById(id) {
  return db("users")
    .where({ id })
    .first();
}

function getBy(filter) {
  return db("users").where(filter);
}
