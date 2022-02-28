import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { hp, wp } from "../Helpers/Responsiveness";
import colors from "../config/colors";

import AuthNavigator from "../navigation/AuthNavigation";
import TherapistBottomTabNavigator from "../navigation/TherapistNavigation/TherapistBottomTabNavigator";
import PracticeBottomTabNavigator from "../navigation/PracticeNavigation/PracticeBottomTabNavigator";
import { ClientBottomTabNavigator } from "../navigation/ClientNavigation";
import AllNavigatorScreen from "./AllNavigatorScreen";

const Stack = createStackNavigator();

const LeftButton = ({ props }) => (
  <TouchableOpacity activeOpacity={0.5} {...props}>
    <MaterialCommunityIcons
      style={{
        width: wp(12),
        height: wp(12),
        marginVertical: 7,
        borderRadius: 20,
        borderWidth: 0.7,
        borderColor: colors.textGray,
        textAlign: "center",
        textAlignVertical: "center",
        shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.65,
        backgroundColor: "#fff",
        elevation: 6,
      }}
      name="arrow-left"
      size={25}
      color="black"
    />
  </TouchableOpacity>
);

function TestNavigator() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="AllNavigatorScreen"
        screenOptions={{
          headerShown: false,

          // headerLeftContainerStyle: {
          //   justifyContent: "flex-end",
          //   paddingHorizontal: wp(4),
          // },
        }}
      >
        <Stack.Screen
          name="AllNavigatorScreen"
          component={AllNavigatorScreen}
        />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Client" component={ClientBottomTabNavigator} />
        <Stack.Screen
          name="Therapist"
          component={TherapistBottomTabNavigator}
        />
        <Stack.Screen name="Practice" component={PracticeBottomTabNavigator} />
      </Stack.Navigator>
    </>
  );
}

export default TestNavigator;
