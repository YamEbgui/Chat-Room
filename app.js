const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const messageRouter = require("./routes/messages");
const fetchRouter = require("./routes/fetch");
const app = express();
const users = [];
const messages = [];

app.use(cors());
app.use(express.json());

app.use("/fetch", fetchRouter);

app.use("/user", userRouter);

app.use("/message", messageRouter);

app.post("/login", (req, res) => {
  const newUser = req.headers.username;
  if (newUser) {
    users.push(newUser);
    res.status(200).send("Login succeed");
  }
});

module.exports = app;
