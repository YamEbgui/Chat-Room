const { Users } = require("../models/user");
const { Messages } = require("../models/messages");
const { fetchData } = require("../controllers/fetchData");
const express = require("express");
const fetchRouter = express.Router();

fetchRouter.get("/", fetchData);

module.exports = fetchRouter;
