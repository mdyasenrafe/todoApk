import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/View/Screens/Home";
import Create from "./src/View/Screens/Todo/Create";
import Edit from "./src/View/Screens/Todo/Edit";
import { Signin } from "./src/View/Screens/Signin";
import { Signup } from "./src/View/Screens/Signup";
import { Provider, useDispatch } from "react-redux";
import AuthStore from "./Store";
import { useEffect } from "react";
import { onAuthChange } from "./src/Redux/Action";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./Navigation/Navigation";

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/Font/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/Font/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./assets/Font/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={AuthStore}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
