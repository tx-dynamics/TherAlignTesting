import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import AppButton from "../../../components/Button";
import CustomModal from "../../../components/CustomModal";
import { hp, wp } from "../../../Helpers/Responsiveness";
import { useNavigation } from "@react-navigation/native";
import { ClientRoutes } from "../../../navigation/Routes";
import ImagesPath from "../../../constants/ImagesPath";

function AppointmentDetailPageScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: wp(2) }}>
          <Header />
        </View>

        <View>
          <ReschedualeAppointment />
        </View>

        <AppButton
          title={"Cancel Appointment"}
          borderWidth={1.5}
          color={colors.white}
          textColor={colors.black}
          style={{ borderColor: colors.primary }}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <View>
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
    </>
  );
}

const Modal = ({ modalVisible, setModalVisible }) => {
  return (
    <CustomModal cardBgColor={colors.lightBlue} modalVisible={modalVisible}>
      <View
        style={{
          paddingVertical: wp(5),
        }}
      >
        <AppText
          style={{
            textAlign: "center",
            marginBottom: wp(5),
          }}
        >
          You want to cancel your appointment?
        </AppText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <AppButton
            title={"Yes"}
            style={{ marginVertical: 0, paddingHorizontal: wp(10) }}
          />
          <AppButton
            title={"No"}
            onPress={() => setModalVisible(false)}
            style={{ marginVertical: 0, paddingHorizontal: wp(10) }}
          />
        </View>
      </View>
    </CustomModal>
  );
};

const ReschedualeAppointment = () => (
  <View
    style={{
      backgroundColor: "#DCEAF4",
      borderRadius: 10,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: hp(2),
      }}
    >
      <MaterialCommunityIcons
        name="calendar"
        size={wp(6)}
        color={colors.primary}
        style={{ marginHorizontal: wp(2) }}
      />
      <AppText>Rescheduale Appointment</AppText>
    </View>

    <View
      style={{ backgroundColor: "white", height: hp(0.2), width: "100%" }}
    />

    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: hp(5),
      }}
    >
      <AppText>Today, Jan 5, 2022</AppText>
      <AppText>09.00 AM - 09.28 AM</AppText>
    </View>
  </View>
);

const Header = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Image
          source={ImagesPath.dr1}
          style={{ width: wp(20), height: hp(10), borderRadius: 20 }}
        />
        <View style={{ marginHorizontal: wp(5) }}>
          <AppText>Virginia Bailey</AppText>
          <AppText>Female</AppText>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate(ClientRoutes.APPOINTMENT_INBOX_SCREEN)}
      >
        <Image
          source={ImagesPath.messanger}
          resizeMode="contain"
          style={{
            width: wp(15),
            height: hp(10),
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    padding: wp(2),
    justifyContent: "space-between",
  },
});

export default AppointmentDetailPageScreen;
