import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, ROUTES } from "../../constants";

const Settings: FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Settings</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAIL as never)}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Go To Settings Detail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.LOGIN as never)}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
