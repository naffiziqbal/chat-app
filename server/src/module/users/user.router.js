const Router = require("express");
const {
  getUsers,
  createUser,
  getUser,
  userLogin,
} = require("./user.controller");
const { updateAll } = require("./user.services");

const router = Router();

router.get("/all-users", getUsers);
router.post("/create-user", createUser);
router.get("/:id", getUser);
router.post("/login", userLogin);
router.get("/update", updateAll);

module.exports = router;
