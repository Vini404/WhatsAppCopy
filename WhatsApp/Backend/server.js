const express = require("express")
const app = express()
const Routes = require("./routes")
const mongoose = require('mongoose')

mongoose.connect("", {
    useNewUrlParser: true   
})

app.use(express.json())
app.use(Routes)

app.listen(100)