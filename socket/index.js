const io = require("socket.io")(8000, {
  cors: {
    origin: "*",
  },
});

let activeChat = [];

io.on("connection", (socket) => {
  // Add User to Socket
  socket.on("add-users", (newUserId) => {
    if (!activeChat.some((user) => user?.userId === newUserId)) {
      activeChat.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    // console.log(activeChat, " Active CHat");
    io.emit("get-users", activeChat);
  });

  // *** Send Message
  socket.on("send-message", (data) => {
    const { recieverId } = data;

    console.log(recieverId, "recieved Id");
    console.log(data.recieverId);

    const user = activeChat?.find((data) => data?.userId === recieverId);

    console.log(user, " usr");

    if (user) {
      io.to(user?.socketId).emit("recieve-message", data);
    }
  });

  socket.on("disconnect", () => {
    activeChat = activeChat?.filter((user) => user.id !== socket.id);
    // console.log("User Disconnected", activeChat);
    io.emit("get-users", activeChat);
  });
});
