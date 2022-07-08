import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Colors, Text } from "react-native-ui-lib";
import MapStyle from "./lostMapStyle";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { db } from "../../../firebase";
import MapCard from "./mapCard";
import { Ionicons } from "@expo/vector-icons";

const LostMap = (props) => {
  const mapRef = useRef(null);
  const listRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState("");
  const [showCards, setShowCards] = useState("none");
  const [animalData, setAnimalData] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, [fetchAnimals]);

  const onViewRef = React.useRef((viewableItems) => {
    const animal = viewableItems?.changed[0]?.item;
    setTimeout(() => {
      setActiveIndex(viewableItems?.changed[0]?.index);
    }, 600);
    mapRef.current.animateToRegion(
      {
        latitude: animal?.location?.coords?.latitude,
        longitude: animal?.location?.coords?.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      500
    );
    // Use viewable items in state or as intended
  });
  const viewConfigRef = React.useRef({
    viewAreaCoveragePercentThreshold: 65,
    waitForInteraction: true,
  });

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
    console.log(animal);
    props.hideMenu();
    setShowCards("none");
    setActiveIndex(index);
    // setActiveCard(animal.username);
    mapRef.current.animateToRegion(
      {
        latitude: animal.location?.coords?.latitude,
        longitude: animal.location?.coords?.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      750
    );
    setShowCards("flex");
    setTimeout(() => {
      listRef.current.scrollToIndex({ index: index, animated: false });
    }, 1000);
  };

  const centerTargetLocation = (animal, item) => {
    setActiveAnimal(animal.username);
    mapRef.current.animateToRegion(
      {
        latitude: animal?.location?.coords?.latitude,
        longitude: animal?.location?.coords?.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      1000
    );
    listRef.current.scrollToIndex({ index: item.index, animate: true });
  };

  return (
    <>
      <MapView
        onLongPress={() => {
          setShowCards(!showCards), props.showMenuButton();
        }}
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
      {!props.modal && !props.showMenu ? (
        <View
          style={[
            styles.scrollView,
            {
              display: showCards,
              backgroundColor: Colors.secondaryColor,
            },
          ]}
        >
          <FlatList
            ref={listRef}
            horizontal
            onViewableItemsChanged={onViewRef.current}
            showsHorizontalScrollIndicator={false}
            data={animalData}
            viewabilityConfig={viewConfigRef.current}
            keyExtractor={(animal) => animal.photoUrl}
            renderItem={(item) => {
              const animal = item.item;
              return (
                <View key={animal.photoUrl}>
                  <MapCard
                    animal={animal}
                    item={item}
                    centerTargetLocation={centerTargetLocation}
                    lastItem={item?.index === animalData?.length - 1}
                  />
                </View>
              );
            }}
          />
        </View>
      ) : null}
      {/* {!props.modal ? (
        <TouchableOpacity
          onPress={() => props.showModal()}
          style={[
            styles.createPostButton,
            { backgroundColor: Colors.primaryColor },
          ]}
        >
          <Text style={styles.createPostButtonText}>CREATE A POST</Text>
        </TouchableOpacity>
      ) : null} */}
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
  createPostButton: {
    zIndex: 99999,
    position: "absolute",
    bottom: 40,
    left: Dimensions.get("window").width * 0.05,
    width: Dimensions.get("window").width * 0.9,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 50,
  },
  map: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 999,
  },
  createPostButtonText: {
    fontFamily: "Poppins_700Bold",
    color: "#FFF",
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    height: Dimensions.get("window").height > 700 ? 230 : 195,
    width: Dimensions.get("window").width,
    zIndex: 9999,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "visible",
  },
  mapCardButton: {
    position: "absolute",
    top: 70,
    zIndex: 99999,
  },
});

export default LostMap;
