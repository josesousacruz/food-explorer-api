const path = require("path")
require('dotenv').config();
// knexfile.js
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    }
  }
};
