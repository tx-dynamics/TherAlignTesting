import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import ImagesPath from "../../../constants/ImagesPath";
import { hp, wp } from "../../../Helpers/Responsiveness";

const doctors = [
  {
    id: 1,
    name: "Dr Mattie Harper",
    imageUri: ImagesPath.dr1,
    planOfCareLink: "",
  },

  {
    id: 2,
    name: "Dr Clara Thomas",
    imageUri: ImagesPath.dr2,
    planOfCareLink: "",
  },

  {
    id: 3,
    name: "Harpeet",
    imageUri: ImagesPath.dr3,
    planOfCareLink: "",
  },

  {
    id: 4,
    name: "Dr smith",
    imageUri: ImagesPath.dr4,
    planOfCareLink: "",
  },
];

function TherapistPlanOfCareScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {doctors.map((doctor) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={doctor.id}
            onPress={() => navigation.navigate("PlanOfCareScreen")}
          >
            <Doctor doctor={doctor} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const Doctor = ({ doctor }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginVertical: wp(2),
    }}
  >
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Image
        source={doctor.imageUri}
        style={{
          width: wp(15),
          height: wp(15),
          borderRadius: 10,
          marginEnd: wp(2.5),
        }}
      />
      <AppText>{doctor.name}</AppText>
    </View>
    <AppText
      style={{ textDecorationLine: "underline", color: colors.textGray }}
    >
      View
    </AppText>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(5) },
});

export default TherapistPlanOfCareScreen;
