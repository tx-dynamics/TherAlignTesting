import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { fontSize } from "../config/fonts";

function AppButton({
  title,
  onPress,
  color = "primary",
  textColor = "#fff",
  borderWidth,
  width,
  fontWeight,
  icon,
  style,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor={colors.lightGray}
      style={[
        styles.button,
        {
          ...style,
          backgroundColor: colors[color],
          borderWidth: borderWidth ? borderWidth : 0,
          width: width && width,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        },
      ]}
      onPress={onPress}
    >
      <>
        <Text
          style={[
            styles.text,
            {
              color: textColor,
              fontWeight: fontWeight ? fontWeight : "normal",
            },
          ]}
        >
          {title}
        </Text>
        {icon && (
          <MaterialCommunityIcons name={icon} size={25} color={colors.white} />
        )}
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    paddingHorizontal: 30,
    // marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.large,
  },
});

export default AppButton;
