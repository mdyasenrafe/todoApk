import axios from "axios";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { signUpApi } from "../../API/Index";
import {
  signUpFailAction,
  signUpSuccessAction,
  signUpWithEmail,
} from "../../Redux/Action";
import Button from "../Components/Button";
import Input from "../Components/Input";
import RadioInput from "../Components/RadioInput";
import OwnText from "../Components/Text/OwnText";

const genderOptions: string[] = ["Male", "Female"];

export const Signup = ({ navigation }: any) => {
  // state
  const [gender, setGender] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const handleGender = (option: string): void => {
    setGender(option);
  };

  const dispatch: any = useDispatch();

  const handleSignup = (): void => {
    dispatch(signUpWithEmail(userEmail, password))
      .then(async (res: any) => {
        if (res) {
          let bodyData: SignupBodyData = {
            name: name,
            age: age,
            email: userEmail,
            password: password,
            gender: gender,
          };
          const response = await signUpApi(bodyData);
          if (response?.error !== true) {
            dispatch(signUpSuccessAction(response?.data));
            Toast.show({
              type: "success",
              text1: "signin successfully",
            });
            setTimeout(() => {
              Toast.hide();
            }, 2000);
          }
        }
      })
      .catch((err: any) => {
        Toast.show({
          type: "error",
          text1: err.message,
        });
        setTimeout(() => {
          Toast.hide();
        }, 2000);
        dispatch(signUpFailAction(err.message));
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Input
          password={false}
          title="Email"
          onChangeText={(e: any) => setUserEmail(e)}
          autoCapitalize="none"
        />
        <Input
          password={true}
          title="Password"
          onChangeText={(e: any) => setPassword(e)}
        />
        <Input
          password={false}
          title="Full Name"
          onChangeText={(e: any) => setName(e)}
          autoCapitalize="words"
        />
        <Input
          password={false}
          title="Age"
          onChangeText={(e: any) => setAge(e)}
        />
        {genderOptions.map((option: string, index: number) => (
          <RadioInput
            key={index}
            value={gender}
            label={option}
            onPress={setGender}
          />
        ))}
      </View>
      <View style={styles.bottom}>
        <Button style={styles.button} title="Sign up" onPress={handleSignup} />
        <Pressable onPress={() => navigation.navigate("Signin")}>
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
  button: {
    marginBottom: 24,
  },
  bottom: {
    marginTop: 24,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#CFCFCF",
    marginRight: 20,
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
  radioText: {},
});
