import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AppText from "../../../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import AppTextInput from "../../../components/TextInput";
import ListItemSeperator from "../../../components/ListItemSeperator";
import AppButton from "../../../components/Button";
import { width } from "react-native-dimension";

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
      <ScrollView
        style={
          {
            // flexGrow: 1,
          }
        }
      >
        <AppText style={{ fontSize: 24, width: 300 }}>
          Select Appointment Slot And Duration
        </AppText>

        <View>
          <MaterialCommunityIcons
            style={{ alignSelf: "flex-end", marginBottom: 20 }}
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
            marginVertical: 20,
          }}
        >
          <View>
            <AppText>Not Avaible From</AppText>
            <AppTextInput
              width={width(43)}
              style={{ backgroundColor: colors.lightGray }}
              iconName={"clock-outline"}
              iconSize={25}
            />
          </View>
          <View>
            <AppText>To</AppText>
            <AppTextInput
              width={width(43)}
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
              paddingVertical: 10,
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
  container: { flex: 1, padding: 20 },
  btnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn: {
    width: "23.4%",
    backgroundColor: colors.lightGray,
    marginEnd: 6,
    marginBottom: 6,
  },
  btnText: {
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 14,
  },
});

export default AvailableScreen;
