import React from "react";
import { TouchableOpacity, Text, StyleSheet, View ,Image, Alert} from "react-native";
import color from "../../appStyles/ColorStyles";
import googleLogo from "../assets/googleLogo.png"


export const LoginButtons =()=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={()=>Alert.alert("","Sign in Clicked")}>
                <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.otherBtn, {marginTop:10}]}>
                <Text style={styles.otherBtnText}>Fogot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherBtn}>
                <Text style={styles.otherBtnText}>Don't have an account? Create here</Text>
            </TouchableOpacity>
            <Text style={{color:"dimgray", alignSelf:"center"}}>--or--</Text>
            <TouchableOpacity
            style={styles.googleButton}
            >
                <Image source={googleLogo} style={styles.googleLogo}/>
                <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    submitButton:{
        width:300,
        height:40,
        borderRadius:5,
        backgroundColor:color.buttonBackground,
        marginBotton:10,
        //alignSelf:"center",
        justifyContent:"center"
    },
    buttonText:{
        fontSize:18,
        fontWeight:"600",
        color:color.buttonText,
        //padding:10,
        textAlign:"center",
        textAlignVertical:"center"
    },
    otherBtn:{
        marginBottom:2,
    },
    otherBtnText:{
        fontSize:16,
        color:color.buttonBackground,
        textAlign:"center"
    },
    googleButton:{
        flexDirection:"row",
        width:170,
        height:35,
        borderRadius:2,
        backgroundColor:"#4285F4",
        marginTop:20,
        //alignItems:"center"
        justifyContent:"space-between"
    }, 
    googleLogo:{
        width:35,
        height:35,
        backgroundColor:"white"
    },
    googleText:{
        fontWeight:"500",
        padding:5,
        fontSize:14,
        color:"white",
        textAlign:"center",
        textAlignVertical:"center" 
    }
})