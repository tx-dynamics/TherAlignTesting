import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import Screen from "../../../components/Screen";
import SearchField from "../../../components/SearchField";
import { wp, hp } from "../../../Helpers/Responsiveness";
import ListItemSeperator from "../../../components/ListItemSeperator";
import ImagesPath from "../../../constants/ImagesPath";

function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  return (
    <Screen style={styles.container}>
      <Header navigation={navigation} />
      <SearchField
        placeholder="Search Client, Therapist."
        setSearchText={setSearchText}
      />
      {searchText.length > 0 ? (
        <SearchView navigation={navigation} />
      ) : (
        <HomeView setSearchText={setSearchText} navigation={navigation} />
      )}
    </Screen>
  );
}

// Header
const Header = ({ navigation }) => (
  <View style={styles.header}>
    <View style={styles.header_text}>
      <View style={{ flexDirection: "row" }}>
        <AppText
          style={{
            color: colors.primary,
            fontSize: wp(6.4),
            fontWeight: "700",
          }}
        >
          Quote{" "}
        </AppText>
        <AppText style={{ color: colors.secondary, fontSize: wp(6.5) }}>
          of the day
        </AppText>
      </View>
      <AppText style={{ fontSize: wp(4) }}>
        "We cannot change anything until we accept it."
      </AppText>
    </View>
    <TouchableOpacity
      style={styles.bell_container}
      onPress={() => navigation.navigate("NotificationScreen")}
    >
      <FontAwesome
        style={styles.bell_icon}
        name="bell-o"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  </View>
);

const HomeView = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.lightGray,
          padding: wp(10),
          borderRadius: 20,
        }}
      >
        <AppText>View Client Appointment</AppText>
        <TouchableOpacity
          onPress={() => navigation.navigate("CalendarAppointmentScreen")}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: wp(2),
            }}
          >
            <MaterialCommunityIcons
              name="calendar"
              size={25}
              color={colors.primary}
            />
            <AppText style={{ marginLeft: wp(2) }}>4 Nov 2021</AppText>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const SearchView = ({ navigation }) => {
  const TherapistList = [
    {
      id: 1,
      name: "Dr Mattie Harper",
      imageUri: ImagesPath.dr1,
      title: "Therapist",
      rating: 2,
      review: 122,
    },

    {
      id: 2,
      name: "Dr Clara Thomas",
      imageUri: ImagesPath.dr2,
      title: "Therapist",
      rating: 4,
      review: 142,
    },

    {
      id: 3,
      name: "Harpeet",
      imageUri: ImagesPathImagesPath.dr3,
      title: "Therapist",
      rating: 5,
      review: 222,
    },

    {
      id: 4,
      name: "Dr smith",
      imageUri: ImagesPath.dr4,
      title: "Therapist",
      rating: 1,
      review: 12,
    },
  ];

  return (
    <ScrollView>
      {TherapistList.map((therapi) => (
        <React.Fragment key={therapi.id}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("TherapistProfileScreen", {
                therapiDetail: therapi,
              })
            }
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: wp(4),
                marginTop: wp(4),
                alignItems: "flex-end",
              }}
            >
              <Image
                source={therapi.imageUri}
                style={{
                  width: wp(20),
                  height: hp(10),
                  borderRadius: 10,
                  marginEnd: wp(3),
                }}
              />
              <View style={{ flexGrow: 1 }}>
                <AppText>{therapi.name}</AppText>
                <AppText>{therapi.title}</AppText>
                <AppText>**** ({therapi.review})</AppText>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("InboxScreen")}
              >
                <AppText
                  style={{
                    color: colors.primary,
                    textDecorationLine: "underline",
                    fontSize: wp(3.5),
                    padding: wp(2),
                  }}
                >
                  Message
                </AppText>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <ListItemSeperator />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_text: {
    width: "58%",
  },
  bell_container: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    width: wp(12),
    aspectRatio: 1,
    borderRadius: wp(5),
    overflow: "hidden",
    marginVertical: wp(2),
  },
  bell_icon: {
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
