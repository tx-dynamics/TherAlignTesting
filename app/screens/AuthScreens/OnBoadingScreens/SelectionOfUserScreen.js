import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RadioButtonRN from "radio-buttons-react-native";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { AuthRoutes } from "../../../navigation/Routes";
import { wp } from "../../../Helpers/Responsiveness";

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
          flex: 1,
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <RadioButtonRN
          boxStyle={{ flexDirection: "row-reverse", paddingVertical: wp(4) }}
          textStyle={{ justifyContent: "flex-end" }}
          data={DATA}
          initial={1}
          selectedBtn={(e) => console.log("Selected", e)}
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
    padding: wp(4),
    paddingBottom: wp(12),
  },
});

export default SelectionOfUserScreen;
