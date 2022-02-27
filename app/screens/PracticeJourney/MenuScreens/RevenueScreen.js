import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { DropDownField } from "../../../components/forms/DropDownField";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { wp } from "../../../Helpers/Responsiveness";

const Therapist = ["Dr. Thomas", "Jhonathan", "Lady gaga", "smith", "ronalado"];
const Year = ["2001", "2002", "2003", "2004", "2005"];
const Months = ["January", "Febraury", "March", "April", "May"];

function TherapistStats(props) {
  return (
    <View style={styles.container}>
      <AppText
        style={{
          textAlign: "center",
          fontWeight: "700",
          marginBottom: 30,
          fontSize: wp(6),
        }}
      >
        Revenue
      </AppText>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <DropDownField
          data={Therapist}
          width={wp(30)}
          defaultButtonText={"Therapist"}
        />
        <DropDownField data={Year} width={wp(30)} defaultButtonText={"Year"} />
        <DropDownField
          data={Months}
          width={wp(30)}
          defaultButtonText={"Month"}
        />
      </View>

      <ViewBlock title={"Total Hours"} value={256} />
      <ViewBlock title={"Therapist Revenue"} value={"$36,00,000"} />
      <ViewBlock title={"Micellenus Revenue"} value={256} />
      <ViewBlock title={"Total Gross Revenue"} value={"$36,00,000"} />
      <ViewBlock title={"Expenses"} value={256} />
      <ViewBlock title={"Net Operating Income"} value={"$36,00,000"} />
    </View>
  );
}

const ViewBlock = ({ title, value }) => (
  <View
    style={{
      flexDirection: "row",
      borderWidth: 1,
      padding: wp(2),
      justifyContent: "space-between",
      borderColor: colors.lightGray,
      marginVertical: wp(2),
    }}
  >
    <AppText>{title}</AppText>
    <AppText>{value}</AppText>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(2) },
});

export default TherapistStats;
