const server = require('./api/server.js');
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
//const session = require("express-session")
const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router")
const cookieParser = require("cookie-parser")
// const server = express()
// const port = process.env.PORT || 7000

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(cookieParser())

server.use("/auth", authRouter)
server.use("/users", usersRouter)

server.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
