import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Main")}
      style={[styles.rootContainer, { backgroundColor: Colors.primaryColor }]}
    >
      <Image
        style={styles.backgroundImage}
        source={require("../../../assets/main.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  backgroundImage: {
    position: "absolute",
    left: 0,
    top: 110,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.925,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    letterSpacing: 0.75,
    lineHeight: 35,
  },
  subTitle: {
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginTop: 15,
    color: "grey",
    fontSize: 16,
  },
  button: {
    paddingVertical: 5,
    borderRadius: 50,
    paddingLeft: 5,
    paddingRight: 80,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
  },
  buttonIconContainer: {
    height: 55,
    width: 55,
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    width: "100%",
    height: Dimensions.get("window").height < 700 ? 300 : 350,
  },
  textContainer: {
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.2,
    left: 0,
    alignSelf: "center",
    width: Dimensions.get("window").width,
    paddingHorizontal: 40,
  },
});

export default WelcomeScreen;
