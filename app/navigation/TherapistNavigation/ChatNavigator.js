import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MenuScreen } from "../../screens/TherapistJourney/MenuScreens";
import { TherapistStats } from "../../screens/TherapistJourney/MenuScreens";
import { hp, wp } from "../../Helpers/Responsiveness";
import colors from "../../config/colors";
import { ChatScreen } from "../../screens/TherapistJourney/ChatScreens";
import { InboxScreen } from "../../screens/TherapistJourney/CaseLoadScreens";

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
      size={24}
      color="black"
    />
  </TouchableOpacity>
);

function ChatNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          height: hp(14),
        },
        headerLeftContainerStyle: {
          paddingHorizontal: wp(4),
        },
        headerRightContainerStyle: {
          paddingHorizontal: wp(4),
        },
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: { height: hp(14) },
        }}
        name="ChatScreen"
        component={ChatScreen}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: (props) => <LeftButton props={props} />,
        }}
        name="InboxScreen"
        component={InboxScreen}
      />
    </Stack.Navigator>
  );
}

export default ChatNavigator;
