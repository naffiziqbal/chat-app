const express = require("express");
const cors = require("cors");
const router = require("../module/users/user.router");
const chatRouter = require("../module/chat/chat.route");
const messageRouter = require("../module/message/message.route");
const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use("/api/v1/user", router);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/message", messageRouter);

module.exports = app;
