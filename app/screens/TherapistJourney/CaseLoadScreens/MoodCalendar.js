import moment from "moment";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppButton from "../../../components/Button";
import Calendar from "../../../components/Calendar";
import CustomModal from "../../../components/CustomModal";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function MoodCalendar(props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  let date = moment(selectedDate).format("DD-MMMM-YYYY").toString();

  return (
    <View style={styles.container}>
      <View>
        <AppText style={{ textAlign: "center", fontWeight: "700" }}>
          Mood Calendar
        </AppText>
        <View style={{ height: height(45) }}>
          <Calendar
            setCalendarDate={setSelectedDate}
            backgroundColor={colors.lightBlue}
          />
        </View>
      </View>
      <AppButton
        title={"Set Your Mood"}
        onPress={() => setModalVisible(true)}
      />
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
      name="close-outline"
      size={25}
      style={{ position: "absolute", right: 10, top: 10 }}
      onPress={() => setModalVisible(false)}
    />
    <View style={{ padding: 30 }}>
      <AppText
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          width: width(30),
          textAlign: "center",
          marginVertical: 20,
        }}
      >
        Content
      </AppText>
      <AppText>{date}</AppText>
    </View>
  </CustomModal>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default MoodCalendar;
