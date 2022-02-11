import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import CalendarPicker from "react-native-calendar-picker";
import { height, totalSize, width } from "react-native-dimension";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };

    this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    this.props.setCalendarDate(date);
  }

  render() {
    const { selectedStartDate } = this.state;

    const startDate = selectedStartDate ? selectedStartDate.toString() : "";

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : "#e8eaeb",
          },
        ]}
      >
        <CalendarPicker
          todayBackgroundColor={colors.light}
          todayTextStyle={{ color: colors.primary }}
          previousComponent={
            <MaterialCommunityIcons
              name="chevron-left"
              size={20}
              color={colors.black}
            />
          }
          width={width(90)}
          nextComponent={
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={"#000"}
            />
          }
          selectedDayColor={colors.secondary}
          selectedDayTextColor={colors.white}
          selectYearTitle="Select Year"
          headerWrapperStyle={{}}
          onDateChange={this.onDateChange}
          dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: totalSize(1),
    padding: 10,
  },
});
