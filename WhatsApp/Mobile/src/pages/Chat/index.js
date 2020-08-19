import React, { useEffect, useState } from "react"
import {ScrollView} from "react-native"
import { AsyncStorage } from 'react-native';
import photo from "../../../images/WhiteImage.png"
import {MessageContainer,SendContainer,Keyboard,Message,ArrowStyle,ProfileContainer,NameUser,ImageUser,ChatBox,UserMessage,InputUserContainer,MessageInput,MyUser,OtherUser} from "./styles.js"
import Icon from 'react-native-vector-icons/MaterialIcons/'
import api from "../../service/api";

Icon.loadFont()

export default function Chat({navigation,route}) {

    const [message, setMessage] = useState("")
    const [firstUser,setFirstUser] = useState("")
    const [secondUser,setSecondUser] = useState("")
    const [MessageList,setMessageList] = useState([])
    const [active,setActive] = useState(false)

useEffect(() => {
    PutInStorage()
    ResetStateAndSearchMessages()

}, [])

useEffect(() => {
    PutInStorage()
    ResetStateAndSearchMessages()

}, [active])


async function ResetStateAndSearchMessages() {

    const data = {
        headers: {
            FirstUser: await AsyncStorage.getItem("FirstUser"),
            SecondUser: route.params.seconduser
        }

    }

    const response = await api.get("/MessageIndex", data)

    const MessageData = response.data

    if (!MessageData[0].Message) {

        return
    }

    setMessageList(MessageData[0].Message)
}

async function SendMessage() {

    if (message === "") {
        return
    } else {
        const data = {

            FirstUser: await AsyncStorage.getItem("FirstUser"),
            SecondUser: route.params.seconduser,
            Message: {
                Content: message,
                User: await AsyncStorage.getItem("FirstUser")
            }
        }

        await api.post("/SendMessage", data)

        setActive(!active)
        setMessage("")
    }
}

        function RenderMessages(data,firstuser){
            
            if(data.User===firstuser){
               
                return (
            <MyUser key={Math.random()}>
                <Message>
                    {data.Content}
                </Message>
            </MyUser>
            )}
            else{
               
                return (
                    <OtherUser key={Math.random()}  >
                    <Message>
                    {data.Content}
                            </Message>
                            
                    </OtherUser>
                )
            }
        }

    async function PutInStorage() {
        setFirstUser(await AsyncStorage.getItem("FirstUser"))
        setSecondUser(route.params.seconduser)
    }

    async function goBack() {
        navigation.navigate("ContactBoard")
    }



    return(
        <MessageContainer>
            <ProfileContainer>
             <Icon name="arrow-back" size={20} style={ArrowStyle}color="#fff" onPress={()=>{goBack()}}/>
               <ImageUser source={photo} ></ImageUser>
    <NameUser>{secondUser}</NameUser>
            </ProfileContainer>
    
        <ChatBox>
        <ScrollView>
        
            <UserMessage>
            {
                
                MessageList.map((data)=>{
                    
                
                return RenderMessages(data,firstUser)
                })
            }     

             

            </UserMessage>

            </ScrollView>

           
        </ChatBox>

        <Keyboard>
            <InputUserContainer>
            <MessageInput
            value={message}
            onChangeText={(text)=>{setMessage(text)}}/>
            </InputUserContainer>
          <SendContainer> 
           <Icon onPress={()=>SendMessage()} name="send" size={30} color="#075E54"/> 
           </SendContainer> 
            </Keyboard> 

        </MessageContainer>
    )

}