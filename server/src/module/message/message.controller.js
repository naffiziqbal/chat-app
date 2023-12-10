const MessageModal = require("../message/message.schema");

async function addMessage(req, res) {
  const { chatId, senderId, text } = req.body;
  const message = new MessageModal({
    chatId,
    senderId,
    text,
  });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (err) {
    //console.log(err);
  }
}

async function getMessages(req, res) {
  const { chatId } = req.params;
  console.log(chatId);

  try {
    const result = await MessageModal.find({ chatId });
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    //console.log(err);
  }
}
async function deleteMessage(req, res) {
  try {
    const result = await MessageModal.deleteMany({ chatId });
    res.status(200).json(result);
  } catch (err) {
    //console.log(err);
  }
}

module.exports = { addMessage, getMessages, deleteMessage };
