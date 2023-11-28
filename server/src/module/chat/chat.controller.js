const chatModel = require("./chat.schema");


async function createChat(req, res) {
  const newChat = new chatModel({
    members: [req.body.senderId, req.body.reciverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
}

module.exports = createChat ;
