import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TherapistTab from "./TherapistTab";
import ClientTab from "./ClientTab";
import colors from "../../../config/colors";

const Tab = createMaterialTopTabNavigator();

function AccountScreen() {
  return (
    <Tab.Navigator screenOptions={{ tabBarPressColor: colors.secondary }}>
      <Tab.Screen
        name="ClientTab"
        component={ClientTab}
        options={{ title: "Clients" }}
      />
      <Tab.Screen
        name="TherapistTab"
        component={TherapistTab}
        options={{ title: "Therapist" }}
      />
    </Tab.Navigator>
  );
}

export default AccountScreen;
