import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { useState } from "react";
import navigationTheme from "./app/navigation/navigationTheme";
import { AppBottomTabNavigator } from "./app/navigation/ClientNavigation";
import AuthNavigator from "./app/navigation/AuthNavigator";
import Test from "./app/components/Test";
import { AvailableScreen } from "./app/screens/TherapistJourney/HomeScreens";

export default function App() {
  const [user, setUser] = useState(true);

  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? (
        <AppBottomTabNavigator setUser={setUser} />
      ) : (
        <AuthNavigator setUser={setUser} />
      )}
      <StatusBar style="auto" />
    </NavigationContainer>

    // <NavigationContainer theme={navigationTheme}>
    //   <CaseLoadScreen />
    //   <StatusBar
    //     backgroundColor="transparent"
    //     translucent
    //     barStyle={"dark-content"}
    //   />
    // </NavigationContainer>

    // <View style={{ justifyContent: "center", flex: 1 }}>
    //   <AppButton title={"Test"} />
    // </View>
    // <AvailableScreen />
    // <View style={{ flex: 1 }}>
    // </View>
    // <NativeBaseProvider>
    //   <Center flex={1} px="3">
    //   </Center>
    // </NativeBaseProvider>
  );
}
