import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
const Tab = createBottomTabNavigator();

import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function HomeMenu (){
    return(
        <Tab.Navigator screenOptions={ { tabBarShowLabel: false } } >
            <Tab.Screen name="HomeScreen" component={ HomeScreen } options={{tabBarIcon: () => <Feather name="home" size={24} color="black" />}}/>
            <Tab.Screen name="Profile" component={ Profile } options={{tabBarIcon: () => <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />}}/>
        </Tab.Navigator>

    )
}

export default HomeMenu