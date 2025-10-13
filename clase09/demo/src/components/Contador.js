import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador: 0
        } 
    }

    contador(){
       this.setState({
            contador: this.state.contador + 1
       })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Cantidad de clicks: {this.state.contador}</Text>
                <Pressable onPress={()=>this.contador()} style={styles.boton}>
                    <Text style={styles.text}>Click aquí para contar</Text>
                </Pressable>
            </View>
        )
    }
    
}

const styles=StyleSheet.create({
    container: {
        marginVertical: 5
    },
    boton: {
        marginBottom:10,
        borderRadius:4,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        padding: 7
    },
    texto: {
        color: "black",
        fontWeight: "bold"
    }
})

export default Contador