import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import { Colors, Text } from "react-native-ui-lib";
import MapStyle from "./mapStyle";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";

const MapLocation = (props) => {
  const mapRef = useRef(null);

  const renderPin = () => {
    return (
      <Image
        source={{ uri: props.photoUrl }}
        style={{
          height: 40,
          width: 40,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: Colors.primaryColor,
        }}
      />
    );
  };

  const pinPressHandler = () => {
    mapRef.current.animateToRegion(
      {
        latitude: 40.415,
        longitude: -80.01,
        latitudeDelta: 0.0952,
        longitudeDelta: 0.0471,
      },
      750
    );
  };

  return (
    <View>
      <MapView
        maxZoom={10}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        customMapStyle={MapStyle}
        style={styles.map}
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
        <Marker
          coordinate={{
            latitude: 40.415,
            longitude: -80.01,
            latitudeDelta: 0.0952,
            longitudeDelta: 0.0471,
          }}
          onPress={() => pinPressHandler()}
        >
          {renderPin()}
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  pinBlip: {
    width: 16,
    height: 16,
    borderRadius: 10,
  },
  map: {
    height: 300,
    width: Dimensions.get("screen").width * 0.95,
    backgroundColor: Colors.white,
    borderRadius: 30,
    alignSelf: "center",
  },
});

export default MapLocation;
