import React from "react";
import {Text} from "react-native"
import BotonSaludar from "../components/BotonSaludar";
import { View } from "react-native";
import Contador from "../components/Contador";
import { StyleSheet } from "react-native";
function Home(){
    return(
        <View style = {styles.container}>
            <View  style = {styles.clickable}>
                <Text>Hola mundo</Text>
                <BotonSaludar/>
                <Contador/>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        textAlign: "center",
        padding: 10
    },
    clickable: {
        padding: 4,
        backgroundColor: "#ccc",
        marginBottom:10,
        borderRadius: 4,
        fontWeight: "bold"
    }
})
export default Home