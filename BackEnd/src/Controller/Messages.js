const Message = require('../models/Message.js')
const { response } = require('express')


module.exports={
    async Create(request,response){
        
       
        const {firstuser,seconduser} = request.body

        const FirstUser = firstuser
        const SecondUser = seconduser


        const data = await Message.find({FirstUser,SecondUser})
        
       

        if(data.length){
            
            return response.send("Chat already start")
        }


        const Users = await Message.create({
            FirstUser,
            SecondUser
        
        })
        

        return response.json(Users)

    },

    async SendMessage(request,response){

       const{FirstUser,SecondUser} = request.body
        const content  = new Object(request.body.Message)
        const LastMessage=request.body.Message.Content
        
       
        var Newcontent = []
        
        const Data = await Message.find({FirstUser,SecondUser})
        
        const ChatId = Data[0].id
      
        
        if(Data[0].Message){
            Newcontent.push(...Data[0].Message)
            Newcontent.push(content)
        }else{
            
            Newcontent.push(content)   
        }

    
        await Message.findByIdAndUpdate(ChatId,{Message:Newcontent,LastMessage})

        return response.send()


    },

    async index(request,response){

        const FirstUser = request.headers.firstuser
        const SecondUser = request.headers.seconduser
      

        const Data = await Message.find({FirstUser,SecondUser})
        
        
        return response.send(Data)    
    },

    async alreadyChats(request,response){
        
        const {_id} = request.headers

    
        

     
        const data = await Message.find({_id})
        console.log(data)
        
        
        return response.send(data)

    }

}