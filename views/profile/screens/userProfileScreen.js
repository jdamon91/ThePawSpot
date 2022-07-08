import React, { useCallback, useMemo, useRef } from "react";
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
import MapLocation from "../../../common/components/mapLocation";
import BottomSheet from "@gorhom/bottom-sheet";

const UserProfileScreen = () => {
  const route = useRoute();

  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["60%", "80%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const { photoUrl, name } = route.params;
  console.log(photoUrl);
  return (
    <View style={styles.rootContainer}>
      <ProfileScreenHeader />
      <View style={styles.photoContainer}>
        <Image
          resizeMode="cover"
          style={styles.profileImage}
          source={{ uri: photoUrl }}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{
          backgroundColor: Colors.primaryColor,
          height: 7,
          width: 50,
          marginBottom: 15,
        }}
      >
        <ScrollView
          style={styles.infoContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <View style={styles.column}>
              <Text style={styles.infoTitle}>{name}</Text>

              <View style={[styles.row, { marginTop: 5 }]}>
                <Ionicons name="location" size={16} color="#ababad" />
                <Text style={styles.infoLocationText}>
                  Blue Pearl Animal Hospital
                </Text>
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
            <InfoBox
              title={"General"}
              subTitle={"Specialty"}
              color={"#ffefce"}
            />
            <InfoBox
              title={"8 Years"}
              subTitle={"Experience"}
              color={"#f7f7f7"}
            />
            <InfoBox title={"Very"} subTitle={"Responsive"} color={"#ffefce"} />
          </View>
          <View style={styles.infoDescriptionContainer}>
            <Text style={styles.infoDescriptionText} numberOfLines={4}>
              Hi There! I am Dr. Bradley 😁, an animal lover and advocate
              through and through ❤️! I specialize in most general pets and
              would love to see yours! Send me a message 💬 and let's chat!
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.infoSectionActionButton,
              { backgroundColor: Colors.primaryColor, marginBottom: 30 },
            ]}
          >
            <Text style={styles.infoSectionActionButtonText}>CHAT NOW</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 150 }}>
            <MapLocation photoUrl={photoUrl} />
          </View>
        </ScrollView>
      </BottomSheet>
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

export default UserProfileScreen;
