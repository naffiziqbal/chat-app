const express = require("express");
const { createChat, getUserChats, findChat } = require("./chat.controller");

const chatRouter = express.Router();

chatRouter.post("/", createChat);
chatRouter.get("/:userId", getUserChats);
chatRouter.get("/:firstId/:secondId", findChat);

module.exports = chatRouter;
