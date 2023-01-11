import { View, Text, Pressable } from "react-native";
import React, { FC, ReactNode } from "react";
import { BaseProps } from "./components/BaseProps";
import { COLORS } from "../../constants";
import _ from "lodash";
import { styles } from "./components/styles";
import { heightPixel, pixelSizeHorizontal } from "../../utils/scanling";

export interface ContainerTextInputProps extends BaseProps {
  children?: ReactNode;
  valueIsNotEmpty?: boolean;
  isFocused?: boolean;
}

const ContainerTextInput: FC<ContainerTextInputProps> = ({
  error,
  children,
  iconProps = {
    width: 20,
    height: 20,
  },
  containerStyle,
  valueIsNotEmpty,
  isFocused,
  disable,
  leftComponent,
  rightComponent,
  onRightComponentPress,
}) => {
  const getBorderColor = (isFocused, error) => {
    if (!isFocused) {
      return Boolean(error) ? COLORS.danger : COLORS.grayLight;
    }
    return COLORS.gradientForm;
  };

  return (
    <>
      <View
        style={[
          styles.userInputWrap,
          {
            borderColor: getBorderColor(isFocused, error),
          },
          containerStyle,
        ]}
      >
        {Boolean(leftComponent) && (
          <View style={{ marginStart: pixelSizeHorizontal(14) }}>
            {leftComponent(valueIsNotEmpty, iconProps)}
          </View>
        )}
        {children}
        {Boolean(rightComponent) && (
          <Pressable
            style={{ marginRight: pixelSizeHorizontal(14) }}
            onPress={onRightComponentPress}
          >
            {rightComponent(iconProps)}
          </Pressable>
        )}
      </View>
      <View style={{ minHeight: heightPixel(20) }}>
        {Boolean(error) && !_.isEmpty(error) && <Text style={{color: COLORS.danger, paddingVertical: 5, paddingHorizontal: 10}}>{error?.message}</Text>}
      </View>
    </>
  );
};

export default ContainerTextInput;
