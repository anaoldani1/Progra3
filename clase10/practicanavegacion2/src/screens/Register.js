import React from "react";
import { Component } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";


class Register extends Component {
    constructor(){
        super();
        this.state={
            email: "",
            password: '',
            userName: ""
        }
    }
    onSubmit(){
        console.log(this.state);
    }

    render(){
        return(
            <View  style={styles.container}> 
                
                <Text>Register</Text>

                <Pressable onPress={ ()=> this.props.navigation.navigate('Login')}>
                    <Text>Ir a login</Text>
                </Pressable>

                <TextInput  style={styles.field} 
                keyboardType='email-address'
                placeholder='email'
                onChangeText={ text => this.setState({email:text}) }
                value={this.state.email} />

                <TextInput  style={styles.field} 
                keyboardType='default'
                placeholder='username'
                onChangeText={ text => this.setState({userName:text}) }
                value={this.state.userName} />

                <TextInput style={styles.field} 
                keyboardType='default'
                placeholder='password'
                secureTextEntry={true} 
                onChangeText={ text => this.setState({password:text}) }
                value={this.state.password}/> 
                
                <Pressable onPress={() => this.onSubmit()} style={styles.button} >
                <Text style={styles.buttonText}> Registrate </Text> 
                </Pressable> 


                <View>
                    <Text>{this.state.email}</Text>
                    <Text>{this.state.username}</Text>
                </View>

                <Pressable onPress={ ()=> this.props.navigation.navigate('HomeMenu')} >
                    <Text >Ir a Home</Text>
                </Pressable>

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

export default Register