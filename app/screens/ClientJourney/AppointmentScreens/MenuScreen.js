import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../../../components/Screen";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItemSeperator from "../../../components/ListItemSeperator";

function MenuScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <AppText style={{ flex: 1 }}>Plan of care</AppText>
        <MaterialCommunityIcons name="chevron-right" size={25} />
      </View>
      <ListItemSeperator />

      <View style={{ marginVertical: 20 }}>
        <AppText>SignOut</AppText>
        <ListItemSeperator />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingVertical: 50 },
});

export default MenuScreen;
