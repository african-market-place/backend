
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:"Dimos", password: '12345'},
        {username: "Rufai", password: '12345'},
        {username: "Babatunde", password: '12345'}
      ]);
    });
};
