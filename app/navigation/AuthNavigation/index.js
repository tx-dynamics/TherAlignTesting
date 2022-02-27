import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SelectionOfUserScreen,
  LoginOrSignUpScreen,
  LoginScreen,
  SuccessfulPasswordChangeScreen,
  SignUpScreen,
} from "../../screens/AuthScreens";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { hp, wp } from "../../Helpers/Responsiveness";
import colors from "../../config/colors";

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

function AuthNavigator({ setUser }) {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            height: hp(14),
          },
          headerLeftContainerStyle: {
            justifyContent: "flex-end",
            paddingHorizontal: wp(4),
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
