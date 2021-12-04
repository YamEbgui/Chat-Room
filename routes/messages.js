const { Messages } = require("../models/messages");
const express = require("express");
const messageRouter = express.Router();
const { refreshForMessage } = require("../controllers/fetchData");

messageRouter.post("/", (req, res) => {
  const newMessage = req.body;
  Messages.insertMany([newMessage]).then(() => {
    refreshForMessage(); //emit for "message" event
    res.status(200).send("Message sent");
  });
});

messageRouter.get("/", (req, res) => {
  Messages.find({}).then((result) => {
    res.status(200).send(result);
  });
});

module.exports = messageRouter;
