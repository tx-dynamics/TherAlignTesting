import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ClientRoutes } from "../navigation/Routes";
import { wp } from "../Helpers/Responsiveness";

function SearchField({
  navigation,
  setSearchText,
  location,
  placeholder = "Search Therapist, Practice",
}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="search" size={30} color={colors.medium} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => setSearchText(text)}
      />

      {location && (
        <TouchableOpacity
          onPress={() => navigation.navigate(ClientRoutes.HOME_MAP_SCREEN)}
        >
          <MaterialCommunityIcons
            style={styles.map_btn}
            name="map-marker"
            size={25}
            color={colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: wp(4.5),
  },
  input: {
    position: "relative",
    flex: 1,
    borderRadius: 2,
    borderColor: colors.dark,
    borderWidth: 0.2,
    padding: wp(2),
    paddingLeft: wp(10),
    fontSize: wp(4),
  },
  icon: {
    position: "absolute",
    height: "100%",
    marginHorizontal: wp(2),
    justifyContent: "center",
    zIndex: 1,
  },
  map_btn: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp(2.5),
    marginLeft: wp(2),
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 2,
    borderColor: colors.dark,
    borderWidth: 0.2,
  },
});

export default SearchField;
