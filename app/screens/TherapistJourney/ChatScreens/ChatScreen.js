import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TherapistChatTab from "./TherapistChatTab";
import PracticeChatTab from "./PracticeChatTab";
import colors from "../../../config/colors";

const Tab = createMaterialTopTabNavigator();

function ChatScreen() {
  return (
    <Tab.Navigator screenOptions={{ tabBarPressColor: colors.secondary }}>
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

export default ChatScreen;
