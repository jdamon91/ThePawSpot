import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";

const MapCard = ({ animal }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.cardContainer}
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
              <Text numberOfLines={3} style={styles.cardText}>
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
    marginRight: Dimensions.get("window").width * 0.05,
  },
  cardInfoContainer: {
    flexDirection: "column",
  },
  cardText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
    letterSpacing: 0.75,
  },
  cardTextTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
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
    height: 230,
    borderRadius: 30,
    marginTop: 10,
  },
  cardInfoTextContainer: {
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: Dimensions.get("window").width * 0.8,
    paddingBottom: 15,
    paddingHorizontal: 25,
    paddingTop: 10,
    opacity: 0.6,
  },
});

export default MapCard;
