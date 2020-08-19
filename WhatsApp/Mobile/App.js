import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
import ContactBoard from "./src/pages/ContactBoard/index"
import AddContact from "./src/pages/AddContact/index"
import Chat from "./src/pages/Chat/index"
import FirstStep  from "./src/pages/Register/FirstStep/index"
import SecondStep  from "./src/pages/Register/SecondStep/index"
import ThirdStep  from "./src/pages/Register/ThirdStep/index"
import AddName from './src/pages/AddName';



export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      
      <Stack.Screen  name="ContactBoard" component={ContactBoard} />
      <Stack.Screen  name="Chat" component={Chat} />
      <Stack.Screen  name="AddContact" component={AddContact} />
      <Stack.Screen  name="FirstStep" component={FirstStep} />
      <Stack.Screen  name="SecondStep" component={SecondStep} />
      <Stack.Screen  name="ThirdStep" component={ThirdStep} />
      <Stack.Screen name="AddName"  component={AddName}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  ) 

}



  



