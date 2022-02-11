import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Screen from "../../../components/Screen";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import SearchField from "../../../components/SearchField";
import Calendar from "../../../components/Calendar";
import Cards from "../../../components/Cards";
import { height, width } from "react-native-dimension";
import { fontSize } from "../../../config/fonts";

const MoodsList = [
  {
    id: "1",
    mood: "CALM",
    borderColor: colors.primary,
    backgroundcolor: "#fff",
  },
  {
    id: "2",
    mood: "HAPPY",
    borderColor: "green",
    backgroundcolor: "#fff",
  },
  {
    id: "3",
    mood: "SO_SO",
    borderColor: "lightpink",
    backgroundcolor: "#fff",
  },
  {
    id: "4",
    mood: "SAD",
    borderColor: "orange",
    backgroundcolor: "#fff",
  },
  {
    id: "5",
    mood: "Angry",
    borderColor: "red",
    backgroundcolor: "#fff",
  },
];

const DescriptionList = [
  { id: 1, title: "Content", backgroundColor: colors.primary },
  { id: 2, title: "Inspired", backgroundColor: colors.secondary },
  { id: 3, title: "Satisfied", backgroundColor: colors.primary },
  { id: 4, title: "Peaceful", backgroundColor: colors.primary },
  { id: 5, title: "Relieved", backgroundColor: colors.secondary },
  { id: 6, title: "Hopeful", backgroundColor: colors.primary },
  { id: 7, title: "Connected", backgroundColor: colors.secondary },
  { id: 8, title: "Balanced", backgroundColor: colors.primary },
  { id: 9, title: "Comfortable", backgroundColor: colors.secondary },
];

const TherapistList = [
  {
    id: 1,
    name: "Dr Mattie Harper",
    imageUri: require("../../../assets/images/dr1.jpg"),
    title: "Therapist",
    rating: 2,
    review: 122,
  },

  {
    id: 2,
    name: "Dr Clara Thomas",
    imageUri: require("../../../assets/images/dr2.jpg"),
    title: "Therapist",
    rating: 4,
    review: 142,
  },

  {
    id: 3,
    name: "Harpeet",
    imageUri: require("../../../assets/images/dr3.jpg"),
    title: "Therapist",
    rating: 5,
    review: 222,
  },

  {
    id: 4,
    name: "Dr smith",
    imageUri: require("../../../assets/images/dr4.jpg"),
    title: "Therapist",
    rating: 1,
    review: 12,
  },
];

function HomeScreen({ navigation }) {
  const [calendarDate, setCalendarDate] = useState();
  const [searchText, setSearchText] = useState("");

  return (
    <Screen style={styles.container}>
      <Header />
      <SearchField
        setSearchText={setSearchText}
        location={true}
        navigation={navigation}
      />

      {searchText.length > 0 ? (
        <SearchView TherapistList={TherapistList} />
      ) : (
        <HomeView
          MoodsList={MoodsList}
          DescriptionList={DescriptionList}
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
        />
      )}
    </Screen>
  );
}

const HomeView = ({
  MoodsList,
  DescriptionList,
  calendarDate,
  setCalendarDate,
}) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <AppText>Set your daily mood</AppText>
      <View style={{ marginVertical: height(1) }}>
        <HorizontalColorfulCardList Data={MoodsList} />
      </View>
    </View>
    <Cards Data={DescriptionList} calendarDate={calendarDate} />
    <Calendar setCalendarDate={setCalendarDate} />
  </ScrollView>
);

const SearchView = ({ TherapistList }) => (
  <ScrollView>
    {TherapistList.map((therapi) => (
      <View key={therapi.id} style={{ flexDirection: "row", marginBottom: 15 }}>
        <Image
          source={therapi.imageUri}
          style={{
            width: 80,
            height: 80,
            borderRadius: 10,
            marginEnd: 15,
          }}
        />
        <View>
          <AppText>{therapi.name}</AppText>
          <AppText>{therapi.title}</AppText>
          <AppText>
            {therapi.rating} {therapi.review}
          </AppText>
        </View>
      </View>
    ))}
  </ScrollView>
);

// Start Header

const Header = () => (
  <View style={styles.header}>
    <View style={styles.header_text}>
      <View style={{ flexDirection: "row" }}>
        <AppText
          style={{ color: colors.primary, fontSize: 28, fontWeight: "700" }}
        >
          Quote{" "}
        </AppText>
        <AppText style={{ color: colors.secondary, fontSize: 28 }}>
          of the day
        </AppText>
      </View>
      <AppText style={{ fontSize: 17 }}>
        "We cannot change anything until we accept it."
      </AppText>
    </View>
    <TouchableOpacity style={styles.bell_container}>
      <FontAwesome
        style={styles.bell_icon}
        name="bell-o"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  </View>
);

// End Header

// Start Daily Moods

function HorizontalColorfulCardList({ Data }) {
  const [List, setList] = useState(Data);

  const handleBackgroundColor = (item) => {
    let categesJSON = JSON.parse(JSON.stringify(List));

    for (let x = 0; x < categesJSON.length; x++) {
      if (categesJSON[x].id == item.id) {
        categesJSON[x].backgroundcolor = categesJSON[x].borderColor;
        setList(categesJSON);
      } else {
        categesJSON[x].backgroundcolor = "#fff";
        setList(categesJSON);
      }
    }
  };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Moods List={List} onChangeBackground={handleBackgroundColor} />
    </ScrollView>
  );
}

const Moods = ({ List, onChangeBackground }) => (
  <View style={styles.moods}>
    {List.map((item, key) => (
      <TouchableOpacity
        key={key}
        style={{
          width: width(16.6),
          height: height(9),
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderStyle: "dotted",
          borderColor: item.borderColor,
          backgroundColor: item.backgroundcolor,
          borderRadius: 5,
          marginHorizontal: width(0.8),
        }}
        onPress={() => {
          onChangeBackground(item);
          console.log(item);
        }}
      >
        <AppText
          style={{
            fontWeight: "700",
            fontSize: fontSize.regular,
            color: item.backgroundcolor === "#fff" ? "#000" : "#fff",
          }}
        >
          {item.mood.toUpperCase()}
        </AppText>
      </TouchableOpacity>
    ))}
  </View>
);

// End Daily Moods

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
    width: width(55),
  },
  bell_container: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
  },
  bell_icon: {
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#fff",
  },
  moods: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
