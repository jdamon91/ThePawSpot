import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import LostMap from "../components/lostMap";
import LostMapHeaderOptions from "../components/lostMapHeaderOptions";
import LostMapFooterOptions from "../components/lostMapFooterOptions";
import LostMapMenuOptions from "../components/lostMapMenuOptions";

const LostMapScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <LostMapHeaderOptions />
      <LostMap />
      <LostMapMenuOptions />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default LostMapScreen;
