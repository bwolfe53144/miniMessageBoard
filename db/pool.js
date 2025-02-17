require("dotenv").config();
const { Pool } = require("pg");

const connectionString =
  "postgresql://postgres:ofdzHDfGpEKRdCbQuFrCOvSyZcEYuLde@tramway.proxy.rlwy.net:54203/railway";

  const pool = new Pool({
    connectionString,
  });
  
  module.exports = pool;