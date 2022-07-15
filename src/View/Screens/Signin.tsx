import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { signinApi } from "../../API/Index";
import Toast from "react-native-toast-message";
import {
  signInWithEmail,
  signUpFailAction,
  signUpSuccessAction,
} from "../../Redux/Action";
import Button from "../Components/Button";
import Input from "../Components/Input";
import OwnText from "../Components/Text/OwnText";

export const Signin = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const dispatch: any = useDispatch();
  const handleLogin = (): void => {
    if (email !== "" && password !== "") {
      dispatch(signInWithEmail(email, password))
        .then(async (res: any) => {
          let bodyData: SigninBodyData = {
            email: email,
          };
          console.log(res);
          const response = await signinApi(bodyData);
          if (response.error === false) {
            dispatch(signUpSuccessAction(response.data));
            Toast.show({
              type: "success",
              text1: "signin successfully",
            });
            setTimeout(() => {
              Toast.hide();
            }, 2000);
          }
        })
        .catch((err: any) => {
          dispatch(signUpFailAction(err.message));
          Toast.show({
            type: "error",
            text1: err.message,
          });
          setTimeout(() => {
            Toast.hide();
          }, 2000);
        });
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../../assets/Svg/Login.png")}
        style={{
          alignSelf: "center",
          width: "100%",
          height: 300,
          margin: 14,
        }}
      />
      <OwnText style={{ textAlign: "center" }} preset="h6">
        Never forget your notes
      </OwnText>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input
          password={false}
          title="Email"
          onChangeText={(e: any) => setEmail(e)}
          autoCapitalize="none"
        />
        <Input
          password={true}
          title="Password"
          onChangeText={(e: any) => setPassword(e)}
        />
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
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
  },
});
