import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CategoryList from "../components/categoryList";
import { View, Text, Colors } from "react-native-ui-lib";
import ResultsList from "../components/resultsList";
import ImageCarousel from "../components/imageCarousel";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Vets");
  const navigation = useNavigation();

  return (
    <View useSafeArea style={styles.rootContainer}>
      <ScrollView
        style={styles.rootContainerScrollView}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("LostMap")}
          style={[styles.mapButton, { backgroundColor: Colors.primaryColor }]}
        >
          <Ionicons name="map" size={24} color={Colors.secondaryColor} />
          <Text secondaryColor style={styles.mapButtonText}>
            Map
          </Text>
        </TouchableOpacity>
        <Text style={styles.homeTitleText}>Hi Josh,</Text>
        <Text black style={styles.homeSubTitleText}>
          Good Morning!
        </Text>
        <ImageCarousel />
        <View style={styles.homeSectionContainer}>
          <View style={styles.homeCategoryHeaderContainer}>
            <Text style={styles.homeCategoryHeaderTitle}>Category</Text>
            <TouchableOpacity>
              <Text textSecondary style={styles.homeCategoryHeaderText}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <CategoryList
            changeActiveCategory={(category) =>
              setActiveCategory(category?.title)
            }
          />
        </View>
        <View style={styles.homeSectionContainer}>
          <View style={styles.homeCategoryHeaderContainer}>
            <Text style={styles.homeCategoryHeaderTitle}>
              Nearby {activeCategory}
            </Text>
            <TouchableOpacity>
              <Text textSecondary style={styles.homeCategoryHeaderText}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ResultsList activeCategory={activeCategory} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 64,
  },
  homeTitleText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    marginLeft: 5,
  },
  homeSubTitleText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 24,
    marginLeft: 5,
  },
  homeImage: {
    width: 238,
    height: 170,
    alignSelf: "flex-end",
  },
  homeImageContainer: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingRight: 5,
    marginTop: 25,
    position: "relative",
  },
  homeImageTitle: {
    position: "absolute",
    left: 20,
    top: 15,
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
  },
  homeImageButton: {
    backgroundColor: Colors.white,
    position: "absolute",
    bottom: 15,
    left: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    width: 100,
    alignItems: "center",
  },
  homeImageButtonText: {
    fontFamily: "Poppins_600SemiBold",
  },
  homeCategoryHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 25,
  },
  homeCategoryHeaderText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
  },
  homeCategoryHeaderTitle: {
    fontFamily: "Poppins_600SemiBold",
  },
  rootContainerScrollView: {
    height: Dimensions.get("window").height * 0.9,
    paddingHorizontal: 24,
  },
  mapButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    top: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    zIndex: 9999,
  },
  mapButtonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 10,
    top: -2,
  },
});

export default HomeScreen;
