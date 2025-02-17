const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  date TIMESTAMP
);

INSERT INTO messages (username, text, date)
VALUES
    ('Alice', 'I like the Odin Project', NOW()),
    ('Charlie', 'Hope you are having a great day!', NOW())
;
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://postgres:********@tramway.proxy.rlwy.net:54203/railway

`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();