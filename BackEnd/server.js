const express = require("express")
const app = express()
const Routes = require("./routes")
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://vinicius404:9731064m@cluster0.vssl2.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true   
})

app.use(express.json())
app.use(Routes)

app.listen(100)