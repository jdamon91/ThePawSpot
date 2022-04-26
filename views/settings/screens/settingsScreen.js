import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();

  const settingsOptions = [
    { title: "Account", icon: "person-outline" },
    { title: "Notifications", icon: "notifications-outline" },
    { title: "Privacy & Security", icon: "lock-closed-outline" },
    { title: "Help and Support", icon: "headset-outline" },
    { title: "About Us", icon: "help-circle-outline" },
    {
      title: "Sign In",
      icon: "person",
      action: () => navigation.navigate("Signin"),
    },
  ];

  return (
    <View style={styles.rootContainer}>
      {settingsOptions.map((option, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionContainerWrapper,
              { borderBottomColor: Colors.inactive },
            ]}
            onPress={option.action}
          >
            <View style={styles.optionContainer}>
              <Ionicons name={option.icon} size={20} color="black" />
              <Text style={styles.optionText}>{option.title}</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward" size={20} color="grey" />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 25,
    marginTop: 50,
    paddingHorizontal: 30,
  },
  optionContainerWrapper: {
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontFamily: "Poppins_400Regular",
    marginLeft: 15,
  },
});

export default SettingsScreen;
