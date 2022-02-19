import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
import AppButton from "../../../components/Button";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fontSize } from "../../../config/fonts";
import { AuthRoutes } from "../../../navigation/Routes";

const win = Dimensions.get("window");
function SuccessfulPasswordChangeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            position: "relative",
            width: win.width / 2,
            height: win.width / 2,
            resizeMode: "contain",
            alignSelf: "center",
            marginVertical: 40,
          }}
          source={require("../../../assets/images/batch.png")}
        />
        <MaterialCommunityIcons
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            width: 80,
            height: 80,
            borderRadius: 40,
            textAlignVertical: "center",
            textAlign: "center",
          }}
          name="check-bold"
          size={50}
          color={"green"}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <AppText
          style={{
            fontWeight: "700",
            paddingVertical: 20,
            fontSize: fontSize.h5,
          }}
        >
          Congrats!
        </AppText>
        <AppText
          style={{
            textAlign: "center",
            fontSize: fontSize.medium,
          }}
        >
          You have successfully changed the password.
        </AppText>
        <AppText
          style={{
            textAlign: "center",
            fontSize: fontSize.medium,
            marginBottom: 20,
          }}
        >
          Please use the new password when logging in.
        </AppText>
        <AppButton
          title={"Log In"}
          onPress={() => navigation.navigate(AuthRoutes.LOGIN_SCREEN)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
});

export default SuccessfulPasswordChangeScreen;
