const User = require("./user.schema");

async function createUserToDb(user) {
  const result = await User.create(user);
  return result
}

module.exports = { createUserToDb };
