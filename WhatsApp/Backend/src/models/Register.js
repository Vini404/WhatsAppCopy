const { Schema, model } = require('mongoose')

const Register = new Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String
    }
})

module.exports = model("Register",Register)
