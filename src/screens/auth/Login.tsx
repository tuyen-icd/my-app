import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import {} from "react-native-gesture-handler";
import { COLORS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogoICD } from "../../assets/icons";
import InputPassword from "../../components/Input/InputPassword";
import InputEmail from "../../components/Input/InputEmail";
import Button from "../../components/Button/Button";
import {
  checkValidateEmail,
  checkValidatePassword,
} from "../../utils/checkValidateInput";
import { useDispatch } from "react-redux";
import { doLoginAction } from "../../redux/actions/AuthAction";

const Login = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loginFormState, setLoginFormState] = useState({
    userName: { value: "", error: null },
    password: { value: "", error: null },
  });

  console.log(loginFormState.userName.value, loginFormState.password.value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route?.params?.register === "registerScreen") {
      setLoginFormState({
        ...loginFormState,
        userName: {
          value: route.params.userName,
          error: null,
        },
        password: {
          value: "",
          error: null,
        },
      });
    }
  }, [route?.params]);

  console.log("route", route);

  const checkValidateFormLogin = () => {
    const errorEmail = checkValidateEmail(loginFormState.userName.value);
    const errorPassword = checkValidatePassword(loginFormState.password.value);

    if (errorEmail !== null || errorPassword !== null) {
      setLoginFormState({
        ...loginFormState,
        userName: {
          value: loginFormState.userName.value,
          error: errorEmail,
        },
        password: {
          value: loginFormState.password.value,
          error: errorPassword,
        },
      });
    } else {
      Keyboard.dismiss();
      onSignInPress(
        loginFormState.userName.value,
        loginFormState.password.value
      );
      // navigation.navigate(ROUTES.HOME as never);
    }
  };

  const onSignInPress = (userName, password) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      dispatch(
        doLoginAction(userName, password, (error, data) => {
          if (error) {
            console.log(error);
          } else {
            console.log("dataLogin ==", data);
          }
        })
      );
    } catch (error) {
      Alert.alert("Oops! Email or Password ");
    }
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.row}>
              <LogoICD width={300} height={150} />
            </View>

            <Text style={styles.loginContinueTxt}>Login in to continue</Text>
            <InputEmail
              placeholder="Email"
              value={loginFormState.userName.value}
              error={loginFormState.userName.error}
              onChangeText={(text) => {
                setLoginFormState({
                  ...loginFormState,
                  userName: {
                    value: text,
                    error: null,
                  },
                });
              }}
            />
            <InputPassword
              placeholder="Password"
              error={loginFormState.password.error}
              onChangeText={(text) => {
                setLoginFormState({
                  ...loginFormState,
                  password: {
                    value: text,
                    error: null,
                  },
                });
              }}
              value={loginFormState.password.value}
            />

            <Button
              text="Log In"
              buttonSize="Medium"
              // onPress={() => navigation.navigate(ROUTES.HOME as never)}
              onPress={() => checkValidateFormLogin()}
            />
            {/***************** FORGOT PASSWORD BUTTON *****************/}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  ROUTES.FORGOT_PASSWORD as never,
                  {
                    userId: "ff8qwfv1ahjk",
                  } as never
                )
              }
            >
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}> Don't have an account? </Text>
            {/******************** REGISTER BUTTON *********************/}
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.REGISTER as never)}
            >
              <Text style={styles.signupBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
  },
  brandName: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: "100%",
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
  },
  // footer
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
  // utils
  wFull: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});
