import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import Screen from "../../../components/Screen";
import SearchField from "../../../components/SearchField";
import AppButton from "../../../components/Button";

function HomeDashboard({ navigation }) {
  const [searchText, setSearchText] = useState("");

  return (
    <Screen style={styles.container}>
      <Header />
      <SearchField setSearchText={setSearchText} navigation={navigation} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.lightGray,
          padding: 50,
          borderRadius: 20,
        }}
      >
        <AppText>View Client Appointment</AppText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            top: 10,
          }}
        >
          <MaterialCommunityIcons
            name="calendar"
            size={25}
            color={colors.primary}
          />
          <AppText>4 Nov 2021</AppText>
        </View>
      </View>

      {/* Today consultation */}
      <View style={{ marginTop: 20 }}>
        <AppText>(2) Today Consultation</AppText>
        <ConsultationCard />
        <ConsultationCard />
      </View>

      <AppButton title={"Set Your Availability"} />
    </Screen>
  );
}

const ConsultationCard = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.lightBlue,
      padding: 40,
      borderRadius: 20,
      marginBottom: 20,
    }}
  >
    <View>
      <Image
        source={require("../../../assets/images/dr1.jpg")}
        style={{ width: 70, height: 70, borderRadius: 10 }}
      />
      <MaterialCommunityIcons
        name="video"
        size={25}
        color={colors.white}
        style={{
          backgroundColor: "green",
          height: 30,
          width: 30,
          borderRadius: 10,
          textAlign: "center",
          textAlignVertical: "center",
          position: "absolute",
          right: -5,
          bottom: -5,
        }}
      />
    </View>
    <View style={{ marginHorizontal: 30 }}>
      <AppText style={{ marginBottom: 15, color: colors.textGray }}>
        Video Call
      </AppText>
      <AppText>Virgenia Bailey</AppText>
      <AppText>09.00 AM - 09.28 PM</AppText>
    </View>
  </View>
);

// Header
const Header = () => (
  <View style={styles.header}>
    <View style={styles.header_text}>
      <View style={{ flexDirection: "row" }}>
        <AppText
          style={{ color: colors.primary, fontSize: 28, fontWeight: "700" }}
        >
          Quote{" "}
        </AppText>
        <AppText style={{ color: colors.secondary, fontSize: 28 }}>
          of the day
        </AppText>
      </View>
      <AppText style={{ fontSize: 17 }}>
        "We cannot change anything until we accept it."
      </AppText>
    </View>
    <TouchableOpacity style={styles.bell_container}>
      <FontAwesome
        style={styles.bell_icon}
        name="bell-o"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_text: {
    width: "58%",
  },
  bell_container: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 7,
  },
  bell_icon: {
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#fff",
  },
});

export default HomeDashboard;
