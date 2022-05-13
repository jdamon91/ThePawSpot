import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { Colors } from "react-native-ui-lib";
import MapStyle from "./lostMapStyle";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { db } from "../../../firebase";

const LostMap = () => {
  const mapRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState("");
  const [showCards, setShowCards] = useState("flex");
  const [animalData, setAnimalData] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, [fetchAnimals]);

  const fetchAnimals = async () => {
    try {
      await db.collection("lostAnimals").onSnapshot((snapshot) => {
        const animals = [];
        snapshot.docs.forEach((animal) => {
          animals.push(animal.data());
        });
        setAnimalData(animals);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderAnimalPin = (animal, index) => {
    return (
      <Image
        source={{ uri: animal.photoUrl }}
        style={{
          height: activeIndex === index ? 55 : 40,
          width: activeIndex === index ? 55 : 40,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: Colors.primaryColor,
        }}
      />
    );
  };

  const pinPressHandler = (animal, index) => {
    setShowCards("none");
    setActiveIndex(index);
    // setActiveCard(animale.username);
    mapRef.current.animateToRegion(
      {
        latitude: animal.location?.coords?.latitude - 0.01,
        longitude: animal.location?.coords?.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      750
    );
    // setTimeout(() => {
    //   setShowCards("flex");
    //   listRef.current.scrollToItem({ item: contractor, animated: false });
    // }, 500);
  };

  return (
    <>
      <MapView
        clusterColor={Colors.primaryColor}
        maxZoom={10}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        customMapStyle={MapStyle}
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: 40.415,
          longitude: -80.01,
          latitudeDelta: 0.0952,
          longitudeDelta: 0.0471,
        }}
        toolbarEnabled={false}
        showsCompass={false}
        showsBuildings={false}
        showsMyLocationButton={false}
        followsUserLocation
        showsPointsOfInterest={false}
        zoomEnabled
        minZoomLevel={8} // default => 0
        maxZoomLevel={18}
        cacheEnabled={Platform.OS === "android" ? true : false}
        onPress={() => console.log("pressed")}
      >
        {animalData.map((animal, index) => {
          return (
            <Marker
              coordinate={animal.location?.coords}
              key={index}
              onPress={() => pinPressHandler(animal, index)}
              zIndex={index}
            >
              {renderAnimalPin(animal, index)}
            </Marker>
          );
        })}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {},
  pinBlip: {
    width: 16,
    height: 16,
    borderRadius: 10,
  },
  map: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 999,
  },
});

export default LostMap;
