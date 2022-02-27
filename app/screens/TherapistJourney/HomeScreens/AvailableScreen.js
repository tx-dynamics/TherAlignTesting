import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import AppTextInput from "../../../components/TextInput";
import ListItemSeperator from "../../../components/ListItemSeperator";
import AppButton from "../../../components/Button";
import { wp } from "../../../Helpers/Responsiveness";

const Days = [
  { id: 1, title: "Sun" },
  { id: 2, title: "Mon" },
  { id: 3, title: "Tue" },
  { id: 4, title: "Wed" },
  { id: 5, title: "Thu" },
  { id: 6, title: "Fri" },
  { id: 7, title: "Sat" },
];

function AvailableScreen(props) {
  const [selection, setSelection] = useState(1);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText style={{ fontSize: wp(6), width: wp(70) }}>
          Select Appointment Slot And Duration
        </AppText>

        <View>
          <MaterialCommunityIcons
            style={{ alignSelf: "flex-end", marginBottom: wp(4) }}
            name="plus-circle-outline"
            size={35}
          />
          {/* Start Days */}
          <View style={styles.btnGroup}>
            {Days.map((day) => (
              <TouchableOpacity
                style={[
                  styles.btn,
                  selection === day.id
                    ? { backgroundColor: colors.primary }
                    : null,
                ]}
                key={day.id}
                onPress={() => setSelection(day.id)}
              >
                <AppText
                  style={[
                    styles.btnText,
                    selection === day.id
                      ? { color: "white" }
                      : { color: colors.black },
                  ]}
                >
                  {day.title}
                </AppText>
              </TouchableOpacity>
            ))}
          </View>
          {/* End Days */}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: wp(4),
          }}
        >
          <View>
            <AppText>Not Avaible From</AppText>
            <AppTextInput
              width={wp(43)}
              style={{ backgroundColor: colors.lightGray }}
              iconName={"clock-outline"}
              iconSize={25}
            />
          </View>
          <View>
            <AppText>To</AppText>
            <AppTextInput
              width={wp(43)}
              style={{ backgroundColor: colors.lightGray }}
              iconName={"clock-outline"}
              iconSize={25}
            />
          </View>
        </View>

        <View>
          <AppText>Reason</AppText>
          <AppTextInput style={{ backgroundColor: colors.lightGray }} />
        </View>

        <View>
          <AppText
            style={{
              textDecorationLine: "underline",
              paddingVertical: wp(2),
              textAlign: "right",
            }}
          >
            Delete
          </AppText>
          <ListItemSeperator />
        </View>
      </ScrollView>

      <View>
        <AppButton title={"Save"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(4) },
  btnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn: {
    width: "23.4%",
    backgroundColor: colors.lightGray,
    marginEnd: wp(1.2),
    marginBottom: wp(1.2),
  },
  btnText: {
    textAlign: "center",
    paddingVertical: wp(3),
    fontSize: wp(3.5),
  },
});

export default AvailableScreen;
