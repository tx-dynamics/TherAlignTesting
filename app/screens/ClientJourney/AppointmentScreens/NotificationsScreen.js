import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NotificationsList = [
  {
    id: 1,
    title: "You have appointment with Sarah Connor at 08:00 PM today.",
    timeStamp: "Just now",
    icon: "message",
  },
  {
    id: 2,
    title: "Complete your profile to be better health consult.",
    timeStamp: "",
    icon: "message",
  },
  {
    id: 3,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
  {
    id: 4,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
  {
    id: 5,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
  {
    id: 6,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
  {
    id: 7,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
  {
    id: 8,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
  {
    id: 9,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
  {
    id: 10,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
  {
    id: 11,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message",
  },
];

const Item = ({ title, timeStamp, icon }) => (
  <View style={styles.item}>
    <View
      style={{
        backgroundColor: "gray",
        width: 50,
        height: 50,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name="message" size={25} color={colors.white} />
    </View>
    <View style={{ width: "80%", marginHorizontal: 10 }}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={{ color: colors.textGray }}>{timeStamp}</AppText>
    </View>
  </View>
);

function NotificationsScreen(props) {
  const renderItem = ({ item }) => (
    <Item title={item.title} timeStamp={item.timeStamp} icon={item.icon} />
  );

  return (
    <View style={styles.container}>
      <AppText style={{ color: colors.primary, fontSize: 25 }}>
        Notifications
      </AppText>
      <FlatList
        data={NotificationsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: {
    // backgroundColor: "#f9c2ff",
    paddingVertical: 10,
    marginVertical: 8,
    flexDirection: "row",
  },
  title: {
    // fontSize: 32,
  },
});

export default NotificationsScreen;
