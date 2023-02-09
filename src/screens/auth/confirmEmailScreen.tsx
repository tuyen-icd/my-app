import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import TxtInput from "../../components/Input/components/TxtInput";
import Button from "../../components/Button/Button";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import routes from "../../constants/routes";

const confirmEmailScreen = () => {
  const navigation = useNavigation();
  const onConfirmPressed = () => {
    console.log("onSignInPress");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={{}}>Confirm Your Email</Text>

        <TxtInput
          placeholder="Full Name"
          onChangeText={(text) => {
            console.log("text confirm code", text);
          }}
        />

        <Button
          text="Sign Up"
          buttonSize="Medium"
          onPress={onConfirmPressed}
          buttonStyles={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          textStyle={[styles.buttonTextStyle]}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Back to Sign in</Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.LOGIN as never)}
          >
            <Text style={styles.signupBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default confirmEmailScreen;

const styles = StyleSheet.create({
  link: {
    color: COLORS.primary,
  },
  buttonTextStyle: {
    color: COLORS.white,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    flexDirection: "row",
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: "bold",
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
