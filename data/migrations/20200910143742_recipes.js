
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments()
        tbl.text('recipe_name').unique().notNullable()
    })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.text('ingredient_name').notNullable().unique()
        })
        .createTable('steps', tbl => {
            tbl.increments()
            tbl.integer('step_number').notNullable().unique()
            tbl.string('step_instruction').notNullable()
            tbl.integer('recipe_id').references('id').inTable('recipes').unsigned().notNullable()
        })
        .createTable('ingredients_needed', tbl => {
            tbl.increments()
            tbl.integer('recipe_id').references('id').inTable('recipes').unique().notNullable()
            tbl.float('quantity').notNullable()
            tbl.string('unit').notNullable()
            tbl.integer('ingredient_id').references('id').inTable('ingredients').unique().notNullable().unsigned()
        })
};

exports.down = function (knex) {
    knex.schema
        .dropTableIfExists('ingredients_needed')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
