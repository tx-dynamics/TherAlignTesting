import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../../components/Button";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { SliderBox } from "react-native-image-slider-box";
import { AuthRoutes } from "../../../navigation/Routes";
import { hp, wp } from "../../../Helpers/Responsiveness";
import ImagesPath from "../../../constants/ImagesPath";

const images = [
  ImagesPath.discussion_cuate,
  ImagesPath.discussion_pana,
  ImagesPath.discussion_cuate,
];

function LoginOrSignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <ImageSlider images={images} />
      </View>

      <View
        style={{
          height: hp(30),
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <AppButton
            title="Log In"
            onPress={() => navigation.navigate(AuthRoutes.LOGIN_SCREEN)}
          />
          <View style={{ marginHorizontal: wp(2.5) }} />
          <AppButton
            title="Sign Up"
            color={colors.white}
            textColor="#000"
            borderWidth={1}
            onPress={() => navigation.navigate(AuthRoutes.SIGN_UP_SCREEN)}
          />
        </View>
        <AppText>Are you a patient??</AppText>
      </View>
    </View>
  );
}

const ImageSlider = ({ images }) => (
  <SliderBox
    resizeMode={"contain"}
    ImageComponentStyle={{
      backgroundColor: "#c1e1ec",
      // aspectRatio: 0.7,
    }}
    images={images}
    autoplay={true}
    disableOnPress={true}
    circleLoop
    sliderBoxHeight={hp(70)}
    dotStyle={{
      display: "none",
    }}
  />
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default LoginOrSignUpScreen;
