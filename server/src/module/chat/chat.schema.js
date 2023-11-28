const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const chatModel = mongoose.model("Chat", ChatSchema);

module.exports = chatModel;
