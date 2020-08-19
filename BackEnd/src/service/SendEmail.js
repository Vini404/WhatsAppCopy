const nodemailer = require("nodemailer")
const crypto = require("crypto")
const { response } = require("express")
const user =  ''
const pass = ''

module.exports={
    async SendCode(userEmail){
       
        const code =crypto.randomBytes(6).toString("hex").toUpperCase()
        
        
        const transporter = nodemailer.createTransport({
           service:"gmail",
            auth:{user,pass}
        })

        transporter.sendMail({
            from:user,

            to:userEmail,
            subject:"Codigo de verificação CopyWhatsApp",
            text:`Olá, Você realizou um cadastro em nossa plataforma,o código para confirmação é ${code}`
            
        }).then((info)=>{})
            .catch((err)=>{})

        return code
    }

}