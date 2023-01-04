import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants";
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from "../../utils/scanling";

enum ButtonSizeEnum {
  "Small",
  "Medium",
  "Large",
}

interface ButtonProps {
  buttonSize?: string;
  text: string;
  textStyle?;
  children?: JSX.Element;
  iconStyles?;
  buttonStyle?;
  onPress: () => void;
  leftComponent?: (iconStyles) => any;
}

const Button: FC<ButtonProps> = ({
  text,
  textStyle,
  children,
  buttonSize = ButtonSizeEnum.Large,
  iconStyles = { width: 20, height: 20 },
  buttonStyle,
  leftComponent,
  onPress,
}) => {

    const largeHeight = heightPixel(60);
    const largeWidth = widthPixel(44);
  return (
    <Pressable onPress={onPress}>
        <View style={[styles.baseButton, { height: buttonSize === 'Large' ? largeHeight : largeWidth}, buttonStyle ]}>
            {
                Boolean(leftComponent) ? (
                    <View style={{marginStart: pixelSizeHorizontal(14)}}>
                        {leftComponent(iconStyles)}
                    </View>
                ) : null
            }
            {
                Boolean(children) ? (children ) : (
                    <View style={styles.textWrap}>
                        <Text style={[styles.baseTextButton, textStyle]}>{text}</Text>
                    </View>
                )
            }
        </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    baseButton: {
        width: '100%',
        backgroundColor: COLORS.danger,
        borderRadius: 5,
    },
    baseTextButton: {
        fontSize: fontPixel(18),
        color: COLORS.white,
    },
    textWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
