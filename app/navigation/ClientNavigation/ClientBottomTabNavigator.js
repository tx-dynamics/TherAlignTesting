import * as React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../config/colors";
import { StyleSheet } from "react-native";
import AppointmentNavigator from "./AppointmentNavigator";
import { hp, wp } from "../../Helpers/Responsiveness";
import HomeNavigator from "./HomeNavigator";
import MenuNavigator from "./MenuNavigator";
import ChatNavigator from "./ChatNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export default function ClientBottomTabNavigator({ setUser }) {
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
          name="Appointment"
          component={AppointmentNavigator}
        />
        <Tab.Screen
          options={{
            tabBarBadge: 2,
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                name="chat"
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
              <FontAwesome5
                name="user"
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
