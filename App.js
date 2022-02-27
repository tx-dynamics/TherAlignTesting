import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import navigationTheme from "./app/navigation/navigationTheme";

import { ClientBottomTabNavigator } from "./app/navigation/ClientNavigation";
import PracticeBottomTabNavigator from "./app/navigation/PracticeNavigation/PracticeBottomTabNavigator";
import TherapistBottomTabNavigator from "./app/navigation/TherapistNavigation/TherapistBottomTabNavigator";
import AuthNavigator from "./app/navigation/AuthNavigation";

export default function App() {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? (
        <TherapistBottomTabNavigator setUser={setUser} />
      ) : (
        <AuthNavigator setUser={setUser} />
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
