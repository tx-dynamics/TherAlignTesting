import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SelectionOfUserScreen,
  LoginOrSignUpScreen,
  LoginScreen,
  SuccessfulPasswordChangeScreen,
  SignUpScreen,
} from "../screens/AuthScreens";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

function AuthNavigator({ setUser }) {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            height: 120,
          },
          headerLeftContainerStyle: {
            justifyContent: "flex-end",
            paddingHorizontal: 20,
          },
        }}
      >
        <Stack.Screen
          name="SelectionOfUserScreen"
          component={SelectionOfUserScreen}
        />
        <Stack.Screen
          name="LoginOrSignUpScreen"
          component={LoginOrSignUpScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="SuccessfulPasswordChangeScreen"
          component={SuccessfulPasswordChangeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: (props) => <LeftButton props={props} />,
          }}
          name="SignUpScreen"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigator;
