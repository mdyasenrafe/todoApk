import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "../../Components/Input";
import RadioInput from "../../Components/RadioInput";
import { SafeAreaView } from "react-native-safe-area-context";
import OwnText from "../../Components/Text/OwnText";
import Button from "../../Components/Button";

const noteColorOption = ["red", "green", "blue"];

export default function Create() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [theme, setTheme] = useState<string>("blue");

  const handleCreate = () => {
    console.log(title, description, theme);
  };

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Input
        title="Title"
        password={false}
        onChangeText={(title: any) => setTitle(title)}
      />
      <Input
        title="Description"
        password={false}
        onChangeText={(description: any) => setDescription(description)}
        multiline={true}
      />
      <View style={{ marginVertical: 15 }}>
        <OwnText>Select Your Todo Color</OwnText>
      </View>
      {noteColorOption.map((color: string, index: number) => (
        <RadioInput
          key={index}
          value={theme}
          label={color}
          onPress={setTheme}
        />
      ))}
      <Button title={"Submit"} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    alignSelf: "center",
    width: "100%",
  },
});
