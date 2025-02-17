require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  host: 'postgres.railway.internal',
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});