import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";

const MapCard = ({ animal }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginRight: 20 }}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          navigation.navigate("AdoptionProfile", {
            animalId: animal?.photoUrl,
          })
        }
      >
        <View style={styles.card} key={animal?.photoUrl}>
          <View style={styles.cardInfoContainer}>
            <View style={styles.row}>
              <Image
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
    paddingBottom: 0,
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 15,
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.85,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "visible",
  },
  cardInfoContainer: {
    flexDirection: "column",
    overflow: "visible",
  },
  cardText: {
    fontFamily: "Poppins_400Regular",
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
    width: 125,
    height: 125,
    borderRadius: 100,
    marginRight: 19,
    borderWidth: 2,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  cardInfoTextContainer: {
    backgroundColor: "#FFF",
    width: Dimensions.get("window").width * 0.625,
    left: -60,
    zIndex: -1,
    paddingLeft: 55,
    marginVertical: 8,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 10,
    borderWidth: 2,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    paddingRight: 20,
  },
});

export default MapCard;
