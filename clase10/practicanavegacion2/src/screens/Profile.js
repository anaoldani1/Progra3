import React from "react";
import { Component } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native-web";

class Profile extends Component {
    render(){
        return(
            <View>
                <Pressable onPress={ ()=> this.props.navigation.navigate('Login')}>
                    <Text>Desloguearse</Text>
                 </Pressable>    
                 
                <Pressable onPress={ ()=> this.props.navigation.navigate('HomeMenu')} >
                    <Text >Ir a Home</Text>
                </Pressable>
            </View>

        
        )
    }
}

export default Profile