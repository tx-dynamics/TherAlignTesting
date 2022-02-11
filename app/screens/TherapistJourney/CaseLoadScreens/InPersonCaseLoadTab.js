import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../../components/Screen";
import AppText from "../../../components/Text";
import AppTextInput from "../../../components/TextInput";
import colors from "../../../config/colors";

function InPersonCaseLoadTab({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppTextInput
        placeholder="Search Therapist, Practice"
        searchIcon
        iconAlign="left"
      />
      <ScrollView style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AppointmentTherapistAddress")}
        >
          <CallCards />
        </TouchableOpacity>
        <TouchableOpacity>
          <CallCards />
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}

const CallCards = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#DCEAF4",
        width: "100%",
        padding: 25,
        paddingHorizontal: 30,
        borderRadius: 20,
        flexDirection: "row",
        overflow: "hidden",
        marginBottom: 20,
      }}
    >
      {/* Card Image */}
      <View>
        <Image
          source={require("../../../assets/images/dr1.jpg")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={20}
            color={"white"}
          />
        </View>
      </View>

      {/* Content */}

      <View style={{ marginHorizontal: 20 }}>
        <AppText style={{ color: colors.medium, marginVertical: 5 }}>
          Appointment
        </AppText>
        <AppText>Virginia Bailey</AppText>
        <AppText>9.00 AM - 8.10 PM</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default InPersonCaseLoadTab;
