import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TextInputProps {
  leftComponent?: (iconLeftStyle) => any;
  rightComponent?: (iconRightStyle) => any;
  placeholder: string;
  placeholderTextColor?: string;
  value?;
  onChangeText: (text) => void;
  inputStyle?;
}

const TextInputField = (props) => {
  return (
    <View style={[styles.container]}>
      <Ionicons name={props.nameIcon} size={20} color='#C0C0C0' style={styles.icon}/>
      <TextInput
        style={styles.textIputDefault}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder= {props.placeholder}
        placeholderTextColor= {COLORS.placeholderColor}
        {...props}
      />

    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: COLORS.grayLight,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIputDefault: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 35,
    flex: 1,
    paddingVertical: 10,
  
  },
  icon: {
    paddingLeft: 10,
    paddingHorizontal: 5
  }
});
