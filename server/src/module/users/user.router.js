const Router = require("express");
const { getUsers, createUser, getUser } = require("./user.controller");

const router = Router();

router.get("/all-users", getUsers);
router.post("/create-user", createUser);
router.get("/get-user", getUser);

module.exports = router;
