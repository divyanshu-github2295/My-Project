import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerTab } from "./DrawerTab";


export const MainRouter = ()=>{
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
    return(
        <NavigationContainer>
            <DrawerTab/>
        </NavigationContainer>
    )
}