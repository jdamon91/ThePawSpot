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
    image: require("../../../assets/guy-3.jpg"),
    name: "Terrance",
  },
  {
    image: require("../../../assets/girl-3.jpg"),
    name: "Christin",
  },
  {
    image: require("../../../assets/guy-2.jpg"),
    name: "Shane",
  },
  {
    image: require("../../../assets/girl-2.jpg"),
    name: "Nicole",
  },
  ,
  {
    image: require("../../../assets/guy.jpg"),
    name: "Terrance",
  },
  {
    image: require("../../../assets/girl.jpg"),
    name: "Christin",
  },
];

const MessagesHeader = () => {
  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: Colors.secondaryColor },
      ]}
    >
      <Text style={styles.headerText}>Recent Contacts</Text>
      <ScrollView
        contentContainerStyle={styles.rootContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.userContainer}>
          {users.map((user, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.userImageContainer,
                  { marginLeft: index === 0 ? 20 : 0 },
                ]}
                key={index}
              >
                <View style={styles.headerImageContainer}>
                  <Image
                    key={index}
                    source={user.image}
                    style={styles.headerImage}
                  />
                </View>
                <Text style={styles.username}>{user.name}</Text>
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
    alignItems: "flex-end",
  },
  headerText: {
    color: "grey",
    fontFamily: "Poppins_600SemiBold",
    marginVertical: 10,
    marginLeft: 20,
  },
  headerContainer: {
    paddingBottom: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
  },
  userContainer: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  headerImageContainer: {
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
  userImageContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 20,
  },
  username: {
    color: "grey",
    marginTop: 3,
  },
});

export default MessagesHeader;
