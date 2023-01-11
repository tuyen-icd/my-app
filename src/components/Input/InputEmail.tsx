import React, { FC } from "react";
import TxtInput, { TxtInputProps } from "./components/TxtInput";
import { IcEmailActiveNew, IcEmailNew } from "../../assets/icons";

const InputEmail: FC<TxtInputProps> = ({
  containerStyle,
  placeholder,
  onChangeText,
  value,
  error,
}) => {
  return (
    <TxtInput
      value={value}
      onChangeText={onChangeText}
      containerStyle={containerStyle}
      placeholder={placeholder}
      leftComponent={(valueIsNotEmpty, styles) =>
        valueIsNotEmpty ? (
          <IcEmailActiveNew {...styles} />
        ) : (
          <IcEmailNew {...styles} />
        )
      }
      error={error}
    />
  );
};

export default InputEmail;
