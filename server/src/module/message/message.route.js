const express = require("express");
const {
  addMessage,
  getMessages,
  deleteMessage,
} = require("./message.controller");

const messageRouter = express.Router();

messageRouter.post("/", addMessage);
messageRouter.post("/delete", deleteMessage);
messageRouter.get("/:chatId", getMessages);

module.exports = messageRouter;
