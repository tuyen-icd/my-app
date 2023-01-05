import { StyleSheet } from "react-native";
import React, { FC, useState } from "react";
import TxtInput, { TxtInputProps } from "./components/TxtInput";
import {
  IcEyeClosed,
  IcEyeOpened,
  IcLockActiveNew,
  IcLockNew,
} from "../../assets/icons";

export interface InputPassWordProps extends TxtInputProps {
  visiblePasswordButton?: boolean;
}

const InputPassword: FC<InputPassWordProps> = (props: {
  containerStyle;
  placeholder: string;
  onChangeText: (text) => void;
  visiblePasswordButton: true;
  error: string;
}) => {
  const { visiblePasswordButton } = props;
  const [hidePassword, setHidePassword] = useState(true);

  const passwordButton = (styles) => {
    if (visiblePasswordButton === undefined || true) {
      return hidePassword ? (
        <IcEyeClosed {...styles} />
      ) : (
        <IcEyeOpened {...styles} />
      );
    }
  };

  return (
    <TxtInput
      {...props}
      leftComponent={(valueIsNotEmpty, styles) => (valueIsNotEmpty ? <IcLockActiveNew {...styles}/> : <IcLockNew {...styles}/>)}
      rightComponent={passwordButton}
      onRightComponentPress={() => setHidePassword(!hidePassword)}
      secureTextEntry={hidePassword}
    />
  );
};

export default InputPassword;
