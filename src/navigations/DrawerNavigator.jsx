import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, ROUTES } from "../constants";
import { Notifications, Wallet } from "../screens";
import ButtonTabNavigator from "./BottomTabNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomDrawer from "../components/CustomNavigation/CustomDrawer";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false, // Tắt header của Drawer
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        }
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={ButtonTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="home-sharp" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
        options={{
          title: 'Wallet',
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="wallet" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="notifications" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
