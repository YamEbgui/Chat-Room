const { Users } = require("../models/user");
const { Messages } = require("../models/messages");
const express = require("express");
const { EventEmitter } = require("events");

const emitter = new EventEmitter();

exports.fetchData = async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    // Connection: "keep-alive",
  });

  const returnUsers = async () => {
    const users = await Users.find({});
    console.log(users);
    res.write(`data:${JSON.stringify({ users })}\n\n`);
  };

  const { username } = req.query;

  emitter.addListener("message", async function () {
    const messages = await Messages.find({});
    console.log(messages);
    res.write(`data:${JSON.stringify({ messages })}\n\n`);
  });

  emitter.addListener("logout", returnUsers);

  emitter.addListener("login", returnUsers);

  emitter.emit("message");
  emitter.emit("login");

  req.on("close", async function () {
    await Users.deleteOne({ username });
    emitter.emit("logout");
  });
};

exports.refreshForMessage = () => {
  emitter.emit("message");
};
