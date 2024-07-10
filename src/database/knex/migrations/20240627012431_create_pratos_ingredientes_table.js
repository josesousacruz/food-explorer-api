const knex = require("knex");

// migrations/[timestamp]_create_pratos_ingredientes_table.js
exports.up = knex => knex.schema.createTable("pratos_ingredientes", table => {
    table.increments("id");
    table.integer('prato_id').unsigned().notNullable();
    table.integer('ingrediente_id').unsigned().notNullable();
    table.foreign('prato_id').references('id').inTable('pratos').onDelete('CASCADE');
    table.enu('categoria', ['Tradicional', 'Vegetariano', 'Vegano', 'Sobremesa', 'Bebida'])
    table.foreign('ingrediente_id').references('id').inTable('ingredientes').onDelete('CASCADE');

})
exports.down = function (knex) {
    return knex.schema.dropTable("pratos_ingredientes");
};
