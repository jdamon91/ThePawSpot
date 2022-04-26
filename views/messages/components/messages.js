import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, Colors } from "react-native-ui-lib";

const users = [
  {
    image: require("../../../assets/guy.jpg"),
    name: "Robert",
    message: "Hey! I am really interested in Fiona! Is she available?",
    time: "4:50PM",
  },
  {
    image: require("../../../assets/girl.jpg"),
    name: "Christin",
    message:
      "Fiona is so adorable 😍! I would love to get to meet her and possibly take her home with me?",
    time: "2:10PM",
    unread: true,
  },
  {
    image: require("../../../assets/guy-2.jpg"),
    name: "Shane",
    message: "Just wanted to reach out to see if Fiona is available?",
    time: "Friday",
  },
  {
    image: require("../../../assets/girl-2.jpg"),
    name: "Nicole",
    message: "I can't wait to see her! ❤️❤️❤️❤️",
    time: "Monday",
  },
  ,
  {
    image: require("../../../assets/guy-3.jpg"),
    name: "Terrance",
    message: "That's awesome! What would be a good time to meet?",
    time: "Mar 23",
  },
  {
    image: require("../../../assets/girl-3.jpg"),
    name: "Christin",
    message: "Hey! I am really interested in Fiona! Is she available?",
    time: "Mar 20",
  },
];

const Messages = () => {
  return (
    <View style={styles.headerContainer}>
      <ScrollView
        style={styles.rootContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.userContainer}>
          {users.map((user, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.messageContainer,
                  {
                    marginTop: index === 0 ? 15 : 0,
                    backgroundColor: user.unread
                      ? Colors.secondaryColor
                      : "#FFF",
                  },
                ]}
              >
                {user.unread ? (
                  <View
                    style={[
                      styles.unreadBadge,
                      { backgroundColor: Colors.primaryColor },
                    ]}
                  />
                ) : null}
                <Text style={styles.messageTime}>{user.time}</Text>
                <View
                  style={[
                    styles.headerImageContainer,
                    { backgroundColor: Colors.secondaryColor },
                  ]}
                >
                  <Image
                    key={index}
                    source={user.image}
                    style={styles.headerImage}
                  />
                </View>
                <View style={styles.messageTextWrapper}>
                  <Text numberOfLines={1} style={styles.username}>
                    {user.name}
                  </Text>
                  <Text numberOfLines={2} style={styles.messageText}>
                    {user.message}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FFF",
    height: Dimensions.get("window").height * 0.65,
    top: 0,
    paddingHorizontal: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  headerText: {
    color: "grey",
    fontFamily: "Poppins_600SemiBold",
    marginVertical: 10,
  },
  headerContainer: {
    paddingBottom: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: -30,
  },
  userContainer: {
    backgroundColor: "#FFF",
    paddingVertical: 5,
  },
  headerImageContainer: {
    backgroundColor: "#ffefce",
    height: 75,
    width: 75,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    height: 75,
    width: 75,
    borderRadius: 40,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  username: {
    marginTop: 3,
    fontFamily: "Poppins_600SemiBold",
  },
  messageTextWrapper: {
    flexDirection: "column",
    marginLeft: 15,
    flex: 1,
    paddingRight: 10,
  },
  messageText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    marginTop: 4,
    color: "grey",
  },
  messageTime: {
    position: "absolute",
    right: 20,
    top: 12,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: "grey",
  },
  unreadBadge: {
    height: 25,
    width: 25,
    borderRadius: 30,
    position: "absolute",
    left: -10,
    top: -10,
    zIndex: 999,
  },
});

export default Messages;
