import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import RadioButtonRN from "radio-buttons-react-native";
import AppText from "../../../components/Text";

import colors from "../../../config/colors";
import { AuthRoutes } from "../../../navigation/Routes";

const DATA = [
  { id: 1, label: "Client" },
  { id: 2, label: "Therapist" },
  { id: 3, label: "Practice" },
];

const SelectionOfUserScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <RadioButtonRN
          boxStyle={{ flexDirection: "row-reverse", paddingVertical: 20 }}
          textStyle={{ justifyContent: "flex-end" }}
          data={DATA}
          initial={1}
          selectedBtn={(e) => console.log("Selected")}
          circleSize={18}
          icon={
            <MaterialCommunityIcons
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: "green",
                borderRadius: 50,
              }}
              name="check"
              size={22}
              color="green"
            />
          }
        />
      </View>

      <AppText
        style={{
          color: colors.primary,
        }}
        onPress={() => navigation.navigate(AuthRoutes.LOGIN_OR_SIGNUP_SCREEN)}
      >
        Continue{" "}
        <MaterialCommunityIcons
          name="arrow-right"
          size={22}
          color={colors.primary}
        />
      </AppText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
    paddingBottom: 60,
  },
});

export default SelectionOfUserScreen;
