import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input(props: InputProps) {
  const { title, password, onChangeText, autoCapitalize, multiline, value } =
    props;
  return (
    <TextInput
      style={styles.input}
      placeholder={title}
      onChangeText={onChangeText}
      secureTextEntry={password}
      autoCapitalize={autoCapitalize}
      multiline={multiline}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 48,
    marginBottom: 25,
  },
});
