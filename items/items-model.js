const knex = require("knex");
const db = knex(require("../knexfile").development);

function getProducts() {
  return db("products");
}

function addProducts(products) {
  return db("products").insert(products, "id");
}

function getProductsById(id) {
  return db("products")
    .where({ id })
    .first();
}

function updateProducts(id, changes) {
  return db("products")
    .where({ id })
    .update(changes);
}

function deleteProduct(id) {
  return db("products")
    .where({ id })
    .del();
}

module.exports = {
  getProducts,
  addProducts,
  getProductsById,
  updateProducts,
  deleteProduct
};
