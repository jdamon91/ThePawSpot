import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LostMapFooterOptions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.mainButton, { backgroundColor: Colors.primaryColor }]}
      >
        <Ionicons name="add" size={46} color="#FFF" style={{ left: 2 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingHorizontal: 10,
    width: Dimensions.get("window").width,
    zIndex: 999,
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
  },
  mainButton: {
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    bottom: 30,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default LostMapFooterOptions;
