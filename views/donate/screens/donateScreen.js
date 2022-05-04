import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { Text, Colors } from "react-native-ui-lib";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import InfoBox from "../../profile/components/infoBox";

const DonateScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backButton, { backgroundColor: Colors.primaryColor }]}
      >
        <Ionicons name="chevron-back" size={32} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.donateButton, { backgroundColor: Colors.primaryColor }]}
      >
        <FontAwesome5 name="dollar-sign" size={32} color="#FFF" />
      </TouchableOpacity>
      <View style={styles.photoContainer}>
        <Image
          resizeMode="cover"
          style={styles.profileImage}
          source={require("../../../assets/donate-splash.png")}
        />
      </View>
      <ScrollView
        style={styles.infoContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text primaryColor style={styles.progressBarText}>
          55% of the way there!
        </Text>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            marginTop: 10,
          }}
        >
          <View style={{ borderRadius: 50, overflow: "hidden" }}>
            <ProgressBar
              style={styles.progressBar}
              progress={0.45}
              color={Colors.primaryColor}
              backgroundColor={Colors.secondaryColor}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.likeButton,
              { backgroundColor: Colors.primaryColor },
            ]}
          >
            <MaterialCommunityIcons name="charity" size={34} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoDescriptionContainer}>
          <Text style={styles.infoDescriptionTextBold}>Goal: </Text>
          <Text style={styles.infoDescriptionText}>$1,000.00</Text>
        </View>
        <View style={styles.infoDescriptionContainer}>
          <Text style={styles.infoDescriptionTextBold}>Amount Raised: </Text>
          <Text style={styles.infoDescriptionText}>$450.00</Text>
        </View>
        <View style={styles.infoDescriptionContainer}>
          <Text style={styles.infoDescriptionTextBold}>Summary: </Text>
          <Text style={styles.infoDescriptionText}>
            Fiona was recently diagnosed with a rare genetic disorder that
            requires immediate attention. Any help saving this sweet girl would
            be greatly appreciated! Please Help!
          </Text>
        </View>
        <View style={styles.infoBoxContainer}>
          <InfoBox
            title={"Fiona"}
            color={"#ffefce"}
            image={require("../../../assets/cat-enhanced.png")}
          />
          <InfoBox
            title={"Doctor"}
            color={"#ffefce"}
            image={require("../../../assets/vet-female.png")}
          />
          <InfoBox
            title={"Surgery"}
            color={"#ffefce"}
            image={require("../../../assets/surgery.png")}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.infoSectionActionButton,
            { backgroundColor: Colors.primaryColor },
          ]}
        >
          <Text style={styles.infoSectionActionButtonText}>DONATE NOW</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    position: "absolute",
    top: -10,
    right: -4,
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
  infoDescriptionTextBold: {
    fontFamily: "Poppins_700Bold",
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
  informationText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 12,
    marginTop: 3,
  },
  contactInfoContainer: {
    marginTop: 10,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 15,
    zIndex: 9999,
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  donateButton: {
    position: "absolute",
    top: 50,
    right: 15,
    zIndex: 9999,
    borderRadius: 50,
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  progressBar: {
    height: 30,
    width: 310,
    borderRadius: 50,
  },
  doctorAvatar: {
    width: 50,
    height: 50,
  },
  informationSection: {
    alignItems: "center",
  },
  avatarWrapper: {
    height: 70,
    width: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  progressBarText: {
    fontSize: 22,
    paddingTop: 2,
    alignSelf: "center",
    fontFamily: "Poppins_700Bold",
    letterSpacing: 0.5,
  },
});

export default DonateScreen;
