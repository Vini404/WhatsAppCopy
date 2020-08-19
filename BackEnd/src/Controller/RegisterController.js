const Register = require('../models/Register.js')
const { create, update } = require('../models/Register.js')
const SendEmail = require("../service/SendEmail")
const { index } = require('./Messages.js')
const SendCode = SendEmail.SendCode
module.exports={
   

   async store(request,response){


    const { email } = request.body



    const emailExist = await Register.findOne({ email:email })

  

    if(emailExist){
        return response.status(500).send("User already exist")
    }

    
    const user = await Register.create({
        email,
    
    })

    const code = await SendCode(email)

            const data = {
                user,
                code
             }
             
            return response.json(data)

   },
   
   async update(request,response){
       const {name,email} = request.body
       console.log(request.body)
       
    console.log(name,email)
       

       const newName = await Register.updateOne({email:email},{name})

     if(!newName){
            return response.status(400).send("Invalid name")
       }
      
       return response.sendStatus(200)

   },

   async index(request,response){

    const userList = await Register.find({__v:0})

    response.send(userList)
   }

   
}