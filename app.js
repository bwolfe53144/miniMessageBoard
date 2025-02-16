const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(express.urlencoded( { extended: true}))
app.use(express.json())
const userRouter = require("./routes/usersRouter")
app.use("/", userRouter)

app.listen(3000); 