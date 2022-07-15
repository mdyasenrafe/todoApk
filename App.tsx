import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Provider, useDispatch } from "react-redux";
import AuthStore from "./Store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./Navigation/Navigation";
import Toast from "react-native-toast-message";

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
      <StatusBar />
      <Toast />
    </Provider>
  );
}
