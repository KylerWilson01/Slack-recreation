const express = require("express")
const app = express()

const expressjwt = require('express-jwt')
const config = require('config')

const server = require('http').Server(app)
const io = require('socket.io')(server)
const ioserver = require('./io')

const userRoutes = require("./routes/user")
const protectedRoutes = require('./routes/protected')

const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", userRoutes)
app.use('/api', expressjwt({ secret: config.get('secret') }), protectedRoutes)

app.use((err, req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err
  })
})

ioserver(io)

server.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
