import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import AppText from "../../../components/Text";
import { wp } from "../../../Helpers/Responsiveness";
import CalendarAppointmentScreen from "./CalendarAppointmentScreen";

function TherapistDetailScreen({ route }) {
  const { detail } = route.params;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: wp(15),
        }}
      >
        <Image
          source={detail.imageUri}
          style={{ width: wp(30), height: wp(35) }}
        />
        <View style={{ width: wp(50) }}>
          <AppText>
            <AppText style={{ fontWeight: "700" }}>Name:</AppText>{" "}
            {detail.username}
          </AppText>
          <AppText>
            <AppText style={{ fontWeight: "700" }}>City:</AppText> Sheikhupura
          </AppText>
          <AppText>
            <AppText style={{ fontWeight: "700" }}>Email:</AppText>{" "}
            DrTabinada@gmail.com
          </AppText>
          <AppText>
            <AppText style={{ fontWeight: "700" }}>Address:</AppText> Commercial
            Area near H/M
          </AppText>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <AppText style={{ textAlign: "center", fontSize: wp(5) }}>
          Booked Appointments
        </AppText>
        <View style={{ flex: 1 }}>
          <CalendarAppointmentScreen />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: wp(4),
  },
});

export default TherapistDetailScreen;
