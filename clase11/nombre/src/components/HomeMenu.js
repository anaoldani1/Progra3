import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Usuarios from "../screens/Usuarios"
import NewPost from "../screens/NewPost";

const Tab = createBottomTabNavigator();

function HomeMenu () {
  return (
    <Tab.Navigator screenOptions={ { tabBarShowLabel: false, headerShown: false, } }>
        <Tab.Screen name="Home" component={ Home } options={{ tabBarIcon: () => <AntDesign name="home" size={24} color="black" />}} />
        <Tab.Screen name="Usuarios" component={ Usuarios } options={{ tabBarIcon: () => <FontAwesome5 name="users" size={24} color="black" />}} />
        <Tab.Screen name="NewPost" component={ NewPost } options={{ tabBarIcon: () => <Ionicons name="add-circle-outline" size={24} color="black" />}} />
        <Tab.Screen name="Profile" component={ Profile } options={{ tabBarIcon: () => <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />}}/>
     </Tab.Navigator>
)

}

export default HomeMenu