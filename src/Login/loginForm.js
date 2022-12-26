import React, {useState} from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, TextInput} from "react-native";
import colors from "../appStyles/ColorStyles";
import { LoginButtons } from "./loginButtons";

export const LoginForm = ()=>{

    const[username, setUsername] = useState("")
    const[Password, setPassword] = useState("")

    const submitLogin = ()=>{
        return(
            Alert.alert("", "Sign in pressed")
        )
    }
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(value) => setUsername(value)}
            />
            <TextInput
                style={[styles.input, {marginBottom:20}]}
                placeholder="Password"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:0.5,
        alignItems:"center",
        justifyContent:"flex-end",
        marginBottom:20
    },
    input:{
        width:300,
        padding:5,
        marginBottom:5,
        fontSize:18,
        //textAlign:"left",
        //textAlignVertical:"center",
        borderBottomWidth:2,
        borderColor:colors.buttonBackground
    }
})