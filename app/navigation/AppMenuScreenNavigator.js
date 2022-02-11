import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppMenuScreen from "../screens/AppMenuScreens/AppMenuScreen";
import TherapistStats from "../screens/AppMenuScreens/TherapistStats";

const Stack = createStackNavigator();

const LeftButton = ({ props }) => (
  <TouchableOpacity activeOpacity={0.5} {...props}>
    <MaterialCommunityIcons
      style={{
        marginVertical: 7,
        width: 50,
        height: 50,
        borderRadius: 20,
        textAlign: "center",
        textAlignVertical: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        backgroundColor: "#fff",
        elevation: 20,
      }}
      name="arrow-left"
      size={24}
      color="black"
    />
  </TouchableOpacity>
);

function AppMenuScreenNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          height: 120,
        },
        headerLeftContainerStyle: {
          paddingHorizontal: 20,
        },
        headerRightContainerStyle: {
          paddingHorizontal: 20,
        },
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
        }}
        name="AppMenu"
        component={AppMenuScreen}
      />
      <Stack.Screen
        name="TherapistStats"
        component={TherapistStats}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppMenuScreenNavigator;
