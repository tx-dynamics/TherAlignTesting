import React from "react";
import { View, StyleSheet } from "react-native";
import { DropDownField } from "../../components/forms/DropDownField";
import AppText from "../../components/Text";
import { Dimensions } from "react-native";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
          color: colors.medium,
        }}
      >
        Therapist Stats
      </AppText>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <DropDownField
          data={Year}
          width={windowWidth / 2.3}
          defaultButtonText={"Year"}
        />
        <DropDownField
          data={Months}
          width={windowWidth / 2.3}
          defaultButtonText={"Month"}
        />
      </View>

      <ViewBlock title={"Patient Visit Average"} value={256} />
      <ViewBlock title={"Show rate"} value={"$36,00,000"} />
      <ViewBlock title={"Dollar Visit Average"} value={256} />
      <ViewBlock title={"Inquiery Conversion Rate"} value={"$36,00,000"} />
      <ViewBlock title={"Revenue Projection"} value={256} />
      <ViewBlock title={"Current revenue"} value={"$36,00,000"} />
    </View>
  );
}

const ViewBlock = ({ title, value }) => (
  <View
    style={{
      flexDirection: "row",
      borderWidth: 1,
      padding: 10,
      justifyContent: "space-between",
      borderColor: colors.lightGray,
      marginVertical: 10,
    }}
  >
    <AppText>{title}</AppText>
    <AppText>{value}</AppText>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default TherapistStats;
