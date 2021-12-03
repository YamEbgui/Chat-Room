const { Users } = require("../models/user");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  const username = req.body.username;
  Users.find({ username: `${username}` }).then((result) => {
    if (result.length > 0) res.status(403).send("Username already exist");
    else {
      Users.insertMany({ username: `${username}` }).then(() => {
        res.status(200).send("User logged In");
      });
    }
  });
});

userRouter.delete("/logout", async (req, res) => {
  const username = req.body.username;
  Users.find({ username: `${username}` }).then((result) => {
    console.log(result);
    if (result.length === 0) res.status(403).send("Username doesn't exist");
    else {
      Users.deleteOne({ username: `${username}` }).then(() => {
        res.status(200).send("User logged out");
      });
    }
  });
});

module.exports = userRouter;
