import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MapScreen,
  HomeScreen,
  FeedbackScreen,
  PaymentPageScreen,
  SlotSelectingScreen,
  CalendarAppointmentScreen,
} from "../../screens/ClientJourney/HomeScreens";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TherapistProfileScreen from "../../screens/ClientJourney/HomeScreens/TherapistProfileScreen";
import colors from "../../config/colors";

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

function HomeNavigator(props) {
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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
      <Stack.Screen
        name="TherapistProfile"
        component={TherapistProfileScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: { height: 120, backgroundColor: colors.gray },
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
      <Stack.Screen
        name="CalendarAppointment"
        component={CalendarAppointmentScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerRight: (props) => (
            <MaterialCommunityIcons
              {...props}
              name="calendar"
              size={25}
              color={colors.primary}
            />
          ),
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
      <Stack.Screen
        name="SlotSelecting"
        component={SlotSelectingScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
      <Stack.Screen
        name="PaymentPage"
        component={PaymentPageScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: (props) => <LeftButton props={props} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
