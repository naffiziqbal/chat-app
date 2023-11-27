const { User } = require("./user.schema");
const {
  createUserToDb,
  getUserFromDb,
  getUsersFromDb,
} = require("./user.services");

// ? Create User
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
// ? Get All Users
async function getUsers(req, res) {
  const result =await getUsersFromDb();
  try {
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
}

// ? Get Single User
async function getUser(req, res) {
  const { email } = req.body;
  const result = await getUserFromDb(email);
  try {
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getUsers, createUser, getUser };
