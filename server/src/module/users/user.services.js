const User = require("./user.schema");

// ? Create User To DB
async function createUserToDb(user) {
  try {
    const result = await User.create(user);
    return result;
  } catch (error) {
    return error;
  }
}

// ? Get Signle User From Db

async function getUserFromDb(email) {
  try {
    const result = await User.find({ email: email });
    return result[0];
  } catch (err) {
    console.log(err);
  }
}

// ? Get All Users From DB
async function getUsersFromDb() {
  const result = await User.find({});
  return result;
}

module.exports = { createUserToDb, getUserFromDb, getUsersFromDb };
