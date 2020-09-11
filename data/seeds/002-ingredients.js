
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'Flour' },
    { ingredient_name: 'Sugar' }
  ]);
};
