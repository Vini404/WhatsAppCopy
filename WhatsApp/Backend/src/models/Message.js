
const { Schema, model } = require('mongoose')


const Message = new Schema({
    FirstUser:{
        required:true,
        type:String,
    },
    SecondUser:{
        required:true,
        type:String
    },
    Message:{
        type:Object
    },
    LastMessage:{
        type:String
    },
    
    }
)

module.exports= model("Message",Message)