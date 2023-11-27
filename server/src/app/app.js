const express = require("express");
const cors = require("cors");
const router = require("../module/users/user.router");
const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use('/api/v1/user',router)

module.exports = app;
