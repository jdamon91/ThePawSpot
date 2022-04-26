import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors, Text } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

const ContactInfoBox = ({ title, subTitle }) => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <View style={styles.row}>
          <View style={styles.infoImageContainer}>
            <Image
              style={styles.infoImage}
              source={require("../../../assets/vet-female.png")}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.infoButton,
              { backgroundColor: Colors.primaryColor },
            ]}
          >
            <Ionicons name="call" size={22} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.infoButton,
              { backgroundColor: Colors.primaryColor },
            ]}
          >
            <Ionicons name="chatbubble" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins_700Bold",
  },
  subTitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    marginTop: 1,
    color: "gray",
  },
  infoImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#fdeac2",
    marginRight: 15,
  },
  infoImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
  },
  infoButton: {
    height: 36,
    width: 36,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default ContactInfoBox;
