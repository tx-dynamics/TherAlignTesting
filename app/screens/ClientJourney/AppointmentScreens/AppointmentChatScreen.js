import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TherapistChatTab from "./TherapistChatTab";
import PracticeChatTab from "./PracticeChatTab";

const Tab = createMaterialTopTabNavigator();

function AppointmentChatScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PracticeTab"
        component={PracticeChatTab}
        options={{ title: "Practice" }}
      />
      <Tab.Screen
        name="TherapistTab"
        component={TherapistChatTab}
        options={{ title: "Therapist" }}
      />
    </Tab.Navigator>
  );
}

export default AppointmentChatScreen;
