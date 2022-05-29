import React, { useEffect, useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// seed data
import {
  vetData,
  shelterData,
  lostPetData,
  donateData,
  adoptData,
} from "../extra/data";
import { db } from "../../../firebase";

const ResultsList = (props) => {
  const navigation = useNavigation();
  const [resultsData, setResultsData] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  const fetchLostPets = async () => {
    try {
      await db.collection("lostAnimals").onSnapshot((snapshot) => {
        const animals = [];
        snapshot.docs.forEach((animal) => {
          animals.push(animal.data());
        });
        setResultsData(animals);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    animateResults();
    if (props?.activeCategory === "Vets") {
      setTimeout(() => {
        setResultsData(vetData);
      }, 100);
    } else if (props?.activeCategory === "Shelters") {
      setTimeout(() => {
        setResultsData(shelterData);
      }, 100);
    } else if (props?.activeCategory === "Lost Pets") {
      setTimeout(() => {
        fetchLostPets();
      }, 100);
    } else if (props?.activeCategory === "Donate") {
      setTimeout(() => {
        setResultsData(donateData);
      }, 100);
    } else if (props?.activeCategory === "Adopt") {
      setTimeout(() => {
        setResultsData(adoptData);
      }, 100);
    }
  }, [props?.activeCategory]);

  const animateResults = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 100);
  };

  const renderStandardCardOption = (item) => {
    if (!item.distance) {
      return null;
    }
    return (
      <View style={styles.resultsListItemBodyOptionContainer}>
        <Image
          source={require("../../../assets/map-marker-hospital.png")}
          style={styles.resultsListItemBodyOptionIcon}
        />
        <Text style={styles.resultsListItemBodyOptionDistance}>
          {item.distance}
        </Text>
      </View>
    );
  };

  const renderLostPetCardOption = (item) => {
    return (
      <View style={styles.lostPetItemWrapper}>
        <Text style={styles.lostPetItemTitle}>{item?.animalType}</Text>
        <Text style={styles.lostPetItemText} numberOfLines={2}>
          {item?.additionalInfo}
        </Text>
      </View>
    );
  };

  const renderDonateCardOption = (item) => {
    if (!item.goal || !item.raised) {
      return null;
    }
    return (
      <View style={styles.resultsListItemBodyOptionContainer}>
        <Text
          style={[styles.resultsListItemBodyOptionDistance, { marginLeft: 3 }]}
        >
          ${item?.raised} / ${item?.goal}
        </Text>
      </View>
    );
  };

  const renderAdoptCardOption = (item) => {
    if (!item.age) {
      return null;
    }
    return (
      <View style={styles.resultsListItemBodyOptionContainer}>
        <Text
          style={[styles.resultsListItemBodyOptionDistance, { marginLeft: 3 }]}
        >
          {item?.age} old
        </Text>
      </View>
    );
  };

  const renderCardBody = (item) => {
    if (props?.activeCategory === "Lost Pets") {
      return renderLostPetCardOption(item);
    } else if (props?.activeCategory === "Donate") {
      return renderDonateCardOption(item);
    } else if (props?.activeCategory === "Adopt") {
      return renderAdoptCardOption(item);
    } else {
      return renderStandardCardOption(item);
    }
  };

  const navigationHandler = (item) => {
    if (props?.activeCategory === "Donate") {
      navigation.navigate("Donate", {
        photoUrl: item.photoUrl,
        name: item.name,
      });
    }
    if (props?.activeCategory === "Lost Pets") {
      navigation.navigate("LostProfile", {
        animalId: item?.uid,
      });
    }
    if (props?.activeCategory === "Adopt") {
      navigation.navigate("AdoptionProfile", {
        photoUrl: item.photoUrl,
        name: item.name,
      });
    }
    if (props?.activeCategory === "Vets") {
      navigation.navigate("UserProfile", {
        photoUrl: item.photoUrl,
        name: item.name,
      });
    }
    if (props?.activeCategory === "Shelters") {
      navigation.navigate("ShelterProfile", {
        photoUrl: item.photoUrl,
        name: item.name,
      });
    }
  };

  return (
    <Animated.View style={[styles.resultsListContainer, { opacity: fadeAnim }]}>
      {resultsData.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => navigationHandler(item)}
            key={index}
            style={styles.resultsListItem}
          >
            <View
              style={[
                styles.resultsListItemContainer,
                {
                  backgroundColor: Colors.secondaryColor,
                },
              ]}
            >
              <View
                style={[
                  styles.resultsListItemIconContainer,
                  { backgroundColor: Colors.primaryColor },
                ]}
              >
                <Image
                  source={{ uri: item.photoUrl }}
                  style={[
                    styles.resultsListItemIcon,
                    { tintColor: item?.tintColor ? item?.tintColor : null },
                  ]}
                />
              </View>
              <View style={styles.resultsListItemBody}>
                <Text style={styles.resultsListItemBodyTitle}>{item.name}</Text>
                <Text style={styles.resultsListItemBodyText}>{item.title}</Text>
                {renderCardBody(item)}
              </View>
              <View
                style={[
                  styles.resultsListItemButton,
                  { backgroundColor: Colors.primaryColor },
                ]}
              >
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={20}
                  color="#FFF"
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity style={styles.resultsListAllButton}>
        <Text textSecondary style={styles.resultsListAllButtonText}>
          View All Results
        </Text>
        <FontAwesome
          name="arrow-right"
          size={13}
          color={Colors.textSecondary}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  resultsListContainer: {
    padding: 5,
    paddingBottom: 100,
  },
  resultsListItemContainer: {
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  resultsListItem: {
    alignItems: "center",
    marginTop: 10,
  },
  resultsListItemText: {
    fontSize: 14,
    marginTop: 3,
    letterSpacing: 0.2,
  },
  resultsListItemIcon: {
    width: 75,
    height: 75,
    borderRadius: 18,
  },
  resultsListItemIconContainer: {
    borderRadius: 20,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  resultsListItemButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  resultsListItemBody: {
    alignSelf: "flex-start",
    paddingTop: 20,
    paddingLeft: 12,
    flex: 1,
  },
  resultsListItemBodyTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
  },
  resultsListItemBodyText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  resultsListItemBodyOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: -3,
  },
  resultsListItemBodyOptionIcon: {
    height: 20,
    width: 20,
  },
  resultsListItemBodyOptionDistance: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  resultsListAllButton: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  resultsListAllButtonText: {
    fontFamily: "Poppins_600SemiBold",
    marginRight: 3,
  },
  lostPetItemWrapper: {
    top: -25,
    marginRight: 10,
  },
  lostPetItemTitle: {
    fontFamily: "Poppins_600SemiBold",
  },
  lostPetItemText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
  },
});

export default ResultsList;
