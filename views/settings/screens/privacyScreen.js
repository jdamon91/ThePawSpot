import React from "react";
import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import { Text, Colors } from "react-native-ui-lib";

const PrivacyScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.rootContainer, { backgroundColor: Colors.secondaryColor }]}
    >
      <Text primaryColor style={[styles.privacyTitle, { marginTop: 15 }]}>
        Privacy Policy
      </Text>
      <Text style={styles.privacyText}>
        At The PawSpot, one of our main priorities is the privacy of our
        visitors. This Privacy Policy document contains types of information
        that is collected and recorded by The PawSpot and how we use it.
      </Text>
      <Text style={styles.privacyText}>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </Text>
      <Text primaryColor style={styles.privacyTextTitle}>
        Log Files
      </Text>
      <Text style={styles.privacyText}>
        The PawSpot follows a standard procedure of using log files. These files
        log visitors when they use app. The information collected by log files
        include internet protocol (IP) addresses, browser type, Internet Service
        Provider (ISP), date and time stamp, referring/exit pages, and possibly
        the number of clicks. These are not linked to any information that is
        personally identifiable. The purpose of the information is for analyzing
        trends, administering the app, tracking users' movement on the app, and
        gathering demographic information.
      </Text>
      <Text primaryColor style={styles.privacyTextTitle}>
        Our Advertising Partners
      </Text>
      <Text style={styles.privacyText}>
        Some of advertisers in our app may use cookies and web beacons. Our
        advertising partners are listed below. Each of our advertising partners
        has their own Privacy Policy for their policies on user data. For easier
        access, we hyperlinked to their Privacy Policies below.
      </Text>
      <Text style={styles.privacyText}>Google</Text>
      <Text style={styles.privacyText}>
        https://policies.google.com/technologies/ads
      </Text>
      <Text primaryColor style={styles.privacyTextTitle}>
        Privacy Policies
      </Text>
      <Text style={styles.privacyText}>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of The PawSpot.
      </Text>
      <Text style={styles.privacyText}>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Beacons that are used in their respective advertisements
        and links that appear on The PawSpot. They automatically receive your IP
        address when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on this app or other apps or websites.
      </Text>
      <Text style={styles.privacyText}>
        Note that The PawSpot has no access to or control over these cookies
        that are used by third-party advertisers.
      </Text>
      <Text primaryColor style={styles.privacyTextTitle}>
        Third Party Privacy Policies
      </Text>
      <Text style={styles.privacyText}>
        The PawSpot's Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.
      </Text>
      <Text primaryColor style={styles.privacyTextTitle}>
        Children's Information
      </Text>
      <Text style={styles.privacyText}>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </Text>
      <Text style={styles.privacyText}>
        The PawSpot does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our App, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </Text>
      <Text primaryColor style={styles.privacyTextTitle}>
        Online Privacy Policy Only
      </Text>
      <Text style={styles.privacyText}>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our App with regards to the information that they shared
        and/or collect in The PawSpot. This policy is not applicable to any
        information collected offline or via channels other than this app.{" "}
      </Text>
      <Text primaryColor style={styles.privacyTextTitle}>
        Consent
      </Text>
      <Text style={[styles.privacyText, { marginBottom: 75 }]}>
        By using our app, you hereby consent to our Privacy Policy and agree to
        its Terms and Conditions.
      </Text>
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
  privacyTitle: {
    letterSpacing: 0.75,
    fontFamily: "Poppins_700Bold",
    fontSize: 40,
    alignSelf: "center",
    marginTop: 40,
  },
  privacyText: {
    color: "grey",
    letterSpacing: 0.5,
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
    marginVertical: 8,
  },
  privacyTextTitle: {
    letterSpacing: 0.5,
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    width: "90%",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 15,
  },
});

export default PrivacyScreen;
