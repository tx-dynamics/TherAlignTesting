import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppText from "../../../components/Text";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { wp } from "../../../Helpers/Responsiveness";

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
    timeStamp: "4 mint ago",
    icon: "message",
  },
  {
    id: 3,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "message-outline",
  },
  {
    id: 4,
    title: "Add bank account to withdraw income.",
    timeStamp: "1 hour ago",
    icon: "phone",
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
    icon: "cart",
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
        width: wp(11),
        height: wp(11),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={icon} size={25} color={colors.white} />
    </View>
    <View style={{ width: "80%", marginHorizontal: wp(2) }}>
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
      <AppText style={{ color: colors.primary, fontSize: wp(6) }}>
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
  container: { flex: 1, padding: wp(2) },
  item: {
    paddingVertical: wp(2),
    marginVertical: wp(1.8),
    flexDirection: "row",
  },
  title: {
    // fontSize: 32,
  },
});

export default NotificationsScreen;
