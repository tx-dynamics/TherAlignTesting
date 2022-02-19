import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import AppText from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomModal from "./CustomModal";
import colors from "../config/colors";
import { width, totalSize } from "react-native-dimension";
import { fontSize } from "../config/fonts";
import moment from "moment";

function Cards({ Data, calendarDate }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [cardDetail, setCardDetail] = useState();

  return (
    <View style={styles.container}>
      {Data.map((detail) => (
        <Card
          key={detail.id}
          detail={detail}
          modalVisible={modalVisible}
          setCardDetail={setCardDetail}
          setModalVisible={setModalVisible}
        />
      ))}
      <Modal
        cardDetail={cardDetail}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        calendarDate={calendarDate}
      />
    </View>
  );
}

const Card = ({ detail, setModalVisible, setCardDetail }) => (
  <TouchableOpacity
    key={detail.id}
    style={[styles.card, { backgroundColor: detail.backgroundColor }]}
    onPress={() => {
      setModalVisible(true);
      setCardDetail(detail);
    }}
  >
    <AppText
      style={{
        color: "#fff",
        fontSize: fontSize.small,
      }}
    >
      {detail.title.toUpperCase()}
    </AppText>
  </TouchableOpacity>
);

const Modal = ({ modalVisible, setModalVisible, cardDetail, calendarDate }) => {
  return (
    <View style={styles.container} onTouchStart={() => setModalVisible(false)}>
      <CustomModal modalVisible={modalVisible} cardBgColor={colors.white}>
        <MaterialCommunityIcons
          name="checkbox-marked-circle-outline"
          size={25}
          color={colors.green}
        />
        <Pressable style={[styles.button, styles.buttonClose]}>
          <AppText style={styles.textStyle}>
            {cardDetail && cardDetail.title}
          </AppText>
        </Pressable>
        <AppText>You mood is successfully set</AppText>
        <AppText>
          {calendarDate && moment(calendarDate).format("DD-MMMM-YYYY")}
        </AppText>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: width(26),
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: totalSize(0.5),
    marginHorizontal: 3,
    borderRadius: 5,
    flexGrow: 1,
  },
  // Modal Style
  button: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 2,
    marginVertical: 20,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Cards;
