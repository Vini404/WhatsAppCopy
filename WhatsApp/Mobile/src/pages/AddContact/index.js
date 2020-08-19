import React,{useState, useEffect} from "react"
import {ScrollView, StatusBar} from "react-native"
import { AsyncStorage } from 'react-native';
import photo from "../../../images/WhiteImage.png"
import {AddContactContainer,NewContactContainer,NewContact,ArrowStyle,UserContactContainer,Contacts,PhotoContact,ContactName} from "./styles.js"
import Icon from 'react-native-vector-icons/MaterialIcons/'
import Api from "../../service/api.js"
Icon.loadFont()

export default function AddContact({navigation}) {

  const [data, setData] = useState([])

  useEffect(() => {

    SearchApi()

  }, [])

  async function SearchApi() {
    await Api.get("/users")
      .then(content => RemoveMyUserFromContent(content.data))

  }

  async function RemoveMyUserFromContent(content) {

    const FirstUser = await AsyncStorage.getItem("FirstUser")

    const data = content.filter((e) => {

      return e.name !== FirstUser
    })

    setData(data)
  }

  async function handleClick(name) {

    try {

      const firstuser = await AsyncStorage.getItem("FirstUser")
      const seconduser = name

      const data = {
        firstuser,
        seconduser
      }

      const response = await Api.post("/chatCreate", data)


      if (response.data == "Chat already start") {

        navigation.navigate("Chat", {
          seconduser: name
        })

      }
      const _id = response.data._id

      PutIdInStorageAndVerifyYouLenght(_id)

      navigation.navigate("Chat", {
        seconduser: name
      })

    } catch (error) {
      alert(error)
    }



  }

  async function PutIdInStorageAndVerifyYouLenght(id) {
    const data = JSON.parse(await AsyncStorage.getItem("ChatsStart"))

    if (!data) {

      const NewData = [id]

      await AsyncStorage.setItem("ChatsStart", JSON.stringify(NewData))


    } else {

      data.push(id)

      await AsyncStorage.setItem("ChatsStart", JSON.stringify(data))
    }

    return
  }

  
    return(
      <AddContactContainer>
      
        <NewContactContainer>
            <Icon style={ArrowStyle} 
            name="arrow-back" 
            color="#fff" size={30}
            onPress={()=>{navigation.navigate("ContactBoard")}} 
            ></Icon> 

            <NewContact >Nova conversa</NewContact>
        </NewContactContainer>
        <ScrollView>
        <UserContactContainer>
       
         {data.map(user=>(   
            <Contacts 
            key={Math.random()} 
            value={user.name} 
            onPress={()=>handleClick(user.name)}
            >
                <PhotoContact source={photo} />
         <ContactName>
           {user.name}
           </ContactName>
            </Contacts>
         ))}  
         
            
        </UserContactContainer>
        </ScrollView>
      </AddContactContainer>
    )

}