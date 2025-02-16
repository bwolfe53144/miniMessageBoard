const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.getMessages);
usersRouter.get("/messages/new", usersController.createUsernameGet);
usersRouter.post("/messages/new", usersController.createUsernamePost);
usersRouter.get("/messages/:id", usersController.viewMessage);
usersRouter.get("*", usersController.getError);

module.exports = usersRouter;