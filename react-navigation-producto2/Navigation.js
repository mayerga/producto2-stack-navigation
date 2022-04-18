import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
//Toda la navegación tiene que ir en un componente
import {NavigationContainer} from "@react-navigation/native";

//IMPORTANDO screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";


//Guardar en la variable la BottomTab
const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}