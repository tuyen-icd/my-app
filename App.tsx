import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigations/AuthNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import { LogBox } from "react-native";

LogBox.ignoreLogs(['Remote debugger']);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}
