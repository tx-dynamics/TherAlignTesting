import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import Screen from "../../../components/Screen";
import SearchField from "../../../components/SearchField";
import AppButton from "../../../components/Button";
import { wp } from "../../../Helpers/Responsiveness";

function HomeDashboard({ navigation }) {
  const [searchText, setSearchText] = useState("");

  return (
    <Screen style={styles.container}>
      <Header navigation={navigation} />
      <SearchField setSearchText={setSearchText} navigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.lightGray,
            padding: wp(10),
            borderRadius: 20,
          }}
        >
          <AppText>View Client Appointment</AppText>
          <TouchableOpacity
            onPress={() => navigation.navigate("ClientAppointment")}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: wp(2),
              }}
            >
              <MaterialCommunityIcons
                name="calendar"
                size={25}
                color={colors.primary}
              />
              <AppText style={{ marginLeft: wp(2) }}>4 Nov 2021</AppText>
            </View>
          </TouchableOpacity>
        </View>

        {/* Today consultation */}
        <View style={{ marginTop: wp(4) }}>
          <AppText>(2) Today Consultation</AppText>
          <ConsultationCard />
          <ConsultationCard />
        </View>

        <AppButton
          title={"Set Your Availability"}
          onPress={() => navigation.navigate("Available")}
        />
      </ScrollView>
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
      padding: wp(8),
      borderRadius: 20,
      marginBottom: wp(4),
    }}
  >
    <View>
      <Image
        source={require("../../../assets/images/dr1.jpg")}
        style={{ width: wp(20), height: wp(20), borderRadius: 10 }}
      />
      <MaterialCommunityIcons
        name="video"
        size={20}
        color={colors.white}
        style={{
          backgroundColor: "green",
          width: wp(7),
          height: wp(7),
          borderRadius: 10,
          textAlign: "center",
          textAlignVertical: "center",
          position: "absolute",
          right: -5,
          bottom: -5,
        }}
      />
    </View>
    <View style={{ marginHorizontal: wp(5) }}>
      <AppText style={{ marginBottom: wp(3), color: colors.textGray }}>
        Video Call
      </AppText>
      <AppText>Virgenia Bailey</AppText>
      <AppText>09.00 AM - 09.28 PM</AppText>
    </View>
  </View>
);

// Header
const Header = ({ navigation }) => (
  <View style={styles.header}>
    <View style={styles.header_text}>
      <View style={{ flexDirection: "row" }}>
        <AppText
          style={{
            color: colors.primary,
            fontSize: wp(6.4),
            fontWeight: "700",
          }}
        >
          Quote{" "}
        </AppText>
        <AppText style={{ color: colors.secondary, fontSize: wp(6.5) }}>
          of the day
        </AppText>
      </View>
      <AppText style={{ fontSize: wp(4) }}>
        "We cannot change anything until we accept it."
      </AppText>
    </View>
    <TouchableOpacity
      style={styles.bell_container}
      onPress={() => navigation.navigate("Notifications")}
    >
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
