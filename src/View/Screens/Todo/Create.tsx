import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "../../Components/Input";
import RadioInput from "../../Components/RadioInput";
import OwnText from "../../Components/Text/OwnText";
import Button from "../../Components/Button";
import { createTodoApi } from "../../../API/Index";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";

const noteColorOption: string[] = ["orange", "green", "blue"];

export default function Create({ navigation }: any) {
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [theme, setTheme] = useState<string>("blue");
  const { email } = useSelector((state: any) => state);

  const handleCreate = async () => {
    setLoading(true);
    let bodyData: CreateTodoBodyData = {
      title,
      description,
      theme,
      email: email?.user?.email,
    };
    const res = await createTodoApi(bodyData);
    if (res?.error == false) {
      setLoading(false);
      Toast.show({
        type: "success",
        text1: "todo Created successfully",
      });
      navigation.navigate("Home");
    } else {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "todo Created failed. Try Agian",
      });
    }
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
          index={index}
          value={theme}
          label={color}
          onPress={setTheme}
        />
      ))}
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title={"Submit"} style={styles.button} onPress={handleCreate} />
      )}
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
