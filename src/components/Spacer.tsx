import { View } from "react-native";
import React from "react";
import { heightPixel, widthPixel } from "../utils/scanling";

const Spacer = ({ width = 10, height = 10 }) => {
  return (
    <View
      style={{ width: widthPixel(width), height: heightPixel(height) }}
    ></View>
  );
};

export default Spacer;
