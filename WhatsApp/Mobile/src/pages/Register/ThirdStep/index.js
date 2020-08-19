import React,{useState,useEffect} from "react"


import {RegisterContainer,HeaderContainer,Header,DescriptionContainer,Description} from "../GlobalRegisterStyles/styles.js"
import {InputCodeContainer,CodeInput,TextCode} from "./styles.js"
import { AsyncStorage } from "react-native"



export default  function RegisterThirdStep({navigation}){

    const[codeVerify,setCodeVerify] = useState("")

    const [code,setcode] = useState("")
    const [email,setEmail] = useState("")

    useEffect(()=>{
        	GetCodeAndEmail()
    },[])
    
    

    async function GetCodeAndEmail(){

        setcode(await AsyncStorage.getItem("code"))
        setEmail(await AsyncStorage.getItem("email"))
    }

    async function VerifyCodeAndNavigateAtContactBoard(){
        await AsyncStorage.setItem("FirstName","Vinicius Gabriel")
        navigation.navigate("AddName")
    }

    if(codeVerify.length===12){
        
        if(code===codeVerify){
           
            VerifyCodeAndNavigateAtContactBoard()
        }
    }

    return(
        <RegisterContainer>

            <HeaderContainer>
                    <Header>Verificar {email}</Header>
            </HeaderContainer>

           <DescriptionContainer>
               <Description>Aguardando a inserção do codigo que foi enviado para o email na qual foi preenchido no registro.</Description>
               </DescriptionContainer> 

        <InputCodeContainer>
          <CodeInput 
          value={codeVerify}
           onChangeText={(text)=>setCodeVerify(text)} ></CodeInput>
          </InputCodeContainer>
          <TextCode>Insira o codigo de 6 digitos</TextCode>
        </RegisterContainer>
    )
}