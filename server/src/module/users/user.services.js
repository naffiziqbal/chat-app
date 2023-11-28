const User = require("./user.schema");

// ? Create User To DB
async function createUserToDb(user) {
  const result = await User.create(user);
  return result;
}

// ? Get Signle User From Db

async function getUserFromDb(email) {
  const result = await User.find({ email: email });
  console.log(result, "DB");
  return result;
}

// ? Get All Users From DB
async function getUsersFromDb() {
  const result = await User.find({});
  return result;
}

module.exports = { createUserToDb, getUserFromDb, getUsersFromDb };
