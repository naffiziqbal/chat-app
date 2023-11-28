const express = require("express");
const createChat = require("../chat/chat.controller");

const chatRouter = express.Router();

chatRouter.post("/", createChat);

module.exports = chatRouter;
