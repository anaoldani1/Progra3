import React from "react";
import { Component } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import DynamicForm from "../components/DynamicForm";

class NewPost extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){

        return(
        <View style={styles.container}> 
            <DynamicForm/>
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

export default NewPost