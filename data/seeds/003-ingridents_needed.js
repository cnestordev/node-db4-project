
exports.seed = function (knex) {
  return knex('ingredients_needed').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1, unit: 'ounce' },
    { recipe_id: 2, ingredient_id: 2, quantity: 1, unit: 'cup' }
  ]);
};
