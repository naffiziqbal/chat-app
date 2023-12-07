const io = require("socket.io")(8080, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let activeChat = [];

io.on("connection", (socket) => {
  // Add User to Socket
  socket.on("add-user", (newUserId) => {
    if (!activeChat.some((user) => user.userId === newUserId)) {
      activeChat.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }
    //console.log(newUserId);
    io.emit("get-users");
  });
});
