import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import AddContact from "./pages/AddContact/index.js"
import ContactBoard from "./pages/ContactBoard/index.js"

export default function Routes(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="AA" component={AddContact}/>
            <Stack.Screen Name="BB" component={ContactBoard}/>
        </Stack.Navigator>
        
    )
}

