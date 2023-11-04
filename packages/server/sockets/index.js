import socket from "socket.io";
import { handleAddUser, handleSendMessage } from "./socketHandlers.js";

function socketConnection(server) {
  const io = socket(server, {
    cors: {
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    },
  });

  global.onlineUsers = new Map();
  global.chatSocket = null;

  io.on("connection", (socket) => {
    global.chatSocket = socket;

    // Register event handlers from the imported module
    socket.on("add-user", (userId) => handleAddUser(socket, userId));
    socket.on("send-msg", (data) => handleSendMessage(socket, data));

    // Add more event handlers here as needed
  });
}

export { socketConnection };
