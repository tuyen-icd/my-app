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
import { IcPersonActiveNew, IcPersonNew, LogoICD } from "../../assets/icons";
import Spacer from "../../components/Spacer";
import TxtInput from "../../components/Input/components/TxtInput";
import InputPassword from "../../components/Input/InputPassword";
import InputEmail from "../../components/Input/InputEmail";
import Checkbox from "expo-checkbox";

const Register = () => {
  const [registerState, setRegisterState] = useState({
    fullName: { value: "", error: null },
    phoneNumber: { value: "", error: null },
    userName: { value: "", error: null },
    password: { value: "", error: null },
    retypePassword: { value: "", error: null },
    checked: false,
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView styles={styles.main}>
        <View style={styles.container}>
          <View style={styles.row}>
            <LogoICD width={250} height={150} />
          </View>
          <Spacer height={30} />
          <TxtInput
            placeholder="Full Name"
            error={registerState.fullName.error}
            value={registerState.fullName.value}
            leftComponent={(valueIsNotEmpty, styles) => {
              valueIsNotEmpty ? (
                <IcPersonActiveNew {...styles} />
              ) : (
                <IcPersonNew {...styles} />
              );
            }}
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
            leftComponent={(valueIsNotEmpty, styles) => {
              valueIsNotEmpty ? (
                <IcPersonActiveNew {...styles} />
              ) : (
                <IcPersonNew {...styles} />
              );
            }}
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

          {/* <View>
            <Checkbox
              style={styles.checkbox}
              value={registerState.checked}
              onValueChange={setRegisterState({
                ...registerState,
                checked
              })}
              color={registerState.checked ? "#4630EB" : undefined}
            />
            <Text style={styles.label}>Do you like React Native?</Text>
          </View> */}
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
});
