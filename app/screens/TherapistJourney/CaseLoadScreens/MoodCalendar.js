import moment from "moment";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../../components/Button";
import Calendar from "../../../components/Calendar";
import CustomModal from "../../../components/CustomModal";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { hp, wp } from "../../../Helpers/Responsiveness";

function MoodCalendar(props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  let date = moment(selectedDate).format("DD-MMMM-YYYY").toString();

  return (
    <View style={styles.container}>
      <View>
        <AppText
          style={{ textAlign: "center", fontWeight: "700", fontSize: wp(6) }}
        >
          Mood Calendar
        </AppText>
        <View style={{ height: hp(45) }}>
          <Calendar
            setCalendarDate={setSelectedDate}
            backgroundColor={colors.lightBlue}
          />
        </View>
        <AppButton
          title={"Set Your Mood"}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Modal
        date={date}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const Modal = ({ date, modalVisible, setModalVisible }) => (
  <CustomModal cardBgColor={"#dceaf4"} modalVisible={modalVisible}>
    <MaterialCommunityIcons
      name="close"
      size={25}
      style={{ position: "absolute", right: wp(2), top: wp(2) }}
      onPress={() => setModalVisible(false)}
    />
    <View style={{ padding: wp(5) }}>
      <AppText
        style={{
          backgroundColor: colors.primary,
          padding: wp(2),
          width: wp(30),
          textAlign: "center",
          marginVertical: wp(4),
        }}
      >
        Content
      </AppText>
      <AppText>{date}</AppText>
    </View>
  </CustomModal>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2) },
});

export default MoodCalendar;
