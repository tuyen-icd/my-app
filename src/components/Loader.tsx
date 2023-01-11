import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Loader = (isVisible: any, showLoadingView = false) => {
  return (
    <View
      style={[
        styles.container,
        { width: isVisible ? "100%" : "0%", height: isVisible ? "100%" : "0%" },
      ]}
    >
      {!showLoadingView && (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          animating={isVisible}
        />
      )}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 5,
  },
});
