import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../../components/Text";

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>SplashScreen</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SplashScreen;
