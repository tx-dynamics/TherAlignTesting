import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppText from "../../../components/Text";
import CalendarStrip from "react-native-calendar-strip";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../../../components/Button";
import { ClientRoutes } from "../../../navigation/Routes";
import { hp, wp } from "../../../Helpers/Responsiveness";
import ImagesPath from "../../../constants/ImagesPath";

function SlotSelectingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={ImagesPath.dr1}
            style={{ width: wp(20), height: hp(10), borderRadius: 10 }}
          />
          <View style={{ marginHorizontal: wp(3) }}>
            <AppText>Dr. Thomsan</AppText>
            <AppText>Therapist</AppText>
            <AppText>***** (25)</AppText>
          </View>
        </View>

        {/* Time slot */}
        <View
          style={{
            flex: 1,
            // backgroundColor: "red",
            justifyContent: "space-evenly",
          }}
        >
          <AppText style={{ textAlign: "center" }}>
            Select single or multiple time slot
          </AppText>
          <CalendarStrip
            // scrollable
            style={{ height: hp(10) }}
            calendarHeaderStyle={{
              color: "gray",
              fontSize: wp(4),
              textDecorationLine: "underline",
            }}
            dateNumberStyle={{ color: "gray", fontSize: wp(3) }}
            dateNameStyle={{ color: "#000", fontSize: wp(3) }}
            // iconContainer={{ flex: 0.1 }}
            highlightDateNameStyle={{ color: colors.primary, fontSize: wp(3) }}
            highlightDateNumberStyle={{
              color: colors.primary,
              fontSize: wp(3),
            }}
            // optional
            iconLeftStyle={{ display: "none" }}
            iconRightStyle={{ display: "none" }}
            showDayName={true}
            showDayNumber={false}
            dayContainerStyle={"dayContainerStyle"}
            calendarHeaderFormat={"D MMMM YY"}
            // calendarHeaderStyle={{}}
            onHeaderSelected={({ weekStartDate, weekEndDate }) =>
              console.log(weekStartDate, weekEndDate)
            }
          />
          {/* Cards */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="chevron-left" size={20} />
            <HorizontalCardsList />
            <MaterialCommunityIcons name="chevron-right" size={20} />
          </View>
          <View />
          <View />
        </View>

        {/* Cost and Book now button */}

        <View>
          <AppText style={{ textAlign: "center" }}>Cost: $100</AppText>
          <AppButton
            title={"Book Now"}
            style={{ marginVertical: wp(4) }}
            onPress={() =>
              navigation.navigate(ClientRoutes.HOME_PAYMENT_PAGE_SCREEN)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}

// Cardlist Data

const timeStamps = [
  [
    { id: 1, time: "1pm to 1.30pm", minute: "30", backgroundColor: "white" },
    { id: 2, time: "1.30pm to 2.00pm", minute: "30", backgroundColor: "white" },
    { id: 3, time: "2.00pm to 2.30pm", minute: "30", backgroundColor: "white" },
    { id: 4, time: "2.30pm to 3.00pm", minute: "30", backgroundColor: "white" },
  ],
  [
    { id: 1, time: "1pm to 1.30pm", minute: "30" },
    { id: 2, time: "1.30pm to 2.00pm", minute: "30" },
    { id: 3, time: "2.00pm to 2.30pm", minute: "30" },
    { id: 4, time: "2.30pm to 3.00pm", minute: "30" },
  ],
  [
    { id: 1, time: "1pm to 1.30pm", minute: "30" },
    { id: 2, time: "1.30pm to 2.00pm", minute: "30" },
    { id: 3, time: "2.00pm to 2.30pm", minute: "30" },
    { id: 4, time: "2.30pm to 3.00pm", minute: "30" },
  ],
  [
    { id: 1, time: "1pm to 1.30pm", minute: "30" },
    { id: 2, time: "1.30pm to 2.00pm", minute: "30" },
    { id: 3, time: "2.00pm to 2.30pm", minute: "30" },
    { id: 4, time: "2.30pm to 3.00pm", minute: "30" },
  ],
];

const HorizontalCardsList = () => (
  <ScrollView horizontal style={{ flexDirection: "row" }}>
    {timeStamps.map((singleArray, index) => (
      <CardsContainer key={index} singleArray={singleArray} />
    ))}
  </ScrollView>
);

const CardsContainer = ({ singleArray }) => {
  return (
    <View
      style={{
        width: wp(80),
        marginHorizontal: wp(1),
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {singleArray.map((singleObj) => (
        <SingleCard key={singleObj.id} singleObj={singleObj} />
      ))}
    </View>
  );
};

const SingleCard = ({ singleObj }) => {
  const [isColorChange, setIsColorChange] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsColorChange(!isColorChange)}>
      <View
        style={{
          backgroundColor: isColorChange
            ? colors.primary
            : singleObj.backgroundColor,
          margin: wp(2),
          borderWidth: 1,
          borderColor: colors.lightGray,
          padding: wp(2),
          width: wp(36),
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <AppText style={{ color: isColorChange ? "#fff" : "#000" }}>
          {singleObj.minute} min
        </AppText>
        <AppText
          style={{
            color: isColorChange ? "#fff" : "#000",
            fontSize: wp(3),
          }}
        >
          {singleObj.time}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(3) },
});

export default SlotSelectingScreen;
