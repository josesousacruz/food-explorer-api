// migrations/[timestamp]_create_users_table.js
exports.up = function(knex) {
    return knex.schema.withSchema('foodExplore').createTable('users', table => {
      table.increments('id'); // ID auto-incrementado
      table.string('nome', 255).notNullable(); // Nome do usuário
      table.string('email', 255).notNullable().unique(); // Email do usuário, deve ser único
      table.string('senha', 255).notNullable(); // Senha do usuário
      table.timestamp('data_de_criacao').defaultTo(knex.fn.now()); // Data de criação do registro
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.withSchema('foodExplore').dropTable('users'); // Dropa a tabela se a migração for revertida
  };
  