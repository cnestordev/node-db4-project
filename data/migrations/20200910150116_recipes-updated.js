
exports.up = function (knex) {
    return knex.schema.table('ingredients_needed', tbl => {
        tbl.integer('quantity').unsigned()
    })
};

exports.down = function (knex) {
    return knex.schema.table('ingredients_needed', tbl => {
        tbl.dropTableIfExists('quantity')
    })
};
