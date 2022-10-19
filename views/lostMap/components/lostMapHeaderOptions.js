import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LostMapHeaderOptions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backButton, { backgroundColor: Colors.primaryColor }]}
      >
        <Ionicons name="chevron-back" size={32} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.backButton,
          { backgroundColor: Colors.primaryColor, height: 45, width: 45 },
        ]}
      >
        <Ionicons name="ios-options" size={32} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: Dimensions.get("window").height * 0.06,
    paddingHorizontal: 10,
    width: Dimensions.get("window").width,
    zIndex: 9999,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default LostMapHeaderOptions;
