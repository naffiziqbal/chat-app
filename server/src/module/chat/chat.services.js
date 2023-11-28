const ChatModel = require("./chat.schema");

const createChatToDb = () => {};

async function getUserChatsFromDb(userId) {
  const result = await ChatModel.find({
    members: { $in: [userId] },
  });
  return result;
}

module.exports = { getUserChatsFromDb };
