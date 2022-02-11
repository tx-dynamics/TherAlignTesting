import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OnlineConsultencyAppointmentTab from "./OnlineConsultencyAppointmentTab";
import InPersonAppointmentTab from "./InPersonAppointmentTab";

const Tab = createMaterialTopTabNavigator();

function AppointmentScreen() {
  return (
    <Tab.Navigator>
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
