import { StatusBar, View } from "react-native";
import * as Font from "expo-font";
import { MainView } from "./components/MainView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        NotoSans_Light: require("./assets/fonts/NotoSans_Light.ttf"),
        NotoSans_Regular: require("./assets/fonts/NotoSans_Regular.ttf"),
        NotoSans_SemiBold: require("./assets/fonts/NotoSans_SemiBold.ttf"),
        Selawk: require("./assets/fonts/selawk.ttf"),
        SelawkLight: require("./assets/fonts/selawkl.ttf"),
        SelawkSemiBold: require("./assets/fonts/selawksb.ttf"),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainView" component={MainView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
