const mongoose = require("mongoose");

const ChatMessageSchema = mongoose.Schema(
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
    timestamps: true,
  }
);

const MessageModal = mongoose.model("Message", ChatMessageSchema);

module.exports = MessageModal;
