import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../../../components/Text";
import { fontSize } from "../../../config/fonts";
import colors from "../../../config/colors";
import AppButton from "../../../components/Button";
import { Formik } from "formik";
import AppFormField from "../../../components/forms/FormField";
import * as Yup from "yup";
import { AuthRoutes } from "../../../navigation/Routes";
import { height } from "react-native-dimension";

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

      <View style={{ marginVertical: 20 }}>
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
  <View style={{ marginBottom: height(10) }}>
    <AppText
      style={{
        fontSize: fontSize.h4,
        fontWeight: "700",
        color: colors.primary,
        paddingBottom: 5,
      }}
    >
      Welcome to TherAlign!
    </AppText>
    <AppText style={{ paddingBottom: 20 }}>
      Joi 1M+ top Therapist today, for free!
    </AppText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default SignUpScreen;
