const mongoose = require("mongoose");

const chatMessageSchema = mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const messageModal = mongoose.model("Message", chatMessageSchema);

module.exports = messageModal;
