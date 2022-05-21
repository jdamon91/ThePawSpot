import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";

const MapCard = ({ animal, lastItem }) => {
  const navigation = useNavigation();
  const [likedPost, setLikedPost] = useState(false);

  const renderLikedIcon = () => {
    if (likedPost) {
      return (
        <Ionicons
          style={[styles.cardLikeButton, { marginRight: lastItem ? 25 : 0 }]}
          name="heart"
          size={46}
          color="red"
          onPress={() => setLikedPost(!likedPost)}
        />
      );
    }
    return (
      <Ionicons
        style={[styles.cardLikeButton, { marginRight: lastItem ? 25 : 0 }]}
        name="heart-outline"
        size={40}
        color="#FFF"
        onPress={() => setLikedPost(true)}
      />
    );
  };

  return (
    <View>
      {renderLikedIcon()}
      <TouchableOpacity
        style={[styles.cardContainer, { marginRight: lastItem ? 25 : 0 }]}
        onPress={() =>
          navigation.navigate("LostProfile", {
            animalId: animal?.uid,
          })
        }
      >
        <View style={styles.card} key={animal?.photoUrl}>
          <View style={styles.cardInfoContainer}>
            <Image
              resizeMode="cover"
              source={{ uri: animal?.photoUrl }}
              style={[styles.avatar, { borderColor: Colors.primaryColor }]}
            />
            <View
              style={[
                styles.cardInfoTextContainer,
                { borderColor: Colors.primaryColor },
              ]}
            >
              <Text numberOfLines={1} style={styles.cardTextTitle}>
                {animal.animalType}
              </Text>
              <Text numberOfLines={2} style={styles.cardText}>
                {animal.additionalInfo}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  center: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 8,
  },
  cardCategoryText: {
    fontSize: 14,
    color: "grey",
  },
  cardContainer: {
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.8,
    marginLeft: Dimensions.get("window").width * 0.05,
  },
  cardInfoContainer: {
    flexDirection: "column",
  },
  cardText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    letterSpacing: 0.75,
  },
  cardTextTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    letterSpacing: 0.75,
  },
  cardButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginRight: 25,
  },
  profileButtonText: {
    color: "#353839",
    marginRight: 8,
  },
  profileButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#353839",
    height: 45,
    width: 45,
    justifyContent: "center",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: "100%",
    height: 200,
    borderRadius: 30,
    marginTop: 10,
  },
  cardInfoTextContainer: {
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: Dimensions.get("window").width * 0.8,
    paddingBottom: 8,
    paddingHorizontal: 25,
    paddingTop: 5,
    opacity: 0.8,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  cardLikeButton: {
    position: "absolute",
    top: 15,
    right: 6,
    zIndex: 9999,
  },
});

export default MapCard;
