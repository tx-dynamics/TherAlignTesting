import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import AppButton from "../../../components/Button";
import CustomModal from "../../../components/CustomModal";
import { height, totalSize, width } from "react-native-dimension";

function AppointmentDetailPageScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 10 }}>
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
          padding: 10,
        }}
      >
        <AppText
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          You want to cancel your appointment?
        </AppText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <AppButton
            title={"Yes"}
            style={{ marginVertical: 0, paddingHorizontal: 50 }}
          />
          <AppButton
            title={"No"}
            onPress={() => setModalVisible(false)}
            style={{ marginVertical: 0, paddingHorizontal: 50 }}
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
        paddingVertical: height(2),
      }}
    >
      <MaterialCommunityIcons
        name="calendar"
        size={totalSize(2)}
        color={colors.primary}
        style={{ marginHorizontal: width(2) }}
      />
      <AppText>Rescheduale Appointment</AppText>
    </View>

    <View
      style={{ backgroundColor: "white", height: height(0.2), width: "100%" }}
    />

    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: height(5),
      }}
    >
      <AppText>Today, Jan 5, 2022</AppText>
      <AppText>09.00 AM - 09.28 AM</AppText>
    </View>
  </View>
);

const Header = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../../assets/images/dr1.jpg")}
        style={{ width: width(20), height: height(10), borderRadius: 20 }}
      />
      <View style={{ marginHorizontal: width(5) }}>
        <AppText>Virginia Bailey</AppText>
        <AppText>Female</AppText>
      </View>
    </View>
    <Image
      source={require("../../../assets/images/messanger.png")}
      resizeMode="contain"
      style={{
        width: width(15),
        height: height(10),
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    padding: totalSize(1),
    justifyContent: "space-between",
  },
});

export default AppointmentDetailPageScreen;
