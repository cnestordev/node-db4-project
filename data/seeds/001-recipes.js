
exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: "cake" },
    { recipe_name: "ice cream" }
  ]);
};
