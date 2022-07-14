import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../Components/Text/Button";
import Input from "../Components/Text/Input";
import OwnText from "../Components/Text/OwnText";

export const Signin = ({ navigation }: { navigation: any }) => {
  const handleLogin = (): void => {
    console.log("object");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../../assets/Svg/Login.png")}
        style={{
          alignSelf: "center",
          width: "100%",
          height: 350,
          margin: 14,
        }}
      />
      <OwnText style={{ textAlign: "center" }} preset="h6">
        Never forget your notes
      </OwnText>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input password={false} title="Email" />
        <Input password={true} title="Password" />
      </View>
      <View style={styles.bottom}>
        <Button style={styles.button} title="Login" onPress={handleLogin} />
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <OwnText preset="p">
            Don't have an account?{" "}
            <OwnText preset="h6" style={{ color: "green" }}>
              Sign up
            </OwnText>
          </OwnText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 24,
  },
});
