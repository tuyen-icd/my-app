import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import {
  IcPersonActiveNew,
  IcPersonNew,
  IcPhoneActiveNew,
  IcPhoneNew,
  LogoICD,
} from "../../assets/icons";
import Spacer from "../../components/Spacer";
import TxtInput from "../../components/Input/components/TxtInput";
import InputPassword from "../../components/Input/InputPassword";
import InputEmail from "../../components/Input/InputEmail";
import Checkbox from "expo-checkbox";
import { heightPixel, widthPixel } from "../../utils/scanling";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../../components/Button/Button";

const Register = () => {
  const [registerState, setRegisterState] = useState({
    fullName: { value: "", error: null },
    phoneNumber: { value: "", error: null },
    userName: { value: "", error: null },
    password: { value: "", error: null },
    retypePassword: { value: "", error: null },
    isChecked: false,
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView styles={styles.main}>
        <View style={styles.container}>
          <View style={styles.row}>
            <LogoICD width={250} height={150} />
          </View>
          <Spacer height={10} />
          <KeyboardAwareScrollView style={{ width: "100%" }}>
            <TxtInput
              placeholder="Full Name"
              error={registerState.fullName.error}
              value={registerState.fullName.value}
              leftComponent={(valueIsNotEmpty, styles) =>
                valueIsNotEmpty ? (
                  <IcPersonActiveNew {...styles} />
                ) : (
                  <IcPersonNew {...styles} />
                )
              }
              onChangeText={(text) => {
                setRegisterState({
                  ...registerState,
                  fullName: {
                    value: text,
                    error: null,
                  },
                });
              }}
            />

            <TxtInput
              placeholder="Phone Number"
              error={registerState.fullName.error}
              value={registerState.fullName.value}
              leftComponent={(valueIsNotEmpty, styles) =>
                valueIsNotEmpty ? (
                  <IcPhoneActiveNew {...styles} />
                ) : (
                  <IcPhoneNew {...styles} />
                )
              }
              keyboardType="phone-pad"
              onChangeText={(text) => {
                setRegisterState({
                  ...registerState,
                  fullName: {
                    value: text,
                    error: null,
                  },
                });
              }}
            />

            <InputEmail
              placeholder="Email"
              value={registerState.userName.value}
              error={registerState.userName.error}
              onChangeText={(text) => {
                setRegisterState({
                  ...registerState,
                  userName: {
                    value: text,
                    error: null,
                  },
                });
              }}
              keyboardType="email-address"
            />
            <InputPassword
              placeholder="Password"
              error={registerState.password.error}
              onChangeText={(text) => {
                setRegisterState({
                  ...registerState,
                  password: {
                    value: text,
                    error: null,
                  },
                });
              }}
              value={registerState.password.value}
            />

            <InputPassword
              placeholder="Retype Password"
              error={registerState.retypePassword.error}
              onChangeText={(text) => {
                setRegisterState({
                  ...registerState,
                  retypePassword: {
                    value: text,
                    error: null,
                  },
                });
              }}
              value={registerState.retypePassword.value}
            />

            <View style={styles.section}>
              <Checkbox
                style={styles.isChecked}
                value={registerState.isChecked}
                onValueChange={(value) => {
                  setRegisterState({
                    ...registerState,
                    isChecked: value,
                  });
                }}
                color={
                  registerState.isChecked ? COLORS.gradientForm : undefined
                }
              />
              <Text style={styles.paragraph}>I Agree to Privacy Policy</Text>
            </View>

            <Spacer height={10} />

            <Button
              text="Sign Up"
              buttonSize="Medium"
              onPress={() => console.log("test test")}
              buttonStyles={{
                ...styles.buttonStyle,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
              textStyle={[styles.buttonTextStyle]}
            />
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    padding: 15,
    width: "100%",
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  isChecked: {
    margin: 8,
    width: widthPixel(18),
    height: heightPixel(18),
    borderColor: COLORS.gradientForm,
  },
});
