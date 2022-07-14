import { StyleSheet, Text } from "react-native";
import React from "react";
import { presets, TextPresets } from "./Text.Preset";

interface TextProps {
  children: any;
  preset?: TextPresets;
  style?: any;
}

export default function OwnText(props: TextProps) {
  const { children, preset = "default", style: styleOverride } = props;
  const styles = StyleSheet.compose(
    presets[preset] || presets.default,
    styleOverride
  );
  return <Text style={styles}>{children}</Text>;
}
