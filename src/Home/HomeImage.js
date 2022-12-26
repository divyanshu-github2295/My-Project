import React from "react";
import { Image, View, StyleSheet } from "react-native";
import homeImg from "../assets/739448.png"


export const HomeImage = ()=>{
    return(
        <Image source={homeImg} resizeMode="center"/>
    )
}