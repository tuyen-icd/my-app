import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants";
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from "../../utils/scanling";
import { LinearGradient } from "expo-linear-gradient";

enum ButtonSizeEnum {
  "Small",
  "Medium",
  "Large",
}

interface ButtonProps {
  buttonSize?: string;
  text: string;
  textStyle?;
  iconStyles?;
  buttonStyles?;
  onPress: () => void;
  leftComponent?: (iconStyles) => any;
  children?: JSX.Element | JSX.Element[];
}

const Button: FC<ButtonProps> = ({
  text,
  textStyle,
  children,
  buttonSize = ButtonSizeEnum.Large,
  iconStyles = { width: 20, height: 20 },
  buttonStyles,
  leftComponent,
  onPress,
}) => {
  const largeHeight = heightPixel(60);
  const largeWidth = widthPixel(44);
  return (
    <View style={styles.btnWrapper}>
      <LinearGradient
        colors={[COLORS.gradientForm, COLORS.primary]}
        style={styles.linearGradient}
        start={{ y: 0.0, x: 0.0 }}
        end={{ y: 1.0, x: 0.0 }}
      >
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={styles.buttonStyle}
        >
          <View
            style={[
              styles.baseButton,
              { height: buttonSize === "Large" ? largeHeight : largeWidth },
              buttonStyles,
            ]}
          >
            {Boolean(leftComponent) ? (
              <View style={{ marginStart: pixelSizeHorizontal(14), backgroundColor: 'red' }}>
                {leftComponent(iconStyles)}
              </View>
            ) : null}
            {Boolean(children) ? (
              children
            ) : (
              <View style={styles.textWrap}>
                <Text style={[styles.baseTextButton, textStyle]}>{text}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  baseButton: {
    width: "100%",
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  baseTextButton: {
    fontSize: fontPixel(18),
    color: COLORS.white,
  },
  textWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    width: "100%",
    borderRadius: 50,
  },
  buttonStyle: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
  },

  btnWrapper: {
    width: '100%',
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
});
