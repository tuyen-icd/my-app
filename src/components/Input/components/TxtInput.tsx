import { View, Text, TextInput } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { BaseProps } from "./BaseProps";
import { COLORS } from "../../../constants";
import { styles } from "./styles";
import ContainerTextInput from "../ContainerTextInput";

export interface TxtInputProps extends BaseProps {
  secureTextEntry?;
  value?;
  onFocusTxtInput?: () => void;
  onChangeText?: (text) => void;
  keyboardType?;
  onSubmitEditing?: (event: any) => void;
  returnKeyType?;
  onBlur?: () => void;
  maxLength?: number;
}

const TxtInput: FC<TxtInputProps> = ({
  error,
  value,
  leftComponent,
  rightComponent,
  containerStyle,
  disable,
  onRightComponentPress,
  secureTextEntry,
  placeholder,
  onFocusTxtInput,
  onBlur,
  onChangeText,
  onSubmitEditing,
  keyboardType,
  returnKeyType
}) => {
  const [valueIsNotEmpty, setValueIsNotEmpty] = useState(Boolean(value));
  const [isFocusedState, setIsFocusedState] = useState(false);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    setErrorState(error);
  }, [error]);

  return (
    <ContainerTextInput
      error={errorState}
      valueIsNotEmpty={valueIsNotEmpty}
      isFocused={isFocusedState}
      leftComponent={leftComponent}
      rightComponent={rightComponent}
      containerStyle={containerStyle}
      disable={disable}
      onRightComponentPress={onRightComponentPress}
    >
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholderColor}
        style={styles.input}
        editable={!disable}
        multiline={false}
        blurOnSubmit={true}
        value={value}
        onBlur={() => {
          setIsFocusedState(false);
        }}
        onFocus={() => {
          setIsFocusedState(true);
          onFocusTxtInput ? onFocusTxtInput() : null;
        }}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        onChangeText={(text) => {
          setErrorState(null)
          setValueIsNotEmpty(text !== '');
          if(onChangeText) {
            onChangeText(text);
          }
        }}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
      />
    </ContainerTextInput>
  );
};

export default TxtInput;
