import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../Login/loginScreen";
import { HeaderRight } from "../components/Header/headerRight";
import color from "../appStyles/ColorStyles"

const Stack = createStackNavigator();

export const AuthStack =()=>{

    return(
        <Stack.Navigator
            screenOptions={{
                headerRight:()=>(
                    <HeaderRight/>
                ),
                headerMode:"float",
                headerTitleAlign:"center",
                headerTintColor:color.headerText,
                headerTitleStyle:{
                    fontWeight:"800"
                }
            }}
        >
            <Stack.Screen name ="Sign In" component={LoginScreen}/>
        </Stack.Navigator>
    )
}