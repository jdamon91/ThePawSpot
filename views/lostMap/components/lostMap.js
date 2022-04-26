import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import MapStyle from "./lostMapStyle";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";

const animalData = [
  {
    location: {
      latitude: 40.415,
      longitude: -80.0,
      latitudeDelta: 0.0952,
      longitudeDelta: 0.0471,
    },
  },
  {
    location: {
      latitude: 40.4,
      longitude: -80.01,
      latitudeDelta: 0.0952,
      longitudeDelta: 0.0471,
    },
  },
  {
    location: {
      latitude: 40.4299,
      longitude: -80.01,
      latitudeDelta: 0.0952,
      longitudeDelta: 0.0471,
    },
  },
  {
    location: {
      latitude: 40.44,
      longitude: -80.035,
      latitudeDelta: 0.0952,
      longitudeDelta: 0.0471,
    },
  },
  {
    location: {
      latitude: 40.38,
      longitude: -80.03,
      latitudeDelta: 0.0952,
      longitudeDelta: 0.0471,
    },
  },
];

const LostMap = () => {
  const mapRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState("");

  const renderAnimalPin = (animal, index) => {
    return (
      <Image
        source={require("../../../assets/paw.png")}
        style={{ height: 32, width: 32 }}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
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
        showsPointsOfInterest={false}
        zoomEnabled
        minZoomLevel={8} // default => 0
        maxZoomLevel={18}
        cacheEnabled={Platform.OS === "android" ? true : false}
      >
        {animalData.map((animal, index) => {
          return (
            <Marker
              coordinate={animal.location}
              key={index}
              onPress={() => pinPressHandler(animal, index)}
              zIndex={index}
            >
              {renderAnimalPin(animal, index)}
            </Marker>
          );
        })}
      </MapView>
    </View>
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
  },
});

export default LostMap;
