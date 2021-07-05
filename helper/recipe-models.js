const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('ingrdients_needed')
        .select('ingredients.ingredients.name', 'ingredients_needed.quantity', 'ingredients_needed.unit')
        .join('ingredients', 'ingredients_needed.ingredient_id', 'ingredients.id')
        .where('ingredients_needed.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('steps')
        .select('step_number', 'step_instruction')
        .where('steps.recipe_id', recipe_id)
}