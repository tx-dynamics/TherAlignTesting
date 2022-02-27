import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import AppTextInput from "../../../components/TextInput";
import colors from "../../../config/colors";
import { hp, wp } from "../../../Helpers/Responsiveness";

function InboxScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AppText>9.40 AM</AppText>
        <View style={{ flexDirection: "row", marginVertical: wp(10) }}>
          <Image
            source={require("../../../assets/images/dr1.jpg")}
            style={{
              width: wp(7),
              height: hp(3.5),
              borderRadius: 10,
              alignSelf: "flex-end",
              marginEnd: wp(2),
            }}
          />
          <View style={{ padding: wp(1) }}>
            <AppText
              style={{
                backgroundColor: "#dceaf4",
                textAlignVertical: "center",
                padding: wp(3),
                marginTop: wp(2),
                borderRadius: 15,
                borderBottomLeftRadius: 0,
              }}
            >
              Hi, Dr. Martin. How're you ?
            </AppText>
            <AppText
              style={{
                backgroundColor: "#dceaf4",
                textAlignVertical: "center",
                padding: wp(3),
                marginTop: wp(2),
                borderRadius: 15,
                borderBottomLeftRadius: 0,
              }}
            >
              I have case related to your speciality. Maybe you can help
            </AppText>

            <AppText
              style={{
                backgroundColor: "#dceaf4",
                textAlignVertical: "center",
                padding: wp(3),
                marginTop: wp(2),
                borderRadius: 15,
                borderBottomLeftRadius: 0,
              }}
            >
              I sent you patient contact. pls check it!
            </AppText>
          </View>
        </View>
      </View>

      {/* Text Input */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: wp(5),
        }}
      >
        <View
          style={{
            backgroundColor: colors.primary,
            width: wp(10),
            height: hp(5),
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="attachment" size={25} color={colors.white} />
        </View>
        <View style={{ flex: 1, marginHorizontal: wp(4) }}>
          <AppTextInput />
        </View>
        <View
          style={{
            backgroundColor: colors.primary,
            width: wp(10),
            height: hp(5),
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="send" size={25} color={colors.white} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(4), justifyContent: "flex-end" },
});

export default InboxScreen;
