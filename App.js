import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import AuthNavigator from './src/navigations/AuthNavigator';
import { Provider } from "react-redux";
import store from "./src/redux/Store";

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <AuthNavigator/>
    </NavigationContainer>
    </Provider>
  );
}