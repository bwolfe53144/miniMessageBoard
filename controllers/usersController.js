const db = require("../db/queries");

//done
async function getMessages(req, res) {
  const  messages  = await db.getAllUsernames();
  res.render('index', {messages: messages});
};

//done
async function createUsernameGet(req, res) {
  res.render("messages/new")
};

async function createUsernamePost(req, res) {
  const date = new Date().toLocaleString();
  console.log(date);
  await db.insertMessage(req.body, date);
  res.redirect("/");
};

//done
async function viewMessage(req, res) {
  paramInt = parseInt(req.params.id) + 1;
  const message = await db.getUser(paramInt);
 res.render('seeMessage', {user: message[0]})
};

//done
async function getError(req, res) {
  res.sendFile('public/404.html', { root: '.' })
  };

module.exports = {
  getMessages,
  createUsernameGet,
  createUsernamePost,
  viewMessage,
  getError,
};