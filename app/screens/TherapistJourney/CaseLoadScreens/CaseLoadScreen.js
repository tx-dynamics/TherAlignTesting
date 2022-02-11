import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppText from "../../../components/Text";
import InPersonCaseLoadTab from "./InPersonCaseLoadTab";
import OnlineConsultencyCaseLoadTab from "./OnlineConsultencyCaseLoadTab";

const Tab = createMaterialTopTabNavigator();

function CaseLoadScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="OnlineConsultencyTab"
        component={OnlineConsultencyCaseLoadTab}
        options={{ title: "Online Consultency" }}
      />
      <Tab.Screen
        name="InPersonAppointmentTab"
        component={InPersonCaseLoadTab}
        options={{ title: "In Person Appointment" }}
      />
    </Tab.Navigator>
  );
}

export default CaseLoadScreen;
