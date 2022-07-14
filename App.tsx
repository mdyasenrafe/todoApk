import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/View/Screens/Home";
import Create from "./src/View/Screens/Todo/Create";
import Edit from "./src/View/Screens/Todo/Edit";
import { Signin } from "./src/View/Screens/Signin";
import { SignUp } from "./src/View/Screens/SignUp";

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/Font/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/Font/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./assets/Font/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const Stack: any = createNativeStackNavigator();
  const user: boolean = false;

  const AppTheme: any = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="create" component={Create} />
            <Stack.Screen name="edit" component={Edit} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
