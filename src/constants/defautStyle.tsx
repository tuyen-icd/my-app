import { StyleSheet } from "react-native";

export const defaultStyle = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexCenterContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
