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
    timestamps: true,
  }
);

const messageModal = mongoose.model("Message", chatMessageSchema);

module.exports = messageModal;
