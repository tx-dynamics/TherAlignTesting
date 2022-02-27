import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { wp } from "../../../Helpers/Responsiveness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import AppFormField from "../../../components/forms/FormField";
import AppButton from "../../../components/Button";
import { Divider } from "react-native-paper";
import AppTextInput from "../../../components/TextInput";
import { Table, Row, Rows } from "react-native-table-component";

function TreatmentPlanScreen(props) {
  return (
    <View style={styles.container}>
      <AppText
        style={{ fontSize: wp(5), textAlign: "center", marginBottom: wp(5) }}
      >
        Treatment Plan
      </AppText>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText style={{ marginBottom: wp(3) }}>CLIENT INFORMATION</AppText>
        {/* Form */}
        <View style={{ backgroundColor: colors.lightGray, padding: wp(3) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <AppText>Date: 16.02.2002</AppText>
            <MaterialCommunityIcons
              name="pencil"
              size={25}
              color={colors.primary}
            />
          </View>
          <Form />
        </View>

        <AppText
          style={{
            fontSize: wp(5),
            textAlign: "center",
            marginVertical: wp(5),
          }}
        >
          TREATMENT PLAN PAGE 2
        </AppText>
        <View>
          <AppText>CLIENT NAME</AppText>
          <AppTextInput style={{ backgroundColor: colors.lightGray }} />
        </View>

        <View>
          <AppText style={{ marginTop: wp(5), marginBottom: wp(2) }}>
            Indicate if 10 is the best "Best" or "Worst"
          </AppText>
          <TableComponent />
        </View>
        <View>
          <AppButton
            title={"Save"}
            color="green"
            style={{ marginTop: wp(4), marginBottom: wp(2) }}
          />
          <AppButton title={"Submit"} color="primary" />
        </View>
      </ScrollView>
    </View>
  );
}

const Form = () => (
  <Formik
    initialValues={{}}
    onSubmit={(values) => console.log(values)}
    // validationSchema={validationSchema}
  >
    {({ handleChange, handleSubmit, setFieldTouched, setFieldValue }) => (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "48%" }}>
            <AppText>FULL NAME</AppText>
            <AppFormField
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="default"
              textContentType="none"
            />
          </View>

          <View style={{ width: "48%" }}>
            <AppText>D.O.B</AppText>
            <AppFormField
              name="age"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={() => setFieldTouched("age")}
              onChangeText={handleChange("age")}
            />
          </View>
        </View>

        <View>
          <AppText>PRIMARY CARE PHYSICIAN</AppText>
          <AppFormField
            name="PCP"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("address")}
            onChangeText={handleChange("address")}
          />
        </View>

        <View>
          <AppText>PHONE</AppText>
          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>

        <View>
          <AppText>PHYSCHATERIST</AppText>
          <AppFormField
            name="physchaterist"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>

        <View>
          <AppText>PHONE</AppText>
          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>

        <View style={{ marginVertical: wp(10) }}>
          <Divider />
        </View>

        <AppText style={{ marginVertical: wp(5) }}>
          TREATMENT INFORMATION
        </AppText>

        <View>
          <AppText>DIAGONSIS</AppText>
          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>

        <View>
          <AppText>MEDICAL</AppText>
          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>

        <View>
          <AppText>NUMBER OF VISIT FOR INITIAL CARE</AppText>
          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>

        <View>
          <AppText>FREQUENCY</AppText>
          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>

        <View style={{ marginVertical: wp(10) }}>
          <Divider />
        </View>

        <AppText style={{ marginVertical: wp(5) }}>GOALS</AppText>

        <View>
          <AppText>SHORT TERM</AppText>
          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>

        <View>
          <AppText>LONG TERM</AppText>
          <AppFormField
            name="phone"
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={() => setFieldTouched("occupation")}
            onChangeText={handleChange("occupation")}
          />
        </View>
      </>
    )}
  </Formik>
);

const TableComponent = () => {
  const [tableHead, setTableHead] = useState(["TARGET SYMPTOMS", "INITIAL"]);
  const [tableData, setTableData] = useState([
    ["1", ""],
    ["2", ""],
    ["3", ""],
    ["4", ""],
    ["5", ""],
    ["6", ""],
    ["7", ""],
    ["8", ""],
    ["9", ""],
    ["10", ""],
    ["11", ""],
    ["12", ""],
  ]);

  return (
    <View style={styles.tableContainer}>
      <Table borderStyle={{ borderWidth: 2, borderColor: colors.lightBlue }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(4), paddingTop: 0 },
  tableContainer: {
    backgroundColor: colors.lightGray,
  },
  head: { height: wp(10) },
  text: { margin: wp(2) },
});

export default TreatmentPlanScreen;
