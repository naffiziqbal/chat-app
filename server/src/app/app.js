const express = require("express");
const cors = require("cors");
const router = require("../module/users/user.router");
const chatRouter = require("../module/chat/chat.route");
const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use("/api/v1/user", router);
app.use("/api/v1/chat", chatRouter);

module.exports = app;
