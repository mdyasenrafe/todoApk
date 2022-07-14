import React from "react";
import { StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import OwnText from "./OwnText";

export default function Button(props: buttonProps) {
  const { title, style: customStyle, onPress } = props;
  return (
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
      <OwnText preset="p">{title}</OwnText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 165,
    height: 48,
    backgroundColor: "#FFE600",
    justifyContent: "center",
    alignItems: "center",
  },
});
