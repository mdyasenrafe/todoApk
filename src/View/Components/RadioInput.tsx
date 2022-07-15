import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import OwnText from "./Text/OwnText";

interface RadioInputProps {
  key: number;
  value: string | null;
  label: string;
  onPress: (value: string) => void;
}

const RadioInput = (props: RadioInputProps) => {
  const { key, value, label, onPress } = props;
  const selected = label === value;
  return (
    <Pressable
      key={key}
      onPress={() => onPress(label)}
      style={styles.radioContainer}
    >
      <View
        style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
      >
        <View
          style={[styles.innerCircle, selected && styles.selectdInnerCircle]}
        />
      </View>
      <OwnText>{label}</OwnText>
    </Pressable>
  );
};

export default RadioInput;

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#CFCFCF",
    marginRight: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 25,
    borderColor: "#CFCFCF",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOuterCircle: {
    borderColor: "orange",
  },
  selectdInnerCircle: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
});
