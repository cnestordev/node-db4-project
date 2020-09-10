
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments()
        tbl.text('recipe_name').unique().notNullable()
    })
        .createTable('steps', tbl => {
            tbl.increments()
            tbl.integer('recipe_id').references('id').inTable('recipes').unsigned().notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.text('ingredient_name').notNullable().unique()
        })
        .createTable('ingredients_needed', tbl => {
            tbl.integer('recipe_id').references('id').inTable('recipes').unique().notNullable()
            tbl.integer('ingredient_id').references('id').inTable('ingredients').unique().notNullable()
        })
};

exports.down = function (knex) {
    knex.schema
        .dropTableifExists('ingredients_needed')
        .dropTableifExists('ingredients')
        .dropTableifExists('steps')
        .dropTableifExists('recipes')
};
