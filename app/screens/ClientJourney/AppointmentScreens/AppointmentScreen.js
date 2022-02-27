import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OnlineConsultencyAppointmentTab from "./OnlineConsultencyAppointmentTab";
import InPersonAppointmentTab from "./InPersonAppointmentTab";
import colors from "../../../config/colors";

const Tab = createMaterialTopTabNavigator();

function AppointmentScreen() {
  return (
    <Tab.Navigator screenOptions={{ tabBarPressColor: colors.lightBlue }}>
      <Tab.Screen
        name="OnlineConsultencyTab"
        component={OnlineConsultencyAppointmentTab}
        options={{ title: "Online Consultency" }}
      />
      <Tab.Screen
        name="InPersonAppointmentTab"
        component={InPersonAppointmentTab}
        options={{ title: "In Person Appointment" }}
      />
    </Tab.Navigator>
  );
}

export default AppointmentScreen;
