import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../config/colors";

const Days = [
  { id: 1, title: "Sun" },
  { id: 2, title: "Mon" },
  { id: 3, title: "Tue" },
  { id: 4, title: "Wed" },
  { id: 5, title: "Thu" },
  { id: 6, title: "Fri" },
  { id: 7, title: "Sat" },
];

const BtnGroup = () => {
  const [selection, setSelection] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnGroup}>
        {Days.map((day) => (
          <TouchableOpacity
            style={[
              styles.btn,
              selection === day.id ? { backgroundColor: colors.primary } : null,
            ]}
            onPress={() => setSelection(day.id)}
          >
            <Text
              style={[
                styles.btnText,
                selection === day.id
                  ? { color: "white" }
                  : { color: colors.black },
              ]}
            >
              {day.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  btnGroup: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  btn: {
    width: "22%",
    // flex: 1,
    borderRightWidth: 0.25,
    borderLeftWidth: 0.25,
    borderColor: "#6B7280",
    backgroundColor: colors.lightGray,
    margin: 5,
  },
  btnText: {
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 14,
  },
});

module.exports = BtnGroup;
