import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreenHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {!props.hideBackButton ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.backButton, { backgroundColor: Colors.primaryColor }]}
        >
          <Ionicons name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {props.showCameraButton ? (
        <TouchableOpacity
          style={[
            styles.cameraButton,
            { backgroundColor: Colors.primaryColor },
          ]}
        >
          <Ionicons name="camera" size={26} color="#FFF" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get("window").width,
    height: 60,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    top: 50,
    left: 0,
    zIndex: 999,
  },
  backButton: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraButton: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreenHeader;
