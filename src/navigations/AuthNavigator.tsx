import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Register from "../screens/auth/Register";
import { ROUTES, COLORS } from "../constants";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerBackTitleVisible: false,
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({ route }: any) => ({
          headerShown: false,
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          // title: route.params.userId,
        })}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />

      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{
          headerShown: false, // Tắt header của Stack Screen cho TabScreen.
        }}
      />

      <Stack.Screen
        name={ROUTES.PRODUCTS}
        component={DrawerNavigator}
        options={{
          headerShown: false, // Tắt header của Stack Screen cho TabScreen.
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
