import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Colors, Text } from "react-native-ui-lib";
import MessagesHeader from "../components/messagesHeader";
import Messages from "../components/messages";

const MessagesScreen = () => {
  return (
    <View>
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: Colors.primaryColor },
        ]}
      >
        <MessagesHeader />
      </View>
      <Messages />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 250,
    width: Dimensions.get("window").width,
    justifyContent: "flex-end",
  },
});

export default MessagesScreen;
