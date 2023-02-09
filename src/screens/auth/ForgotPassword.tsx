import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import TxtInput from "../../components/Input/components/TxtInput";
import Button from "../../components/Button/Button";
import { COLORS } from "../../constants";
import routes from "../../constants/routes";

const ForgotPassword = () => {
  const route: any = useRoute();
  const navigation = useNavigation();
  const [stateNewPassword, setStateNewPassword] = useState({
    code: { value: "", error: "" },
    newPassword: { value: "", error: "" },
  });
  const onSubmitPressed = () => {
    console.log("onSubmitPressed");
  };
  console.log("route", route);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.loginContinueTxt}>Reset your password</Text>

        <TxtInput placeholder="Code" value={stateNewPassword.code.value} />
        <TxtInput
          placeholder="Enter your new password"
          value={stateNewPassword.newPassword.value}
        />

        <Button
          text="Submit"
          buttonSize="Medium"
          onPress={onSubmitPressed}
          buttonStyles={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          textStyle={[styles.buttonTextStyle]}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Back to </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.LOGIN as never)}
          >
            <Text style={styles.signupBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 16,
  },
  container: {
    padding: 15,
    width: "100%",
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: "center",
    color: COLORS.gradientForm,
    margin: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  buttonTextStyle: {
    color: COLORS.white,
  },
  footer: {
    // position: "absolute",
    paddingTop: 30,
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
