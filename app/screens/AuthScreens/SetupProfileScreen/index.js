import React from "react";
import { Formik } from "formik";
import { View, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PhonePickerField from "../../../components/forms/PhonePickerField";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import Screen from "../../../components/Screen";
import ImageInput from "../../../components/ImagaPicker";
import AppFormField from "../../../components/forms/FormField";
import FormDatePicker from "../../../components/forms/FormDatePicker";
import { DropDownField } from "../../../components/forms/DropDownField";
import AppButton from "../../../components/Button";
import { wp } from "../../../Helpers/Responsiveness";

const Genders = ["Male", "Female", "Other"];

function SetupProfileScreen(props) {
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
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <AppText>Step 1 of 1</AppText>
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
      <AppText style={{ color: colors.primary }}>
        Your information will be share with your Therapist.
      </AppText>
    </View>
  </View>
);

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const Form = () => (
  <View style={{ marginTop: wp(4) }}>
    <Formik
      initialValues={{
        email: "",
        dob: "",
        age: "",
        address: "",
        occupation: "",
      }}
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
            placeholder="Martin"
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "45%" }}>
              <AppText>Date of birth</AppText>
              <View>
                <FormDatePicker />
              </View>
            </View>

            <View style={{ width: "45%" }}>
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
              location={true}
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
            <PhonePickerField />
          </View>

          <View style={{ marginTop: wp(4) }}>
            <AppButton
              title={"Add Payment Details"}
              color="green"
              arrowIcon={true}
              style={{ marginBottom: wp(2) }}
            />
            <AppButton title={"Save & Continue"} color="primary" />
          </View>
        </>
      )}
    </Formik>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2) },
});

export default SetupProfileScreen;
