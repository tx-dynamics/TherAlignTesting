import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PracticeTab from "./PracticeTab";
import ClientsTab from "./ClientsTab";

const Tab = createMaterialTopTabNavigator();

function ChatScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ClientsTab"
        component={ClientsTab}
        options={{ title: "Clients" }}
      />
      <Tab.Screen
        name="PracticeTab"
        component={PracticeTab}
        options={{ title: "Practice" }}
      />
    </Tab.Navigator>
  );
}

export default ChatScreen;
