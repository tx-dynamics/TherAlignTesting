import React, { useEffect, useRef, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from "../config/colors";
import { wp } from "../Helpers/Responsiveness";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

function AppTextInput({
  eye = false,
  type,
  width = "100%",
  validEmail = false,
  setData,
  handleChangeText,
  location,
  iconAlign = "right",
  iconName,
  iconSize = 30,
  searchIcon = false,
  style,
  ...otherProps
}) {
  const [eyeIcon, setEyeIcon] = useState(eye);

  const toggleEyeIcon = () => {
    setEyeIcon(!eyeIcon);
  };

  return (
    <View
      style={[
        styles.container,
        {
          width,
          flexDirection: iconAlign === "right" ? "row" : "row-reverse",
          ...style,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <TextInput
          selectionColor={colors.primary}
          placeholderTextColor={defaultStyles.colors.medium}
          style={styles.textInput}
          secureTextEntry={eyeIcon ? true : false}
          onChangeText={(text) => handleChangeText(text)}
          {...otherProps}
        />
      </View>

      {eye && (
        <TouchableHighlight>
          <MaterialCommunityIcons
            name={eyeIcon ? "eye-off" : "eye"}
            size={25}
            color={defaultStyles.colors.textGray}
            onPress={toggleEyeIcon}
          />
        </TouchableHighlight>
      )}

      {validEmail && (
        <FadeInView>
          <MaterialCommunityIcons
            style={{
              alignSelf: "flex-end",
              borderWidth: 1,
              borderColor: "green",
              borderRadius: 80,
            }}
            name={"check"}
            size={25}
            color={"green"}
          />
        </FadeInView>
      )}

      {searchIcon && (
        <View>
          <MaterialIcons
            name={"search"}
            size={wp(7)}
            color={defaultStyles.colors.medium}
            onPress={() => console.log("Search")}
          />
        </View>
      )}

      {iconName && (
        <TouchableHighlight activeOpacity={0.6} underlayColor="transparent">
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={defaultStyles.colors.medium}
            onPress={() => console.log("Search")}
          />
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: defaultStyles.colors.lightGray,
    flexDirection: "row",
    borderRadius: 5,
    padding: wp(2.5),
    backgroundColor: "#fff",
    color: "#ddd",
  },

  textInput: defaultStyles.text,
});

export default AppTextInput;
