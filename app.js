const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const app = express();
const users = [];
const messages = [];

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.post("/login", (req, res) => {
  const newUser = req.headers.username;
  if (newUser) {
    users.push(newUser);
    res.status(200).send("Login succeed");
  }
});

module.exports = app;
