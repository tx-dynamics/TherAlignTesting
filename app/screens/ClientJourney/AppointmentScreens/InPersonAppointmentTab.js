import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Screen from "../../../components/Screen";
import AppText from "../../../components/Text";
import AppTextInput from "../../../components/TextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import { hp, wp } from "../../../Helpers/Responsiveness";
import { ClientRoutes } from "../../../navigation/Routes";
import ImagesPath from "../../../constants/ImagesPath";

function OnlineConsultencyAppointmentTab({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppTextInput
        placeholder="Search Therapist, Practice"
        searchIcon
        iconAlign="left"
        handleChangeText={() => {}}
      />
      <ScrollView style={{ marginTop: wp(5) }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              ClientRoutes.APPOINTMENT_THERAPIST_ADDRESS_SCREEN
            )
          }
        >
          <CallCards />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              ClientRoutes.APPOINTMENT_THERAPIST_ADDRESS_SCREEN
            )
          }
        >
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
        padding: wp(6),
        borderRadius: 20,
        flexDirection: "row",
        overflow: "hidden",
        marginBottom: wp(5),
      }}
    >
      {/* Card Image */}
      <View style={{ flexDirection: "row" }}>
        <Image
          source={ImagesPath.dr1}
          style={{
            width: wp(20),
            height: hp(9),
            overflow: "hidden",
            borderRadius: 20,
            borderBottomRightRadius: 10,
          }}
        />
        <View
          style={{
            width: wp(7),
            height: hp(3.5),
            borderRadius: 10,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: -8,
            right: -8,
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

      <View style={{ marginHorizontal: wp(5) }}>
        <AppText style={{ color: colors.medium, marginVertical: wp(1) }}>
          Video call
        </AppText>
        <AppText>Virginia Bailey</AppText>
        <AppText>9.00 AM - 8.10 PM</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2) },
});

export default OnlineConsultencyAppointmentTab;
