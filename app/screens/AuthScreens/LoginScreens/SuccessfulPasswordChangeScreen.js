import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
import AppButton from "../../../components/Button";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthRoutes } from "../../../navigation/Routes";
import { wp } from "../../../Helpers/Responsiveness";
import ImagesPath from "../../../constants/ImagesPath";

const win = Dimensions.get("window");
function SuccessfulPasswordChangeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            position: "relative",
            width: wp(50),
            height: wp(50),
            resizeMode: "contain",
            alignSelf: "center",
            marginVertical: wp(8),
          }}
          source={ImagesPath.batch}
        />
        <MaterialCommunityIcons
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            width: wp(16),
            height: wp(16),
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
            paddingVertical: wp(4),
            fontSize: wp(6),
          }}
        >
          Congrats!
        </AppText>
        <AppText
          style={{
            textAlign: "center",
            fontSize: wp(4.5),
          }}
        >
          You have successfully changed the password.
        </AppText>
        <AppText
          style={{
            textAlign: "center",
            fontSize: wp(4.5),
            marginBottom: wp(4),
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
    padding: wp(2),
    justifyContent: "center",
  },
});

export default SuccessfulPasswordChangeScreen;
