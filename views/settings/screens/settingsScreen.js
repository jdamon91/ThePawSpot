import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        try {
          setAuthenticated(auth.currentUser?.uid);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [auth.currentUser])
  );

  console.log(auth.currentUser, authenticated);

  const settingsOptions = [
    {
      title: "Account",
      icon: "person-outline",
      action: () => navigation.navigate("MyProfile"),
    },
    { title: "Notifications", icon: "notifications-outline" },
    { title: "Privacy & Security", icon: "lock-closed-outline" },
    {
      title: "Help and Support",
      icon: "headset-outline",
      action: () => navigation.navigate("Support"),
    },
    {
      title: "About Us",
      icon: "help-circle-outline",
      action: () => navigation.navigate("AboutUs"),
    },
    {
      title: authenticated ? "Sign Out" : "Sign In",
      icon: "person",
      action: authenticated
        ? () => {
            auth.signOut(), setAuthenticated(false);
          }
        : () => navigation.navigate("Signin"),
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
