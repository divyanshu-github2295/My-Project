import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../Home/HomeScreen";
import { AuthStack } from "./AuthStack";
import { HeaderRight } from "../components/Header/headerRight";
import colors from "../appStyles/ColorStyles";

const Drawer = createDrawerNavigator();

export const DrawerTab =()=>{

    return(
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerRight:()=>(
                    <HeaderRight/>
                ),
                headerTitleAlign:"center",
                headerTitleStyle:{
                    color:colors.headerText
                },
                headerTintColor:colors.headerButtonColor,
            }}  
        >
            <Drawer.Screen 
                name ="Login" 
                component={AuthStack}
                options={{ headerShown:false}}
            />
            <Drawer.Screen name="Home" component={HomeScreen}/>
        </Drawer.Navigator>
    )
}