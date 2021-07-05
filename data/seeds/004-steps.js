
exports.seed = function (knex) {
  return knex('steps').insert([
    { recipe_id: 1, step_number: 1, step_instruction: "mix flour" },
    { recipe_id: 1, step_number: 2, step_instruction: "add sugar" }
  ]);
};
