import "react-native-gesture-handler"
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from "react-redux";
import { store } from "./src/store/Store";
import { MainRouter } from "./src/routers/MainRouter";


const App = () => {
  return (
    <Provider store={store}>
      <MainRouter/>
    </Provider> 
  )
    
};


export default App;
