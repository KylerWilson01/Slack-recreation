module.exports = function (io) {
  io.on("connection", function (socket) {
    console.log("connected")

    socket.on("message", msg => {
      console.log("new message")
      io.emit("message", msg)
    })
  })
}