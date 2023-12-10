const io = require("socket.io")(8080, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let activeChat = [];

io.on("connection", (socket) => {
  // Add User to Socket
  socket.on("add-users", (newUserId) => {
    if (!activeChat.some((user) => user.userId === newUserId)) {
      activeChat.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    // console.log(activeChat);
    io.emit("get-users", activeChat);
  });
  socket.on("disconnect", () => {
    activeChat = activeChat?.filter((user) => user.id !== socket.id);
    // console.log("User Disconnected", activeChat);
    io.emit("get-users", activeChat);
  });
});
// console.log(activeChat);
