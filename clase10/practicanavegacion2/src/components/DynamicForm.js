import React from "react";
import { Component } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";

class DynamicForm extends Component {
    constructor(){
        super();
        this.state={
            comentario: ""
        }
    }
    onSubmit(){
        console.log(this.state);
    }


    render(){
        return(
            <View style={styles.container}>
                <Pressable onPress={ ()=> this.props.navigation.navigate('Register')}  style={styles.button}>
                    <Text>Ir al registro</Text>
                </Pressable>

                <Text>Login</Text>
                <TextInput style={styles.field} 
                keyboardType='default'
                placeholder='comenta aca'
                onChangeText={ text => this.setState({comentario:text}) }
                value={this.state.comentario} />
                
                <Pressable onPress={() => this.onSubmit()} style={styles.button} >
                <Text style={styles.buttonText} > Enviar </Text> 
                </Pressable> 


                <View>
                    <Text>{this.state.email}</Text>
                    <Text>{this.state.username}</Text>
                </View>

            </View>
        )
    }
    
}
const styles =StyleSheet.create({
    container: {
        paddingHorizontal:10,
        marginTop:20
    },
    field: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 6,
        marginVertical: 10,  
    },
    button: {
        backgroundColor: "#28a745",
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: "center",    
        justifyContent: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#28a745",
        marginTop: 10,
      },
      buttonText: {
        color: "#fff",
        fontWeight: "600",
      },
})

export default DynamicForm