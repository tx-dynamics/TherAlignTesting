import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import Screen from "../../../components/Screen";
import ImageInput from "../../../components/ImagaPicker";
import { Formik } from "formik";
import AppFormField from "../../../components/forms/FormField";
import PhonePickerField from "../../../components/forms/PhonePickerField";
import * as Yup from "yup";
import AppButton from "../../../components/Button";
import { wp } from "../../../Helpers/Responsiveness";

function ProfileScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <ImageInput
          containerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
          imageStyle={{ width: wp(32), height: wp(32) }}
          bioTitle={"Bio"}
          bioDescription={
            "Your avatar should be friendly and inviting head shot. Clearly"
          }
        />
        <Form />
      </ScrollView>
    </Screen>
  );
}

const Header = () => (
  <View>
    <View>
      <AppText>Step 1 of 1</AppText>
    </View>
    <View style={{ marginVertical: wp(5) }}>
      <AppText style={{ fontSize: wp(6), color: colors.primary }}>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: wp(45) }}>
            <AppText>Full Name</AppText>
            <AppFormField
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              icon="name"
              keyboardType="default"
            />
          </View>
          <View style={{ width: wp(45) }}>
            <AppText>Email</AppText>
            <AppFormField
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: wp(45) }}>
            <AppText>Desgination</AppText>
            <AppFormField
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              icon="name"
              keyboardType="default"
            />
          </View>
          <View style={{ width: wp(45) }}>
            <AppText>City</AppText>
            <AppFormField
              name="city"
              autoCapitalize="none"
              autoCorrect={false}
              icon="city"
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: wp(45) }}>
            <AppText>State</AppText>
            <AppFormField
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              icon="name"
              keyboardType="default"
            />
          </View>
          <View style={{ width: wp(45) }}>
            <AppText>Zip Code</AppText>
            <AppFormField
              name="city"
              autoCapitalize="none"
              autoCorrect={false}
              icon="city"
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: wp(45) }}>
            <AppText>Licence Pdf</AppText>
            <AppFormField
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              icon="name"
              keyboardType="default"
              iconName={"file-document-edit-outline"}
            />
          </View>
          <View style={{ width: wp(45) }}>
            <AppText>Malpractice insur pdf</AppText>
            <AppFormField
              name="zipCode"
              autoCapitalize="none"
              autoCorrect={false}
              icon="zc"
              iconName={"file-document-edit-outline"}
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
            iconAlign="left"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: wp(45) }}>
            <AppText>Credential</AppText>
            <AppFormField
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              icon="name"
              keyboardType="default"
            />
          </View>
          <View style={{ width: wp(45) }}>
            <AppText>Gender</AppText>
            <AppFormField
              name="zipCode"
              autoCapitalize="none"
              autoCorrect={false}
              icon="zc"
            />
          </View>
        </View>

        <View>
          <AppText>Mobile Phone</AppText>
          <PhonePickerField />
        </View>

        <View style={{}}>
          <AppButton
            title={"Add Payment Details"}
            color="green"
            icon={"arrow-right"}
            style={{ marginTop: wp(4), marginBottom: wp(2) }}
          />
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
