import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, ROUTES } from "../constants";
import { Home, Notifications, Wallet } from "../screens/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingNavigator from "./SettingNavigator";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import CustomTabBarButton from "../components/CustomNavigation/CustomTabBarButton";
import CustomTabBar from "../components/CustomNavigation/CustomTabBar";
import { useNavigation } from "@react-navigation/native";
import ProductNavigator from "./ProductNavigator";

interface Props {
  openDrawer: any;
}
const Tab = createBottomTabNavigator();

function ButtonTabNavigator() {
  const navigation: Props = useNavigation();

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: true, // Tắt header của Tab Screen
        tabBarShowLabel: false, //Tắt tên ở tab TabButtom
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarActiveTintColor: COLORS.primary, //set color cho icon owr TabBottom
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          } else if (route.name === ROUTES.PRODUCTS) {
            iconName = focused ? "gift" : "gift-outline";
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.PRODUCT_NAVIGATOR}
        component={ProductNavigator}
        options={{
          tabBarLabel: "Products",
          title: "Products",
          headerShown: true,
          tabBarButton: (props) => (
            <CustomTabBarButton route="products" {...props} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />

      <Tab.Screen
        name={ROUTES.WALLET}
        component={Wallet}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton route="Wallet" {...props} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton route="home" {...props} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton route="Notifications" {...props} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingNavigator}
        options={{
          tabBarLabel: "Settings",
          title: "Settings",
          headerShown: true,
          tabBarButton: (props) => (
            <CustomTabBarButton route="settings" {...props} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                  size={30}
                  color={COLORS.dark}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtonTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "transparent",
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});
