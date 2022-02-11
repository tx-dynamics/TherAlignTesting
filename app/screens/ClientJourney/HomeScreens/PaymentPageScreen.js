import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../../../components/Screen";
import AppText from "../../../components/Text";

function PaymentPageScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppText>Payment Detail</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaymentPageScreen;
