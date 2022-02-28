import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import Navigator from "./app/Testing/Navigator";

export default function App() {
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <Navigator />
      </NavigationContainer>
    </>
  );
}
