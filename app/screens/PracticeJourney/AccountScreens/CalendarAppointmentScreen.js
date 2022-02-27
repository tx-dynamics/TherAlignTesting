import React from "react";
import CalendarStrip from "react-native-calendar-strip";
import { View } from "react-native";
import AppText from "../../../components/Text";
// import TimeTable from "@mikezzb/react-native-timetable";
import colors from "../../../config/colors";
import { hp, wp } from "../../../Helpers/Responsiveness";

const TimeTableData = [
  { id: 1, time: "12 pm--", task: "Appointment David Macc" },
  { id: 2, time: "1 pm--", task: "Appointment Anna Bill" },
  { id: 3, time: "2 pm--" },
  { id: 4, time: "3 pm--" },
  { id: 5, time: "4 pm--" },
  { id: 6, time: "5 pm--", task: "Dinner" },
];

const CalendarAppointmentScreen = () => {
  return (
    <View style={{ flex: 1, padding: wp(2) }}>
      <CalendarStrip
        // scrollable
        style={{ height: hp(10), paddingBottom: wp(2) }}
        calendarHeaderStyle={{
          color: "gray",
          fontSize: wp(4),
          textDecorationLine: "underline",
        }}
        dateNumberStyle={{ color: "gray", fontSize: wp(4) }}
        dateNameStyle={{ color: "#000", fontSize: wp(4) }}
        iconContainer={{ flex: 0.1 }}
        highlightDateNameStyle={{ color: colors.primary, fontSize: wp(4) }}
        highlightDateNumberStyle={{ color: colors.primary, fontSize: wp(4) }}
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
      {/* <TimeTable
        events={[
          {
            courseId: "",
            // title: "Data Structures",
            // section: "",
            day: 1,
            startTime: "8:00",
            endTime: "9:00",
            location: "Lunch",
            color: "rgb(128,128,128)",
          },
          {
            courseId: "CSCI2100",
            title: "Data Structures",
            section: "A - LEC",
            day: 1,
            startTime: "14:30",
            endTime: "16:15",
            location: "Online Teaching",
            color: "rgb(128,128,128)",
          },
        ]}
        eventOnPress={(event) => Alert.alert(`${JSON.stringify(event)}`)}
        configs={{ numOfDaysPerPage: 1, numOfDays: 1 }}
        // contentContainerStyle={{ height: 500 }}
        headerStyle={{ display: "none" }}
        theme={{ accent: "gray" }}

      /> */}

      <TimeTable />
    </View>
  );
};

const TimeTable = () =>
  TimeTableData.map((timeTable) => (
    <View
      key={timeTable.id}
      style={{
        flexDirection: "row",
        marginBottom: wp(10),
      }}
    >
      <AppText>{timeTable.time}</AppText>
      <View
        style={{
          flex: 1,
          padding: wp(2),
          borderRadius: 5,
          borderTopWidth: timeTable.task ? 0 : 1,
          borderBottomWidth: timeTable.task ? 0 : 1,
          backgroundColor: timeTable.task ? colors.lightBlue : "#fff",
          top: wp(3),
        }}
      >
        <AppText style={{ paddingHorizontal: wp(6) }}>{timeTable.task}</AppText>
      </View>
    </View>
  ));

export default CalendarAppointmentScreen;
