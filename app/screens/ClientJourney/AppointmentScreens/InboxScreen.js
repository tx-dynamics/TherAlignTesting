import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import AppTextInput from "../../../components/TextInput";
import colors from "../../../config/colors";

function InboxScreen({ navigation }) {
  navigation.setOptions({ tabBarVisible: false });

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AppText>9.40 AM</AppText>
        <View style={{ flexDirection: "row", marginVertical: 30 }}>
          <Image
            source={require("../../../assets/images/dr1.jpg")}
            style={{
              width: 30,
              height: 30,
              borderRadius: 10,
              alignSelf: "flex-end",
              marginEnd: 10,
            }}
          />
          <View>
            <AppText
              style={{
                backgroundColor: "#dceaf4",
                textAlignVertical: "center",
                padding: 15,
                marginTop: 10,
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
                padding: 15,
                marginTop: 10,
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
                padding: 15,
                marginTop: 10,
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
          marginVertical: 40,
        }}
      >
        <View
          style={{
            backgroundColor: colors.primary,
            width: 45,
            height: 45,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="attachment" size={25} color={colors.white} />
        </View>
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <AppTextInput />
        </View>
        <View
          style={{
            backgroundColor: colors.primary,
            width: 45,
            height: 45,
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
  container: { flex: 1, padding: 20, justifyContent: "flex-end" },
});

export default InboxScreen;
