import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "./Button";
import AppText from "./Text";
import { hp, wp } from "../Helpers/Responsiveness";

function ImageInput({
  containerStyle = {},
  imageStyle = {},
  bioTitle,
  bioDescription,
}) {
  const [image, setImage] = useState(null);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      return alert("Please give me permission to read data from storage.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = async () => {
    if (!image) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: selectImage },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) setImage(result.uri);
    } catch (error) {
      console.log("Error while select image.", error);
    }
  };

  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <View style={[styles.imageContainer, { ...imageStyle }]}>
        {!image && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {image && (
          <Image
            source={{ uri: image }}
            style={[styles.image, { ...imageStyle }]}
          />
        )}
      </View>
      <View>
        <AppButton
          title={"Upload Your avatar"}
          onPress={handlePress}
          borderWidth={0.5}
          textColor={colors.black}
          fontWeight={"bold"}
          color={colors.white}
        />
        {bioTitle && (
          <View style={styles.bio}>
            <AppText>{bioTitle}</AppText>
            <AppText style={{ fontSize: wp(3.5), color: colors.textGray }}>
              {bioDescription}
            </AppText>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    width: wp(35),
    height: hp(20),
    backgroundColor: colors.light,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: wp(2),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bio: {
    marginTop: wp(2),
    width: wp(55),
  },
});

export default ImageInput;
