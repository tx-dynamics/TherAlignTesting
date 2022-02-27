import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../../../components/Button";
import ListItemSeperator from "../../../components/ListItemSeperator";
import Screen from "../../../components/Screen";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { hp, wp } from "../../../Helpers/Responsiveness";

function TherapistProfileScreen({ route, navigation }) {
  const { therapiDetail } = route.params;

  return (
    <Screen style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={therapiDetail.imageUri}
          style={{ width: wp(28), height: hp(14), borderRadius: 10 }}
        />
        <View style={{ marginHorizontal: wp(3), flexGrow: 1 }}>
          <AppText>{therapiDetail.name}</AppText>
          <AppText>{therapiDetail.title}</AppText>
          <AppText>***** ({therapiDetail.rating})</AppText>
        </View>
        <Image
          source={require("../../../assets/images/messanger.png")}
          style={{ width: wp(9), height: wp(8) }}
        />
      </View>

      <AppText
        style={{
          textAlign: "center",
          marginVertical: wp(4),
          padding: wp(2),
        }}
      >
        Feedback
      </AppText>
      <ListItemSeperator />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2) },
});

export default TherapistProfileScreen;
