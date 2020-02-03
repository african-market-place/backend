
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Milk', description: 'Fresh diary product', category:'Animal Products', price:'200NGN', location: 'Lagos'},
        {name: 'Beef', description: 'Healthy meat for consumption', category:'Animal Products', price:'30 Cedis', location: 'Accra'},
        {name: 'Avocado', description: 'Recently harvested from the farm', category:'Fruits', price:'10 CFA Franc', location: 'Dakar'},
        {name: 'Sweet Potatoes', description: 'Loaded with energy and carbohydrate', category:'Roots and Tubers', price:'25 Rand', location: 'Pretoria'},
        {name: 'White Irish Potatoes', description: 'Sweet and delicious tuber', category:'Roots and Tubers', price:'70 Shilling', location: 'Nairobi'},
        {name: 'Lettuce', description: 'Best source of vitamins', category:'Vegetables', price:'32 Dinar', location: 'Algiers'},
        {name: 'Ground Nuts', description: 'Fresh and rich in vitamins', category:'Seeds and Nuts', price:'41 Dirham', location: 'Rabat'},
        {name: 'Carrots', description: 'Useful fruit', category:'Vegetables', price:'300NGN', location: 'Lagos'},
      ]);
    });
};
