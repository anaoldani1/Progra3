import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { db, auth} from '../firebase/config'

class DynamicForm extends Component {
    constructor(props){
        super(props)
        this.state={
            valor: "",
        }
    }

    onSubmit(){
        console.log(this.state);
        db.collection('posts').add({
          email: auth.currentUser.email, ///ASI TRAIGO EL USUARIO ACTUAL
          comment: this.state.valor,
          createdAt: Date.now(),
      })
      .then()
      .catch( e => console.log(e))
        
    }


    render(){
        return(
        <View style={styles.container}> 
            {/* ESTO LO COMENTO PORQUE ROMPE, SOLO ES CORRECTO USAR NAVIGATION EN SCREENS
            <Pressable onPress={ ()=> this.props.props.navigation.navigate("Login")}>
                 <Text style={styles.linkText}>Ir a Login </Text>
            </Pressable> */}
    
                <TextInput    style={styles.input} keyboardType='default'  placeholder='comentar' onChangeText={ text => this.setState({valor:text}) } value={this.state.valor} />
                <Pressable style={styles.button} onPress={() => this.onSubmit()}>
                <Text style={styles.buttonText} >Enviar </Text> 
                </Pressable>

              <View> 
                <Text> {this.state.valor}</Text>
              </View>

        </View>
            
        )
    }
}

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    height: 40, 
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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#28a745",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },


  linkText: {
    color: "#007bff",
    marginBottom: 15,
  },


});

export default DynamicForm