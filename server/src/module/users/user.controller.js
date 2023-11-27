const { User } = require("./user.schema");
const { createUserToDb } = require("./user.services");

function getUsers(req, res) {
  const user = "user is online";
  res.status(200).json({
    status: "Successful",
    data: user,
  });
  console.log(user);
}
async function createUser(req, res) {
  const user = req.body;
  const result = await createUserToDb(user);
  try {
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getUsers, createUser };
