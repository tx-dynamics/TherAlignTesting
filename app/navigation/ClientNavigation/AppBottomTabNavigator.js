import * as React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "../../screens/AppChatScreens/ChatScreen";
import ProfileScreen from "../../screens/AppProfileScreens/ProfileScreen";
import colors from "../../config/colors";
import { StyleSheet } from "react-native";
import HomeNavigator from "./HomeNavigator";
import AppointmentNavigator from "./AppointmentNavigator";
import AppMenuScreenNavigator from "../AppMenuScreenNavigator";
import { height, totalSize } from "react-native-dimension";

const Tab = createBottomTabNavigator();

export default function AppBottomTabNavigator({ setUser }) {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#d8e6eb",
            height: height(10),
          },
          tabBarHideOnKeyboard: true,
          tabBarBadgeStyle: {
            top: totalSize(0.9),
            fontSize: totalSize(1.5),
          },
          tabBarLabelStyle: { bottom: totalSize(1.5) },
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
          component={ChatScreen}
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
          component={ProfileScreen}
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
          component={AppMenuScreenNavigator}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
