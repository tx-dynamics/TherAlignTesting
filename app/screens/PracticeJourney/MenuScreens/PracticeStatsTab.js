import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { DropDownField } from "../../../components/forms/DropDownField";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { wp } from "../../../Helpers/Responsiveness";

const Year = ["2001", "2002", "2003", "2004", "2005"];
const Months = ["January", "Febraury", "March", "April", "May"];

function TherapistStats(props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <DropDownField data={Year} width={wp(45)} defaultButtonText={"Year"} />
        <DropDownField
          data={Months}
          width={wp(45)}
          defaultButtonText={"Month"}
        />
      </View>
      <ViewBlock title={"Patient Visit Average"} value={256} />
      <ViewBlock title={"Show Rate"} value={"$36,00,000"} />
      <ViewBlock title={"Dollar Visit Average"} value={256} />
      <ViewBlock title={"Inquiry Conversion Rate"} value={"$36,00,000"} />
      <ViewBlock title={"Revenue Projection"} value={256} />
      <ViewBlock title={"Current Revenue"} value={"$36,00,000"} />
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
