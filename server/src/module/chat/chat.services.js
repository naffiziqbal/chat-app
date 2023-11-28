const chatModel = require("./chat.schema");

const createChatToDb = () => {};

async function getUserChatsFromDb(userId) {
  const result = await chatModel.find({
    members: { $in: [userId] },
  });
  return result;
}

module.exports = { getUserChatsFromDb };
