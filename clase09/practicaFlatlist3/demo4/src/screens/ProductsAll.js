import React from "react";
import { Component } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import { FlatList } from "react-native";

class ProductsAll extends Component {
    constructor(){
        super();
        this.state ={
            info: []
        }
    }
    componentDidMount(){
      fetch(`https://rickandmortyapi.com/api/character`)
      .then(data => data.json())
      .then(data=>
        this.setState({
          info: data.results
        })
      )
    }

    render(){
        return(
                <FlatList
                data={this.state.info}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=> <Card data={item}/>}
                />
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
export default ProductsAll