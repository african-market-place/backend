exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Babatunde", password: "1234" },
        { username: "David", password: "1234" },
        { username: "Yusuf", password: "1234" }
      ]);
    });
};
