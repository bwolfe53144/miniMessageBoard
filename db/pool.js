require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  host: '127.0.0.1',
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});