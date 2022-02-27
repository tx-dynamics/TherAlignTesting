import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../config/colors";
import { StyleSheet } from "react-native";
import HomeNavigator from "./HomeNavigator";
import { hp, wp } from "../../Helpers/Responsiveness";
import CaseLoadNavigator from "./CaseLoadNavigator";
import { ChatScreen } from "../../screens/TherapistJourney/ChatScreens";
import { ProfileScreen } from "../../screens/TherapistJourney/ProfileScreens";
import MenuScreen from "../../screens/TherapistJourney/MenuScreens/MenuScreen";
import MenuNavigator from "./MenuNavigator";
import ChatNavigator from "./ChatNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export default function TherapistBottomTabNavigator({ setUser }) {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#d8e6eb",
            height: hp(10),
          },
          tabBarHideOnKeyboard: true,
          tabBarBadgeStyle: {
            top: wp(3),
            fontSize: wp(3),
          },
          tabBarLabelStyle: { bottom: wp(4) },
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                name="home"
                size={size}
                color={color}
                style={
                  focused && {
                    color: colors.primary,
                    borderTopWidth: 4,
                    borderTopColor: colors.primary,
                    textAlign: "center",
                    height: "100%",
                    width: "80%",
                    textAlignVertical: "center",
                  }
                }
              />
            ),
          }}
          name="Home"
          component={HomeNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                name="medical-services"
                size={size}
                color={color}
                style={
                  focused && {
                    color: colors.primary,
                    borderTopWidth: 4,
                    borderTopColor: colors.primary,
                    textAlign: "center",
                    height: "100%",
                    width: "80%",
                    textAlignVertical: "center",
                  }
                }
              />
            ),
          }}
          name="CaseLoad"
          component={CaseLoadNavigator}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                name="medical-services"
                size={size}
                color={color}
                style={
                  focused && {
                    color: colors.primary,
                    borderTopWidth: 4,
                    borderTopColor: colors.primary,
                    textAlign: "center",
                    height: "100%",
                    width: "80%",
                    textAlignVertical: "center",
                  }
                }
              />
            ),
          }}
          name="Chat"
          component={ChatNavigator}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                name="person-outline"
                size={size}
                color={color}
                style={
                  focused && {
                    color: colors.primary,
                    borderTopWidth: 4,
                    borderTopColor: colors.primary,
                    textAlign: "center",
                    height: "100%",
                    width: "80%",
                    textAlignVertical: "center",
                  }
                }
              />
            ),
          }}
          name="Profile"
          component={ProfileNavigator}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                name="menu"
                size={size}
                color={color}
                style={
                  focused && {
                    color: colors.primary,
                    borderTopWidth: 4,
                    borderTopColor: colors.primary,
                    textAlign: "center",
                    height: "100%",
                    width: "80%",
                    textAlignVertical: "center",
                  }
                }
              />
            ),
          }}
          name="Menu"
          component={MenuNavigator}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
