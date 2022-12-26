import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import colors from "../../appStyles/ColorStyles"


export const HeaderRight =()=>{
    
    const navigation = useNavigation();
    return(
        <TouchableOpacity
            style={{marginEnd:20}}
            onPress={()=> navigation.navigate("Home")}
        >
            <Entypo name="cross" color={colors.headerButtonColor} size={35}/>
        </TouchableOpacity>
    )
}
