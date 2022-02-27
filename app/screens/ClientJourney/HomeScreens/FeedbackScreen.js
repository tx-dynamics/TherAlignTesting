import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../../../components/TextInput";
import AppButton from "../../../components/Button";
import ListItemSeperator from "../../../components/ListItemSeperator";
import { hp, wp } from "../../../Helpers/Responsiveness";

function FeedbackScreen({ route }) {
  const { therapiDetail } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <AppText>Leave your feedback</AppText>
        <View
          style={{
            flexDirection: "row",
            padding: wp(2),
          }}
        >
          <Image
            source={therapiDetail.imageURI}
            style={{
              width: wp(25),
              height: hp(12.5),
              borderRadius: 10,
              marginEnd: 15,
            }}
          />
          <View style={{ width: "65%" }}>
            <AppText>{therapiDetail.name}</AppText>
            <AppText>{therapiDetail.title}</AppText>
            <AppText>2 Rue de Emithish, Frisange - Luxemburg 4</AppText>
            <AppText>
              {therapiDetail.rating} ({therapiDetail.review})
            </AppText>
          </View>
        </View>
        <ListItemSeperator />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: wp(8),
          }}
        >
          <MaterialCommunityIcons name="star" size={40} color={"gold"} />
          <MaterialCommunityIcons name="star" size={40} color={"gold"} />
          <MaterialCommunityIcons name="star" size={40} color={"gold"} />
          <MaterialCommunityIcons
            name="star-outline"
            size={40}
            color={"gold"}
          />
          <MaterialCommunityIcons
            name="star-outline"
            size={40}
            color={"gold"}
          />
        </View>

        <AppTextInput
          placeholder="Write your feedback..."
          style={{ paddingBottom: wp(40) }}
          handleChangeText={() => {}}
        />
        <View style={{ marginVertical: wp(10) }}>
          <AppButton title={"Add Feedback"} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2) },
});

export default FeedbackScreen;
