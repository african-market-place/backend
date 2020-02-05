exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          name: "Milk",
          description: "Fresh diary product",
          category: "Animal Products",
          price: 200,
          location: "Lagos",
          user_id: 1
        },
        {
          name: "Beef",
          description: "Healthy meat for consumption",
          category: "Animal Products",
          price: 30,
          location: "Accra",
          user_id: 1
        },
        {
          name: "Avocado",
          description: "Recently harvested from the farm",
          category: "Fruits",
          price: 10,
          location: "Dakar",
          user_id: 1
        },
        {
          name: "Sweet Potatoes",
          description: "Loaded with energy and carbohydrate",
          category: "Roots and Tubers",
          price: 25,
          location: "Pretoria",
          user_id: 1
        },
        {
          name: "White Irish Potatoes",
          description: "Sweet and delicious tuber",
          category: "Roots and Tubers",
          price: 70,
          location: "Nairobi",
          user_id: 1
        },
        {
          name: "Lettuce",
          description: "Best source of vitamins",
          category: "Vegetables",
          price: 32,
          location: "Algiers",
          user_id: 1
        },
        {
          name: "Ground Nuts",
          description: "Fresh and rich in vitamins",
          category: "Seeds and Nuts",
          price: 41,
          location: "Rabat",
          user_id: 1
        },
        {
          name: "Carrots",
          description: "Useful fruit",
          category: "Vegetables",
          price: 300,
          location: "Lagos",
          user_id: 1
        }
      ]);
    });
};
