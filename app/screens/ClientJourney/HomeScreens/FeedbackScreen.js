import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../../../components/TextInput";
import AppButton from "../../../components/Button";
import ListItemSeperator from "../../../components/ListItemSeperator";

function FeedbackScreen({ route }) {
  const { therapiDetail } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <AppText>Leave your feedback</AppText>
        <View
          style={{
            flexDirection: "row",
            // width: 350,
            padding: 10,
          }}
        >
          <Image
            source={therapiDetail.imageURI}
            style={{ width: 100, height: 120, borderRadius: 10, marginEnd: 15 }}
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
            marginVertical: 30,
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
          style={{ paddingBottom: 200 }}
        />
        <View style={{ marginVertical: 30 }}>
          <AppButton title={"Add Feedback"} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default FeedbackScreen;
