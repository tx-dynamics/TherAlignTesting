import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import AppButton from "../../../components/Button";
import { wp } from "../../../Helpers/Responsiveness";

function ClientProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/dr1.jpg")}
            style={{
              width: wp(20),
              height: wp(20),
              marginRight: wp(2),
              borderRadius: 10,
            }}
          />
          <AppText style={{ fontWeight: "700" }}>Clara</AppText>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ClientInbox")}>
          <Image
            source={require("../../../assets/images/messanger.png")}
            style={{
              width: wp(15),
              height: wp(15),
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </View>
      {/* Client Appointment History */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: wp(4),
          paddingVertical: wp(8),
          backgroundColor: colors.lightGray,
          borderRadius: 20,
          marginVertical: wp(4),
        }}
      >
        <AppText>Clear Appointment History</AppText>
        <TouchableOpacity
          onPress={() => navigation.navigate("ClientAppointment")}
        >
          <AppText style={{ textDecorationLine: "underline" }}>View</AppText>
        </TouchableOpacity>
      </View>

      {/* Client Mood Calendar */}

      <View
        style={{
          alignItems: "center",
          paddingVertical: wp(10),
          backgroundColor: colors.lightGray,
          borderRadius: 20,
        }}
      >
        <AppText>Client Mood Calendar</AppText>
        <TouchableOpacity
          style={{ flexDirection: "row", paddingTop: wp(2) }}
          onPress={() => navigation.navigate("MoodCalendar")}
        >
          <View>
            <MaterialCommunityIcons
              name="calendar"
              size={25}
              color={colors.primary}
            />
          </View>
          <AppText>03 Nov 2021</AppText>
          <View>
            <MaterialCommunityIcons name="chevron-down" size={25} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Button */}

      <View style={{ marginTop: wp(4) }}>
        <AppButton
          title={"Plan of care"}
          borderWidth={1}
          color="white"
          textColor={colors.black}
          style={{ borderColor: colors.primary, marginBottom: wp(3) }}
          onPress={() => navigation.navigate("PlanOfCare")}
        />
        <AppButton
          title={"Treatment Plan"}
          borderWidth={1}
          color="white"
          textColor={colors.black}
          style={{ borderColor: colors.primary }}
          onPress={() => navigation.navigate("TreatmentPlan")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(4) },
});

export default ClientProfileScreen;
