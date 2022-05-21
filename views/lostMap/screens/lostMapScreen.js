import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LostMap from "../components/lostMap";
import LostMapHeaderOptions from "../components/lostMapHeaderOptions";
import LostMapMenuOptions from "../components/lostMapMenuOptions";
import LostMapModal from "../components/lostMapModal";
import * as Location from "expo-location";

const LostMapScreen = (props) => {
  console.log("test", props.user);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
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
        user={props?.user}
      />
      <LostMapHeaderOptions />
      <LostMap
        hideMenu={() => setShowMenu(false)}
        showMenuButton={() => setShowMenu(!showMenu)}
        showModal={() => setShowModal(true)}
        modal={showModal}
        showMenu={showMenu}
      />
      {showMenu ? (
        <LostMapMenuOptions showModal={() => setShowModal(!showModal)} />
      ) : null}
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
