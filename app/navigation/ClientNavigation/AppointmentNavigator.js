import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppointmentScreen from "../../screens/ClientJourney/AppointmentScreens/AppointmentScreen";
import InboxScreen from "../../screens/ClientJourney/AppointmentScreens/InboxScreen";
import AppointmentChatScreen from "../../screens/ClientJourney/AppointmentScreens/AppointmentChatScreen";
import AppointmentDetailPageScreen from "../../screens/ClientJourney/AppointmentScreens/AppointmentDetailPageScreen";

const Stack = createStackNavigator();

const LeftButton = ({ props }) => (
  <TouchableOpacity activeOpacity={0.5} {...props}>
    <MaterialCommunityIcons
      style={{
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

function AppointmentNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="AppointmentScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          height: 120,
        },
        headerLeftContainerStyle: {
          paddingHorizontal: 20,
        },
      }}
    >
      <Stack.Screen
        name="ApointmentScreen"
        component={AppointmentScreen}
        options={{ headerShown: true, headerTitle: "Appointments" }}
      />
      <Stack.Screen
        name="AppointmentTherapistAddress"
        component={AppointmentDetailPageScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
      <Stack.Screen
        name="AppointmentChat"
        component={AppointmentChatScreen}
        options={{ headerShown: true, headerTitle: "Chat" }}
      />
      <Stack.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          headerShown: true,
          headerTitle: "Inbox",
          headerTitleAlign: "center",
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppointmentNavigator;
