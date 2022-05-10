import React from "react";
import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { FontAwesome5 } from "@expo/vector-icons";

const AboutUsScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.rootContainer, { backgroundColor: Colors.secondaryColor }]}
    >
      <Text primaryColor style={[styles.aboutUsTitle, { marginTop: 15 }]}>
        THE PAWSPOT
      </Text>
      <Text style={styles.aboutUsText}>
        AN APP THAT IS ALL ANIMALS, ALL THE TIME!
      </Text>
      <Image
        style={styles.supportingImage}
        source={require("../../../assets/cat2.png")}
      />
      <Text primaryColor style={[styles.aboutUsTitle, { fontSize: 34 }]}>
        OUR MISSION
      </Text>
      <Text style={styles.aboutUsText}>
        HELP AS MANY ANIMALS AS WE POSSIBLY CAN!
      </Text>
      <Image
        style={[styles.supportingImage, { transform: [{ rotateZ: "-7deg" }] }]}
        source={require("../../../assets/retriever.png")}
      />
      <Text primaryColor style={[styles.aboutUsTitle, { fontSize: 34 }]}>
        BE THE DIFFERENCE
      </Text>
      <Text style={styles.aboutUsText}>
        GIVING PET OWNERS THE TOOLS THEY NEED
      </Text>
      <Image
        style={styles.supportingImage}
        source={require("../../../assets/catdog.png")}
      />
      <Text primaryColor style={[styles.aboutUsTitle, { fontSize: 34 }]}>
        CONNECT WITH US
      </Text>
      <Text style={styles.aboutUsText}>JOIN IN ON MAKING THE DIFFERENCE!</Text>
      <View style={styles.iconContainer}>
        <FontAwesome5
          style={styles.socialMediaIcon}
          name="facebook-square"
          size={60}
          color="grey"
        />
        <FontAwesome5
          style={styles.socialMediaIcon}
          name="instagram"
          size={60}
          color="grey"
        />
        <FontAwesome5
          style={styles.socialMediaIcon}
          name="twitter"
          size={60}
          color="grey"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {},
  coverImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  aboutUsTitle: {
    letterSpacing: 0.75,
    fontFamily: "Poppins_700Bold",
    fontSize: 40,
    alignSelf: "center",
    marginTop: 40,
  },
  aboutUsText: {
    color: "grey",
    letterSpacing: 0.5,
    fontFamily: "Poppins_700Bold",
    fontSize: 19,
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
  },
  supportingImage: {
    height: 270,
    width: 270,
    marginTop: 40,
    transform: [{ rotateZ: "7deg" }],
    alignSelf: "center",
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 75,
    paddingHorizontal: 20,
    justifyContent: "center",
    marginTop: 25,
  },
  socialMediaIcon: {
    marginHorizontal: 20,
  },
});

export default AboutUsScreen;
