import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import Screen from "../../../components/Screen";
import { Formik } from "formik";
import ImageInput from "../../../components/ImagaPicker";
import AppFormField from "../../../components/forms/FormField";
import PhonePickerField from "../../../components/forms/PhonePickerField";
import FormDatePicker from "../../../components/forms/FormDatePicker";
import { DropDownField } from "../../../components/forms/DropDownField";
import * as Yup from "yup";
import AppButton from "../../../components/Button";
import { wp } from "../../../Helpers/Responsiveness";

const Genders = ["Male", "Female", "Other"];

function ProfileScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <ImageInput />
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
          color: colors.primary,
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
        <MaterialCommunityIcons name="pencil" size={25} color={colors.black} />
        <AppText> Edit Profile</AppText>
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
    initialValues={{ email: "", dob: "", age: "", address: "", occupation: "" }}
    onSubmit={(values) => console.log(values)}
    validationSchema={validationSchema}
  >
    {({ handleChange, handleSubmit, setFieldTouched, setFieldValue }) => (
      <>
        <AppText>Full Name</AppText>
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="email"
          textContentType="emailAddress"
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: wp(43) }}>
            <AppText>Date of birth</AppText>
            <View>
              <FormDatePicker />
            </View>
          </View>

          <View style={{ width: wp(43) }}>
            <AppText>Age</AppText>
            <AppFormField
              name="age"
              autoCapitalize="none"
              autoCorrect={false}
              icon="age"
              onBlur={() => setFieldTouched("age")}
              onChangeText={handleChange("age")}
              placeholder="age"
              style={{ marginTop: 0 }}
            />
          </View>
        </View>

        <View>
          <AppText>Address</AppText>
          <AppFormField
            name="address"
            autoCapitalize="none"
            autoCorrect={false}
            icon="address"
            onBlur={() => setFieldTouched("address")}
            onChangeText={handleChange("address")}
            placeholder="address"
            iconName={"map-marker-outline"}
            iconAlign={"left"}
          />
        </View>
        <View>
          <AppText>Occupation</AppText>
          <AppFormField
            name="occupation"
            autoCapitalize="none"
            autoCorrect={false}
            icon="occupation"
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
            placeholder="occupation"
          />
        </View>
        <View>
          <AppText>Gender</AppText>
          <DropDownField defaultButtonText={" "} data={Genders} />
        </View>

        <View>
          <AppText>Mobile Phone</AppText>
          {/* <DropDownField  width="40%" /> */}
          <PhonePickerField />
        </View>

        <View style={{}}>
          <AppButton
            title={"Add Payment Details"}
            color="green"
            icon={"arrow-right"}
            style={{ marginTop: wp(4), marginBottom: wp(2) }}
          />
          <AppButton title={"Save"} color="primary" />
        </View>
      </>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2) },
});

export default ProfileScreen;
