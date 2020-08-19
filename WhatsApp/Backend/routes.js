const express = require("express")
const routes = express.Router()

const RegisterController = require("./src/Controller/RegisterController.js")
const Messages = require("./src/Controller/Messages.js")

//UserCreate
routes.post("/register",RegisterController.store)
routes.post("/registerName",RegisterController.update)
routes.get("/users",RegisterController.index)

//ChatCreate
routes.post("/chatCreate",Messages.Create)
routes.post("/SendMessage",Messages.SendMessage)
routes.get("/MessageIndex",Messages.index)
routes.get("/chatsAlready",Messages.alreadyChats)


module.exports = routes