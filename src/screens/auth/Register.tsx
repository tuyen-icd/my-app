import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, ROUTES } from "../../constants";
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
import {
  checkValidateEmail,
  checkValidatePassword,
  checkValidatePhone,
  checkValidateRetypePassword,
  checkValidateStringField,
} from "../../utils/checkValidateInput";
import { useNavigation } from "@react-navigation/core";
import { ShowError } from "../../utils/Alert";

const Register = () => {

  const navigation = useNavigation();
  const [registerState, setRegisterState] = useState({
    fullName: { value: "", error: null },
    phoneNumber: { value: "", error: null },
    userName: { value: "", error: null },
    password: { value: "", error: null },
    retypePassword: { value: "", error: null },
    isChecked: false,
  });

  const checkValidateFormSigup = () => {
    const errorFullName = checkValidateStringField(
      registerState.fullName.value
    );
    const errorPhoneNumber = checkValidatePhone(
      registerState.phoneNumber.value
    );
    const errorUserName = checkValidateEmail(registerState.userName.value);
    const errorPassword = checkValidatePassword(registerState.password.value);
    const errorRetypePassword = checkValidateRetypePassword(
      registerState.password.value,
      registerState.retypePassword.value
    );
    const checkBoxError = !registerState.isChecked;
    console.log('checkBoxError :>> ', checkBoxError);

    setRegisterState({
      ...registerState,
      fullName: {
        value: registerState.fullName.value,
        error: errorFullName,
      },
      phoneNumber: {
        value: registerState.phoneNumber.value,
        error: errorPhoneNumber,
      },
      userName: {
        value: registerState.userName.value,
        error: errorUserName,
      },
      password: {
        value: registerState.password.value,
        error: errorPassword,
      },
      retypePassword: {
        value: registerState.retypePassword.value,
        error: errorRetypePassword,
      },
      isChecked: registerState.isChecked,
    });

    if (
      errorFullName ||
      errorPhoneNumber ||
      errorUserName ||
      errorPassword ||
      errorRetypePassword
    ) {
      return false;
    } else {
      if (checkBoxError) {
        ShowError("You need to agree to the privacy policy");
        return false;
      }
    }
    navigation.navigate(ROUTES.LOGIN as never, {register: 'registerScreen', userName: registerState.userName.value } as never);
    return true;
  
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.main}>
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
              error={registerState.phoneNumber.error}
              value={registerState.phoneNumber.value}
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
                  phoneNumber: {
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
              onPress={() => checkValidateFormSigup()}
              buttonStyles={{
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
  paragraph: {
    color: COLORS.black,
    fontSize: 14,
  },
  buttonTextStyle: {
    color: COLORS.white,
  },
});
