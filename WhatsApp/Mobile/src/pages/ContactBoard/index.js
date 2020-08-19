
import React,{useState,useEffect} from 'react';
import {ScrollView,StatusBar, AsyncStorage} from 'react-native';
import ProfilePhoto from "../../../images/WhiteImage.png"
import {Header,SearchContainer,ContactContainer, MessageBoard, Avatar, Name, LastMessage, Container, WhatsApp,MessageContainer,Notification,NotificationContainer,IconsContainer,TimeTheLastMessage,TextInput} from "./styles.js"
import Icon from 'react-native-vector-icons/MaterialIcons/'
import api from '../../service/api';
Icon.loadFont();



export default function ContactBoard({ navigation }) {

const [actived,setActived] = useState(false)
const [icon,setIcon] = useState("account-box")
const [UserList,setUserList] = useState([])
const [idLength,setidLength]=useState(0)

useEffect(() => {

  CheckTheHistoryOfChatsAndSetState()


}, [])

async function CheckTheHistoryOfChatsAndSetState() {

  await AsyncStorage.setItem("FirstUser", "Vinicius Gabriel")

  const FirstUser = await AsyncStorage.getItem("FirstUser")

  if (!FirstUser) {
    navigation.navigate("FirstStep")
  }

  const ids = JSON.parse(await AsyncStorage.getItem("ChatsStart"))


  if (!ids) {

    return
  }

  setidLength(ids.length)



  SearchApiAndChangeState(ids)
}



async function SearchApiAndChangeState(ids) {


  ids.map(async (e) => {


    const content = {
      headers: {
        _id: e
      }
    }
    await api.get("/chatsAlready", content)
      .then((response) => setUserList([...UserList, response.data]))
      .catch((err) => {
        alert("Náo foi possivel carregars as conversas")
      })



  })



}


function Click() {
  if (actived) {
    return;
  }
  setActived(!actived)
  setIcon("arrow-forward")
}

function ChangeIcon() {
  if (icon === "arrow-forward") {
    setActived(!actived)
    setIcon("account-box")
  }
}

async function StartChat(name) {


  navigation.navigate("Chat", {
    seconduser: name
  })

}

  return (
    <Container >

      <StatusBar
      backgroundColor="#075E54"
      
      />  
     
      <Header>
        <WhatsApp onPress={()=>StartChat} >WhatsApp</WhatsApp>
      <TextInput active={actived}></TextInput>  
     <IconsContainer >
          <SearchContainer>
             <Icon 
             onPress={()=>Click} 
             name="search" 
             size={30} 
             color="#fff"
             />
         </SearchContainer>
        <ContactContainer >
          <Icon 
          onPress={()=>actived?ChangeIcon():navigation.navigate("AddContact")} 
          name={icon} 
          size={30} 
          color="#fff" 
          />
        </ContactContainer>   
      </IconsContainer>   
      </Header>
 
    {UserList.map((users)=>{
      
     
        return(
          <MessageBoard   
          onPress={()=>StartChat(users[0].SecondUser)}
          >
            <Avatar
             source={ProfilePhoto}/>
           <MessageContainer >
                    <Name>
                      {users[0].SecondUser}
                      </Name>
          <LastMessage>
            {users[0].LastMessage}
            </LastMessage>
            
            </MessageContainer>
            
          
          </MessageBoard>
        )
      
      
      })}
      
   
  

 
    </Container>
    
  );

}



  



