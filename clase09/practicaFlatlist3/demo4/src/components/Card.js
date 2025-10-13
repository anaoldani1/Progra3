import React from "react";
import {Text} from "react-native"
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

function Card(props){
    return(
        <View style = {styles.container}>
            <Text>nombre del producto: {props.data.name}</Text>
            <Text>species: {props.data.species}</Text>
            <Text>gender: {props.data.gender}</Text>
            <Image 
            style={styles.image} 
            source={{uri:props.data.image}} 
            resizeMode= "contain" />
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        textAlign: "center",
        padding: 10
    },
    image: {
        height: 400,
        width: 400
    }
})
export default Card