import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "../../Components/Input";
import RadioInput from "../../Components/RadioInput";
import OwnText from "../../Components/Text/OwnText";
import Button from "../../Components/Button";
import { updateTodoApi } from "../../../API/Index";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";

const noteColorOption: string[] = ["orange", "green", "blue"];

export default function Edit({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { item } = route.params;

  const [title, setTitle] = useState<string>(item?.title);
  const [description, setDescription] = useState<string>(item.description);
  const [theme, setTheme] = useState<string>(item.theme);
  const [loading, setLoading] = useState<boolean>(false);
  const { email } = useSelector((state: any) => state);

  const handleUpdate = async () => {
    setLoading(true);
    let bodyData: CreateTodoBodyData = {
      title,
      description,
      theme,
      _id: item?._id,
    };
    const res = await updateTodoApi(bodyData);
    console.log(res);
    if (res?.error == false && res.data.modifiedCount > 0) {
      setLoading(false);
      Toast.show({
        type: "success",
        text1: "Updated successfully",
      });
      navigation.navigate("Home");
    } else {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "todo updated failed. Try Agian",
      });
    }
  };

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Input
        title="Title"
        password={false}
        onChangeText={(title: any) => setTitle(title)}
        value={title}
      />
      <Input
        title="Description"
        password={false}
        onChangeText={(description: any) => setDescription(description)}
        multiline={true}
        value={description}
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
        <Button title={"Update"} style={styles.button} onPress={handleUpdate} />
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
