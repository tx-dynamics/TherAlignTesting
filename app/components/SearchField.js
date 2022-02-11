import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ClientRoutes } from "../navigation/Routes";

function SearchField({ navigation, setSearchText, location }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="search" size={30} color={colors.medium} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search Therapist, Practice"
        onChangeText={(text) => setSearchText(text)}
      />

      {location && (
        <TouchableOpacity
          onPress={() => navigation.navigate(ClientRoutes.HOME_MAP_SCREEN)}
        >
          <MaterialCommunityIcons
            style={styles.map_btn}
            name="map-marker"
            size={30}
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
    marginVertical: 25,
  },
  input: {
    position: "relative",
    flex: 1,
    borderRadius: 2,
    borderColor: colors.dark,
    borderWidth: 0.2,
    padding: 10,
    paddingLeft: 50,
    fontSize: 18,
  },
  icon: {
    position: "absolute",
    height: "100%",
    marginHorizontal: 10,
    justifyContent: "center",
    zIndex: 1,
  },
  map_btn: {
    backgroundColor: "#fff",
    marginLeft: 10,
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 2,
    borderColor: colors.dark,
    borderWidth: 0.2,
  },
});

export default SearchField;
