const { User } = require("./user.schema");
const {
  createUserToDb,
  getUserFromDb,
  getUsersFromDb,
} = require("./user.services");
const bcrypt = require("bcryptjs");

// ? Create User
async function createUser(req, res) {
  const user = req.body;
  try {
    const data = await getUserFromDb(user.email);
    if (data) {
      return res.status(403).json({ error: "User Already Exists" });
    }
    const result = await createUserToDb(user);

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
  const result = await getUsersFromDb();
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
  const { id } = req.params;
  console.log(id);
  const result = await getUserFromDb(id);
  try {
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
}

async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    console.log(email, password, "db");
    const data = await getUserFromDb(email);
    console.log(data, "returned data");
    if (!data) {
      console.log("No Data");
      return res.status(401).json({ error: "No Data" });
    }
    const matchedPassword = await bcrypt.compare(password, data.password);
    if (!matchedPassword) {
      return res.status(401).json({ error: "Invalid Creadintials" });
    }
    res.status(200).json({
      message: "Logged In",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getUsers, createUser, getUser, userLogin };
