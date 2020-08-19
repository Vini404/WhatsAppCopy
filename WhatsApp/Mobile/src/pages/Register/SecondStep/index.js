import React, { useState } from "react"
import {} from "./styles.js"
import {RegisterContainer,HeaderContainer,Header,DescriptionContainer,Description,ButtonContainer,Button} from "../GlobalRegisterStyles/styles.js"
import {InputContainer,InputEmail,InputName} from "./styles"
import api from "../../../service/api.js";
import { AsyncStorage } from "react-native";
import {validate} from "validate.js"

export default function RegisterSecondStep({navigation}) {

    

    const[email,setEmail] = useState()
    const [InvalidEmail,setInvalidEmail]  = useState(false)


    async function RequestApiAndReceiveCode(){
        try{
        const response = await api.post("/register",{email:email})

       
        const UserAndCode = response.data
        const code = UserAndCode.code
        const UserEmail  = UserAndCode.user.email   
       
       await AsyncStorage.setItem("code",code)
       await AsyncStorage.setItem("email",UserEmail)

       navigation.navigate("ThirdStep")
    }catch(error){
        setInvalidEmail(true)
    }

    }

    async function VerifyEmail(){

        var constraints = {
            from: {
              email: true
            }
          }

          let verification= await validate({from:email},constraints)
         
          
          if(verification){
            setInvalidEmail(true)
            return 
          }

          RequestApiAndReceiveCode()

    }

    return (
        <RegisterContainer>
            <HeaderContainer>
                <Header>Coloque seu email</Header>
            </HeaderContainer>

        <DescriptionContainer>
            <Description>{`WhatsApp ira te enviar um email de verificação.\nApós isso enviaremos um email para confirmação.`}</Description>
        </DescriptionContainer>

        <InputContainer>
            <InputName>Coloque seu email para fazermos o registro</InputName>
            <InputEmail error={InvalidEmail} onChangeText={(text)=>{setEmail(text)}}/>
        </InputContainer>

        <ButtonContainer onPress={()=>{VerifyEmail()}}> 
            <Button>Cadastre-se</Button>
        </ButtonContainer>


        </RegisterContainer>
    )
}