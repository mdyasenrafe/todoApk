import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAuthChange } from "../src/Redux/Action";
import Home from "../src/View/Screens/Home";
import { Signin } from "../src/View/Screens/Signin";
import { Signup } from "../src/View/Screens/Signup";
import Create from "../src/View/Screens/Todo/Create";
import Edit from "../src/View/Screens/Todo/Edit";

export function RootNavigator() {
  const dispatch: any = useDispatch();

  const { email } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(onAuthChange());
  }, []);

  const Stack: any = createNativeStackNavigator();

  const AppTheme: any = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };

  if (email?.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {!email?.loading && email?.user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="create" component={Create} />
            <Stack.Screen name="update" component={Edit} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
