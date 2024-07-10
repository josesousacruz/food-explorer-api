const knex = require("knex");
const { table } = require("..");

exports.up = knex => knex.schema.createTable("pratos", table => {
table.increments("id");
table.text('titulo');
table.text('descricao');
table.decimal('valor',10,2);
table.text('urlImg');

table.timestamp("created_at").default(knex.fn.now());
table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("pratos")
