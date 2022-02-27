import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../../../components/TextInput";
import colors from "../../../config/colors";
import AppText from "../../../components/Text";
import { wp } from "../../../Helpers/Responsiveness";

function OnlineConsultencyCaseLoadTab({ navigation }) {
  return (
    <View style={styles.container}>
      <AppTextInput
        placeholder="Search Therapist, Practice"
        searchIcon
        iconAlign="left"
        handleChangeText={() => {}}
      />
      <ScrollView style={{ marginTop: wp(4) }}>
        <TouchableOpacity onPress={() => navigation.navigate("ClientProfile")}>
          <CallCards />
        </TouchableOpacity>
        <CallCards />
      </ScrollView>
    </View>
  );
}

const CallCards = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#DCEAF4",
        width: "100%",
        padding: wp(5),
        paddingHorizontal: wp(6),
        borderRadius: 20,
        flexDirection: "row",
        overflow: "hidden",
        marginBottom: wp(4),
      }}
    >
      {/* Card Image */}
      <View>
        <Image
          source={require("../../../assets/images/dr1.jpg")}
          style={{
            width: wp(20),
            height: wp(20),
            borderRadius: 20,
          }}
        />
        <View
          style={{
            width: wp(7),
            height: wp(7),
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
            name="video-outline"
            size={20}
            color={"white"}
          />
        </View>
      </View>

      {/* Content */}

      <View style={{ marginHorizontal: wp(4) }}>
        <AppText style={{ color: colors.medium, marginVertical: wp(1.5) }}>
          Video call
        </AppText>
        <AppText>Virginia Bailey</AppText>
        <AppText>9.00 AM - 8.10 PM</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(4) },
});

export default OnlineConsultencyCaseLoadTab;
