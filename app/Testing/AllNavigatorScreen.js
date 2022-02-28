import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import colors from "../config/colors";

function AllNavigatorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ButtonComponent
        title={"Auth Journey"}
        handlePress={() => navigation.navigate("Auth")}
      />
      <ButtonComponent
        title={"Client Journey"}
        handlePress={() => navigation.navigate("Client")}
      />
      <ButtonComponent
        title={"Therapist Journey"}
        handlePress={() => navigation.navigate("Therapist")}
      />
      <ButtonComponent
        title={"Practice Journey"}
        handlePress={() => navigation.navigate("Practice")}
      />
    </View>
  );
}

const ButtonComponent = ({ title, handlePress }) => {
  return (
    <Button
      icon="chevron-right"
      mode="outlined"
      contentStyle={{
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
      onPress={handlePress}
      style={{ marginVertical: 10 }}
      color={colors.secondary}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});

export default AllNavigatorScreen;
