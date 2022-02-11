import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import Screen from "../../components/Screen";
import AppText from "../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItemSeperator from "../../components/ListItemSeperator";
import colors from "../../config/colors";

function AppMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
        underlayColor={colors.gray}
        onPress={() => navigation.navigate("TherapistStats")}
      >
        <>
          <AppText>Statistics</AppText>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </>
      </TouchableHighlight>
      <ListItemSeperator />

      <View style={{ padding: 10 }}>
        <AppText>Signout</AppText>
      </View>
      <ListItemSeperator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default AppMenuScreen;
