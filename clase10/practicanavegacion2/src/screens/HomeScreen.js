import React from "react";
import { Component } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";


class HomeScreen extends Component {
    render(){
        return(
            <View>
                <Text>Home</Text> 

                <Pressable onPress={ ()=> this.props.navigation.navigate('Login')}>
                    <Text>Ir a login</Text>
                </Pressable>    
            </View>
        )
    }
}

export default HomeScreen