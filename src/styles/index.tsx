import { StyleSheet } from "react-native";

export const flex = StyleSheet.create({
  center: {
    alignContent: "center",
    justifyContent: "center",
  },
  start: {
    justifyContent: "flex-start",
  },
});

export const border = StyleSheet.create({
  round: {
    borderRadius: 8,
  },
  enable: {
    borderWidth: 0.8,
  },
});
