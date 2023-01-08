import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function TextInputView({
  style = null,
  placeholder = "",
  onEndEditing = null,
}) {
  const styleView = StyleSheet.create({
    ...style,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  });

  const styleText = StyleSheet.create({
    height: styleView.height - 20,
    width: styleView.width - 20,
    fontSize: styleView.height - 20,
  });

  return (
    <View style={styleView}>
      <TextInput
        style={styleText}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
      />
    </View>
  );
}
