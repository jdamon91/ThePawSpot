import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { Text, Colors } from "react-native-ui-lib";
import { useState } from "react";
export default function CatSpinner({ title }) {
  return (
    <View
      style={[styles.rootContainer, { backgroundColor: Colors.secondaryColor }]}
    >
      <LottieView
        source={require("../../assets/loaders/catSpinner.json")}
        style={styles.animation}
        autoPlay
      />
      <Text style={[styles.loadingText, { color: Colors.orange20 }]}>
        {title}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 275,
    height: 275,
    bottom: 30,
  },
  rootContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  loadingText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    bottom: 70,
    letterSpacing: 0.5,
  },
});
