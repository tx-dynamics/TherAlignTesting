import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import AppButton from "../../../components/Button";

function ClientProfileScreen(props) {
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
            style={{ width: 80, height: 90, marginRight: 10, borderRadius: 10 }}
          />
          <AppText style={{ fontWeight: "700" }}>Clara</AppText>
        </View>
        <Image
          source={require("../../../assets/images/messanger.png")}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
        />
      </View>
      {/* Client Appointment History */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          paddingVertical: 35,
          backgroundColor: colors.lightGray,
          borderRadius: 20,
          marginVertical: 20,
        }}
      >
        <AppText>Clear Appointment History</AppText>
        <TouchableOpacity>
          <AppText>View</AppText>
        </TouchableOpacity>
      </View>

      {/* Client Mood Calendar */}

      <View
        style={{
          alignItems: "center",
          paddingVertical: 50,
          backgroundColor: colors.lightGray,
          borderRadius: 20,
        }}
      >
        <AppText>Client Mood Calendar</AppText>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="calendar"
              size={25}
              color={colors.primary}
            />
          </TouchableOpacity>
          <AppText>03 Nov 2021</AppText>
          <TouchableOpacity>
            <MaterialCommunityIcons name="chevron-down" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Button */}

      <View style={{ marginTop: 20 }}>
        <AppButton
          title={"Plan of care"}
          borderWidth={1}
          color="white"
          textColor={colors.black}
          style={{ borderColor: colors.primary }}
        />
        <AppButton
          title={"Treatment Plan"}
          borderWidth={1}
          color="white"
          textColor={colors.black}
          style={{ borderColor: colors.primary }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default ClientProfileScreen;
