const pool = require("./pool");

//done
async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(data, formattedDate) {
  pool.query("INSERT INTO messages (username, text, date) VALUES ($1, $2, $3)", [data.messageUser, data.messageText, formattedDate]);
}

async function getUser(userId) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id=${userId}`);
  return rows;
}

module.exports = {
  getAllUsernames,
  insertMessage,
  getUser,
};
