import { Alert } from "react-native";

export const ShowError = (error, onOk = () => {}) => {
  if (!error) return;
  let message = "";

  if (typeof error === "string") {
    message = error;
  } else {
    message = error.message;
  }
  Alert.alert("ICD-VN", message, [{ text: "OK", onPress: () => onOk() }]);
};
