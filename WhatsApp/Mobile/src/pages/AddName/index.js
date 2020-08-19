import React,{useState} from "react"

import {View, AsyncStorage} from "react-native"

import {HeaderContainer,Header,ButtonContainer,Button} from "../Register/GlobalRegisterStyles/styles.js"
import {InputContainer,InputName,InputEmail} from "../Register/SecondStep/styles.js"
import api from "../../service/api.js"

export default function AddName({navigation}){

    const [name,setName] =  useState("")

    async function InsertNameInApi(){
        
        const email = await  AsyncStorage.getItem("email")

        const data={
            name,
            email
        }

        
        try{
        await api.post("/registerName",data)

        await AsyncStorage.setItem("FirstUser",name)
        
        
        navigation.navigate("ContactBoard")

     }catch(err){
         alert("Não foi possivel registrar seu nome")
     }
     navigation.navigate("ContactBoard")

    }   

    return(
        <View>
            <HeaderContainer>
                <Header>Coloque o seu nome</Header>
            </HeaderContainer>

        <InputContainer>
            <InputName>Coloque o seu nome para concluir o registro</InputName>
            <InputEmail  onChangeText={(text)=>{setName(text)}}/>
        </InputContainer>

        <ButtonContainer>
            <Button onPress={()=>{InsertNameInApi()}}>
                Finalizar o cadastro
            </Button>
        </ButtonContainer>
        </View>
    )
}