const Router = require("express");
const {
  getUsers,
  createUser,
  getUser,
  userLogin,
} = require("./user.controller");

const router = Router();

router.get("/all-users", getUsers);
router.post("/create-user", createUser);
router.get("/:id", getUser);
router.post("/login", userLogin);

module.exports = router;
