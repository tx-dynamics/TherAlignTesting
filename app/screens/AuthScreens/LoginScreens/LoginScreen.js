import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppButton from "../../../components/Button";
import AppFormField from "../../../components/forms/FormField";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthRoutes } from "../../../navigation/Routes";
import { wp } from "../../../Helpers/Responsiveness";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const [validEmail, setValidEmail] = useState(false);

  const validateEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (reg.test(email) === false) {
      setValidEmail(false);
      return false;
    }
    setValidEmail(true);
    return true;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View style={{ flex: 9.5, justifyContent: "center" }}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldTouched,
              setFieldValue,
            }) => (
              <>
                <AppText>Email</AppText>
                <AppFormField
                  name="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  keyboardType="email-address"
                  placeholder="email"
                  textContentType="emailAddress"
                  onChangeText={(text) => {
                    validateEmail(text);
                    setFieldValue("email", text);
                  }}
                  validEmail={validEmail}
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
                <AppButton title="Login" onPress={handleSubmit} />
              </>
            )}
          </Formik>

          <AppText
            onPress={() =>
              navigation.navigate(AuthRoutes.SUCCESSFUL_PASSWORD_CHANGE_SCREEN)
            }
            style={{
              textDecorationLine: "underline",
              textAlign: "right",
              marginTop: wp(2),
            }}
          >
            Forgot Password?
          </AppText>
        </View>

        <View
          style={{
            flex: 1 / 2,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <AppText>
            Don't have an account?{" "}
            <AppText
              onPress={() => navigation.navigate(AuthRoutes.SIGN_UP_SCREEN)}
              style={{ color: colors.primary }}
            >
              Sign Up
            </AppText>
          </AppText>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
  },
});

export default LoginScreen;
