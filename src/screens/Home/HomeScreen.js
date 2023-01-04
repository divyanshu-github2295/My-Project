import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { HomeImage } from "./HomeImage";
import colors from "../../appStyles/ColorStyles"

export const HomeScreen = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <HomeImage/>
            </View>
            <View style={styles.lowerContainer}>
                <Text>Here comes the FlatList Horizonal</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.BgColor,
        zIndex:1
    },
    upperContainer:{
        flex:3,
        alignItems:"center"
    },
    lowerContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})