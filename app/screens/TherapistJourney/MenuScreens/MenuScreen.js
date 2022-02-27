import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import { wp } from "../../../Helpers/Responsiveness";
import colors from "../../../config/colors";
import ListItemSeperator from "../../../components/ListItemSeperator";

function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: wp(2),
        }}
        underlayColor={colors.gray}
        onPress={() => navigation.navigate("TherapistStatsScreen")}
      >
        <>
          <AppText>Statistics</AppText>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </>
      </TouchableHighlight>
      <ListItemSeperator />

      <View style={{ padding: wp(2) }}>
        <AppText>Signout</AppText>
      </View>
      <ListItemSeperator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2) },
});

export default MenuScreen;
