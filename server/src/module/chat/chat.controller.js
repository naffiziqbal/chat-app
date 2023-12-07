const ChatModel = require("./chat.schema");
const { getUserChatsFromDb } = require("./chat.services");

// ? Create New Chat
async function createChat(req, res) {
  //? Make New ChatModel Instance
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.reciverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    //console.log(err);
  }
}

async function getUserChats(req, res) {
  try {
    const { userId } = req.params;
    const userChat = await getUserChatsFromDb(userId);
    res.status(200).json({
      success: true,
      data: userChat,
    });
  } catch (error) {
    //console.log(error);
  }
}

async function findChat(req, res) {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    //console.log(error);
  }
}
module.exports = { createChat, getUserChats, findChat };
