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
import OwnText from "../Components/Text/OwnText";

export const SignUp = () => {
  const handleLogin = (): void => {
    console.log("object");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Age" />
      </View>
      <View style={styles.bottom}>
        <Button style={styles.button} title="Sign up" onPress={handleLogin} />
        <Pressable>
          <OwnText preset="p">
            Already have an acceount?{" "}
            <OwnText preset="h6" style={{ color: "green" }}>
              Sign in
            </OwnText>
          </OwnText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 48,
    marginBottom: 25,
  },
  button: {
    marginBottom: 24,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 24,
  },
});
