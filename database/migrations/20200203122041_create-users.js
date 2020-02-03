exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
    })
    .createTable("products", products => {
      products.increments();
      products.text("name");
      products.text("description");
      products.text("category");
      products.float("price");
      products.text("location");
      products
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
    });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("products");
};
