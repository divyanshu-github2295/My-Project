import React, { useState } from "react";
import { View, TouchableOpacity, Text, useColorScheme } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../appStyles/ColorStyles"
import { themeSwitch } from "../../slice.js/theme";


const AppTheme = ()=>{
    const isDarkMode = useColorScheme() === "dark";

    const backGroundColor = ()=>{}

    const[dark, setDark] = useState(false)

    const { mode } = useSelector((state) => state.theme)
    const dispatch = useDispatch()

    return(
        <TouchableOpacity
            onPress={()=>{
                if(!dark){
                    setDark(true)
                    dispatch(themeSwitch("dark"))
                }
                setDark(false)
                dispatch(themeSwitch("light"))
            }}
        >
           {
           !dark? 
            <Ionicons name="md-sunny" color={colors.headerButtonColor} size={35}/>
            :
            <Ionicons name="moon" color={colors.headerButtonColor} size={35}/>
           }
        </TouchableOpacity>
    )
}