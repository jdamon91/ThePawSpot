import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function LoadingSpinner() {
  return (
    <View>
      <LottieView
        source={require("../../assets/loaders/spinner.json")}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 60,
    height: 60,
  },
});
