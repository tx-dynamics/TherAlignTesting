import { useState } from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
// Navigators
import AuthNavigator from "./app/navigation/AuthNavigation";
import PracticeBottomTabNavigator from "./app/navigation/PracticeNavigation/PracticeBottomTabNavigator";
import TherapistBottomTabNavigator from "./app/navigation/TherapistNavigation/TherapistBottomTabNavigator";
import ClientBottomTabNavigator from "./app/navigation/ClientNavigation/ClientBottomTabNavigator";

export default function App() {
  const [user, serUser] = useState(true);

  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        {user ? <ClientBottomTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
