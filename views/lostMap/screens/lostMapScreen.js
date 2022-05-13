import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import LostMap from "../components/lostMap";
import LostMapHeaderOptions from "../components/lostMapHeaderOptions";
import LostMapMenuOptions from "../components/lostMapMenuOptions";
import LostMapModal from "../components/lostMapModal";

const LostMapScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.rootContainer}>
      <LostMapModal
        visible={showModal}
        closeModal={() => setShowModal(false)}
      />
      <LostMapHeaderOptions />
      <LostMap />
      <LostMapMenuOptions showModal={() => setShowModal(!showModal)} />
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
