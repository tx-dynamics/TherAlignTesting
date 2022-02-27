import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import Screen from "../../../components/Screen";
import ImageInput from "../../../components/ImagaPicker";
import { Formik } from "formik";
import AppFormField from "../../../components/forms/FormField";
import * as Yup from "yup";
import AppButton from "../../../components/Button";
import { wp } from "../../../Helpers/Responsiveness";

const Genders = ["Male", "Female", "Other"];

function ProfileScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Header />
        <ImageInput
          containerStyle={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
          imageStyle={{ width: wp(30), height: wp(35) }}
          bioTitle={"Bio"}
          bioDescription={
            "Your avatar should is fiendly and inviting head shot. Clearly"
          }
        />
        <Form />
      </ScrollView>
    </Screen>
  );
}

const Header = () => (
  <View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <AppText
        style={{
          fontSize: wp(7),
        }}
      >
        Profile
      </AppText>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name="pencil"
          size={25}
          color={colors.primary}
        />
        <AppText
          style={{
            color: colors.primary,
          }}
        >
          {" "}
          Edit Profile
        </AppText>
      </View>
    </View>
    <View style={{ marginVertical: wp(2) }}>
      <AppText>
        Your information will be share with our Medical Expert team.
      </AppText>
    </View>
  </View>
);

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Form = () => (
  <Formik
    initialValues={{ email: "", address: "" }}
    onSubmit={(values) => console.log(values)}
    validationSchema={validationSchema}
  >
    {({ handleChange, handleSubmit, setFieldTouched, setFieldValue }) => (
      <>
        <AppText>Full Name</AppText>
        <AppFormField
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
        />

        <View>
          <AppText>Address</AppText>
          <AppFormField
            name="address"
            autoCapitalize="none"
            autoCorrect={false}
            icon="address"
            onBlur={() => setFieldTouched("address")}
            onChangeText={handleChange("address")}
            iconName={"map-marker-outline"}
            iconAlign={"left"}
          />
        </View>

        <View>
          <AppButton title={"Save & Continue"} color="primary" />
        </View>
      </>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2), paddingTop: 0 },
});

export default ProfileScreen;
