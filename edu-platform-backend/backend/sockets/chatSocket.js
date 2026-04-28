module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinClass", (classId) => {
      socket.join(classId);
    });

    socket.on("sendMessage", (data) => {
      io.to(data.classId).emit("receiveMessage", data);
    });
  });
};