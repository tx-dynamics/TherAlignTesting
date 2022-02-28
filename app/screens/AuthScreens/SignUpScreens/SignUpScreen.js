import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import AppButton from "../../../components/Button";
import { Formik } from "formik";
import AppFormField from "../../../components/forms/FormField";
import * as Yup from "yup";
import { AuthRoutes } from "../../../navigation/Routes";
import { hp, wp } from "../../../Helpers/Responsiveness";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignUpScreen({ navigation: { navigate, goBack } }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Header />
          <Form navigate={navigate} />
        </View>
      </ScrollView>
    </View>
  );
}

const Form = ({ navigate }) => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched }) => (
          <>
            <AppText>Name</AppText>
            <AppFormField
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              icon="contacts"
              placeholder="Name"
              textContentType="name"
            />
            <AppText>Email</AppText>
            <AppFormField
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="email"
              textContentType="emailAddress"
            />
            <AppText>Password</AppText>
            <AppFormField
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="password"
              textContentType="password"
              eye
            />
            <AppText>Confirm Password</AppText>
            <AppFormField
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="password"
              textContentType="password"
              eye
            />
            <AppButton title="Sign Up" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <View style={{ marginVertical: wp(4) }}>
        <AppText style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <AppText
            style={{ color: colors.primary }}
            onPress={() => navigate(AuthRoutes.LOGIN_SCREEN)}
          >
            Log In
          </AppText>
        </AppText>
      </View>
    </>
  );
};

const Header = () => (
  <View style={{ marginBottom: wp(5) }}>
    <AppText
      style={{
        fontSize: wp(8),
        fontWeight: "700",
        color: colors.primary,
        paddingBottom: wp(1),
      }}
    >
      Welcome to TherAlign!
    </AppText>
    <AppText style={{ paddingBottom: wp(4) }}>
      Joi 1M+ top Therapist today, for free!
    </AppText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
});

export default SignUpScreen;
