require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  host: 'caboose.proxy.rlwy.net:10166',
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});