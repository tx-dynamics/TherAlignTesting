import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PracticeStatsTab from "./PracticeStatsTab";
import TherapistStatsTab from "./TherapistStatsTab";

const Tab = createMaterialTopTabNavigator();

function StatsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TherapistTab"
        component={TherapistStatsTab}
        options={{ title: "Therapist Stats" }}
      />
      <Tab.Screen
        name="PracticeStatsTab"
        component={PracticeStatsTab}
        options={{ title: "Practice Stats" }}
      />
    </Tab.Navigator>
  );
}

export default StatsScreen;
