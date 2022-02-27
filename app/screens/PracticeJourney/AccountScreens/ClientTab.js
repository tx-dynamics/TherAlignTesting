import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import AppText from "../../../components/Text";
import AppTextInput from "../../../components/TextInput";
import colors from "../../../config/colors";
import { wp } from "../../../Helpers/Responsiveness";

const messages = [
  {
    id: 1,
    username: "Dr. John Smith",
    imageUri: require("../../../assets/images/dr1.jpg"),
  },
  {
    id: 2,
    username: "Dr. Lina Thomsan",
    imageUri: require("../../../assets/images/dr2.jpg"),
  },
  {
    id: 3,
    username: "Dr. Dylan Oliver",
    imageUri: require("../../../assets/images/dr3.jpg"),
  },
];

function ClientTab({ navigation }) {
  return (
    <View style={styles.container}>
      <AppTextInput
        searchIcon
        placeholder="Search Practice"
        iconAlign="left"
        handleChangeText={() => {}}
      />

      <ScrollView style={{ marginVertical: wp(4) }}>
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const MessageCard = ({ message, navigation }) => (
  <TouchableHighlight
    style={{
      paddingHorizontal: wp(1),
      paddingVertical: wp(3),
    }}
    onPress={() =>
      navigation.navigate("TherapistDetailScreen", { detail: message })
    }
    underlayColor={colors.lightGray}
  >
    <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <Image
        source={message.imageUri}
        style={{ width: wp(15), height: wp(15), borderRadius: 10 }}
      />
      <View
        style={{
          alignSelf: "center",
          marginLeft: wp(2.5),
          flex: 1,
        }}
      >
        <AppText>{message.username}</AppText>
      </View>
      <AppText
        style={{
          alignSelf: "center",
          color: colors.textGray,
          textDecorationLine: "underline",
        }}
      >
        View
      </AppText>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(4) },
});

export default ClientTab;
