import React from "react";
import { Component } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

class BotonSaludar extends Component {
    saludar(){
        console.log("me clickearon");
    }

    render(){
        return(
            <Pressable onPress={()=>this.saludar()} style={styles.boton}>
                <Text style={styles.texto}>Clickeame</Text>
            </Pressable>
        )
    }
}


const styles=StyleSheet.create({
    boton: {
        backgroundColor: "grey",
        padding: 7
    },
    texto: {
        color: "black",
        fontWeight: "bold"
    }
})
export default BotonSaludar