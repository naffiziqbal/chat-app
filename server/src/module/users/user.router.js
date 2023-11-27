const Router = require("express");
const { getUsers, createUser } = require("./user.controller");

const router = Router();

router.get("/", getUsers);
router.post("/create-user", createUser);

module.exports = router;
