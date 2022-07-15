import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthChange } from "../src/Redux/Action";
import Home from "../src/View/Screens/Home";
import { Signin } from "../src/View/Screens/Signin";
import { Signup } from "../src/View/Screens/Signup";
import Create from "../src/View/Screens/Todo/Create";
import Edit from "../src/View/Screens/Todo/Edit";

export function RootNavigator() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(onAuthChange());
  }, []);

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
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
