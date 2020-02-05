exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products").then(function() {
    // Inserts seed entries
    return knex("products").insert([
      {
        name: "eggs",
        description: "seed testing data",
        price: 3,
        location: "Sauti",
        category: "Animal Products",
        user_id: 2
      },
      {
        name: "Beef",
        description: "Healthy meat for consumption",
        price: 30,
        location: "Accra",
        category: "Animal Products",
        user_id: 3
      },
      {
        name: "Beef",
        description: "Healthy meat for consumption",
        price: 30,
        location: "Accra",
        category: "Animal Products",
        user_id: 1
      }
    ]);
  });
};
