import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import AppText from "../../../../components/Text";

const doctors = [
  {
    id: 1,
    name: "Dr Mattie Harper",
    imageUri: require("../../../../assets/images/dr1.jpg"),
    planOfCareLink: "",
  },

  {
    id: 2,
    name: "Dr Clara Thomas",
    imageUri: require("../../../../assets/images/dr2.jpg"),
    planOfCareLink: "",
  },

  {
    id: 3,
    name: "Harpeet",
    imageUri: require("../../../../assets/images/dr3.jpg"),
    planOfCareLink: "",
  },

  {
    id: 4,
    name: "Dr smith",
    imageUri: require("../../../../assets/images/dr4.jpg"),
    planOfCareLink: "",
  },
];

function TherapistPlanOfCareScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} key={doctor.id} />
        ))}
      </ScrollView>
    </View>
  );
}

const Doctor = ({ doctor }) => (
  <View
    style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }}
  >
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Image
        source={doctor.imageUri}
        style={{ width: 50, height: 50, borderRadius: 10, marginEnd: 15 }}
      />
      <AppText>{doctor.name}</AppText>
    </View>
    <AppText>View</AppText>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default TherapistPlanOfCareScreen;
