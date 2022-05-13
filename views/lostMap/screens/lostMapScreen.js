import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LostMap from "../components/lostMap";
import LostMapHeaderOptions from "../components/lostMapHeaderOptions";
import LostMapMenuOptions from "../components/lostMapMenuOptions";
import LostMapModal from "../components/lostMapModal";
import * as Location from "expo-location";

const LostMapScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    getLocationHandler();
  }, [getLocationHandler]);

  const getLocationHandler = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "UNABLE TO GET LOCATION!",
        "LOCATION PERMISSION HAS BEEN DENIED ON THIS DEVICE. YOU MUST ENABLE YOUR LOCATION IN YOUR APP SETTINGS TO PROPOSE DEALS.",
        [
          {
            text: "OK",
            onPress: () => setGettingLocation(false),
            style: "cancel",
          },
        ]
      );
    } else {
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
      });
      setUserLocation(location);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <LostMapModal
        visible={showModal}
        userLocation={userLocation}
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
