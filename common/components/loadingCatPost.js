import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { Text, Colors } from "react-native-ui-lib";
export default function CatSpinner({ title }) {
  return (
    <View>
      <LottieView
        source={require("../../assets/loaders/postingCat.json")}
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
    width: 200,
    height: 200,
  },
  loadingText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    bottom: 70,
    letterSpacing: 0.5,
  },
});
