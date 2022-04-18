import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
//Toda la navegación tiene que ir en un componente
import {NavigationContainer} from "@react-navigation/native";


//IMPORTANDO screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import { ColorPropType } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';


//Guardar en la variable la BottomTab
const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{tabBarActiveTintColor: 'purple'}}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home', 
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                    ),
                    tabBarBadge: 3,
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings', 
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="brightness-5" size={24} color="black" />
                    ),
                }}
            />
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