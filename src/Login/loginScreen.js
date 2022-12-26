import React from "react";
import { View, StyleSheet } from "react-native";
import { LoginButtons } from "./loginButtons";
import { LoginForm } from "./loginForm";
import colors from "../appStyles/ColorStyles"

export const LoginScreen = ()=>{
    return(
        <View style={styles.container}>
            <LoginForm/>
            <LoginButtons/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.BgColor
    }
})