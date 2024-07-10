// migrations/[timestamp]_create_ingredientes_table.js
exports.up = knex => knex.schema.createTable("ingredientes", table => {
    table.increments("id");
    table.string('nome', 255)
})
exports.down = function (knex) {
    return knex.schema.dropTable("ingredientes");
};
