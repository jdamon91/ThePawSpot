import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import ProfileScreenHeader from "../components/profileScreenHeader";
import ContactInfoBox from "../components/contactInfoBox";
import { Ionicons } from "@expo/vector-icons";
import InfoBox from "../components/infoBox";
import { useRoute } from "@react-navigation/native";

const ShelterProfileScreen = () => {
  const route = useRoute();
  const { name, photoUrl } = route.params;
  return (
    <View style={styles.rootContainer}>
      <View style={styles.photoContainer}>
        <Image
          resizeMode="cover"
          style={styles.profileImage}
          source={{ uri: photoUrl }}
        />
      </View>
      <ScrollView
        style={styles.infoContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View style={styles.column}>
            <Text style={styles.infoTitle}>{name}</Text>
            <View style={[styles.row, { marginTop: 5 }]}>
              <Ionicons name="location" size={16} color="#ababad" />
              <Text style={styles.infoLocationText}>Raleigh, NC (5 miles)</Text>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.likeButton,
              { backgroundColor: Colors.primaryColor },
            ]}
          >
            <Ionicons name="heart" size={26} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoBoxContainer}>
          <InfoBox title={"Female"} subTitle={"Sex"} color={"#ffefce"} />
          <InfoBox title={"1 Year"} subTitle={"Age"} color={"#f7f7f7"} />
          <InfoBox title={"9kg"} subTitle={"Weight"} color={"#ffefce"} />
        </View>
        <View style={styles.contactInfoContainer}>
          <ContactInfoBox title={"Heather"} subTitle={"Adoption Coordinator"} />
        </View>
        <View style={styles.infoDescriptionContainer}>
          <Text style={styles.infoDescriptionText} numberOfLines={4}>
            Furever Animal Shelter has made it their mission to love and support
            a wide variety of animals in need of a place to call home. Come and
            visit our furry friends today and find your next furever friend!
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.infoSectionActionButton,
            { backgroundColor: Colors.primaryColor },
          ]}
        >
          <Text style={styles.infoSectionActionButtonText}>GET DIRECTIONS</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: "#FFF",
  },
  photoContainer: {
    backgroundColor: "#FFF",
    height: Dimensions.get("window").height * 0.45,
  },
  infoContainer: {
    backgroundColor: "#FFF",
    height: Dimensions.get("window").height * 0.55,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 100,
    top: -25,
  },
  profileImage: {
    height: "100%",
    width: "100%",
  },
  infoTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
  },
  infoLocationText: {
    fontFamily: "Poppins_400Regular",
    marginLeft: 5,
    color: "#ababad",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  likeButton: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  infoBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
  },
  infoDescriptionContainer: {
    paddingHorizontal: 5,
    marginTop: 15,
  },
  infoDescriptionText: {
    fontFamily: "Poppins_400Regular",
    color: "grey",
  },
  infoSectionActionButton: {
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 100,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  infoSectionActionButtonText: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
    letterSpacing: 1,
  },
  contactInfoContainer: {
    marginTop: 10,
  },
});

export default ShelterProfileScreen;
