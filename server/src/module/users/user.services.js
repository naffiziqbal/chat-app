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

async function getUserFromDb(id) {
  console.log(id);
  try {
    const result = await User.findById(id);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

// ? Get All Users From DB
async function getUsersFromDb() {
  const result = await User.find({});
  return result;
}

async function updateAll() {
  try {
    const result = await User.updateMany(
      {},
      { $set: { profileImage: "https://i.ibb.co/Rp68NXw/download-5.jpg" } }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createUserToDb, getUserFromDb, getUsersFromDb,updateAll
 };
