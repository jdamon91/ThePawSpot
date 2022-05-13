import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, Colors, ExpandableSection } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

const supportQuestions = [
  {
    title: "How do I put an animal up for adoption?",
    answer:
      "We make it easy to share to others that you are looking to re-home. Follow the following steps...",
  },
  {
    title: "Where can I look to see if my pet has been found?",
    answer:
      "Looking for a lost animal? Go to our something page where our community is sure to help...",
  },
  {
    title: "I want to change my account type?",
    answer:
      "Changing your type of account is easy. Go to your account page and follow the following steps...",
  },
  {
    title: "How can I cancel my account?",
    answer:
      "To cancel your account all you need to do is go to your account page and do this. Follow the following steps...",
  },
  {
    title: "I want to change my account type?",
    answer:
      "Changing your type of account is easy. Go to your account page and follow the following steps...",
  },
  {
    title: "How can I cancel my account?",
    answer:
      "To cancel your account all you need to do is go to your account page and do this. Follow the following steps...",
  },
  {
    title: "I want to change my account type?",
    answer:
      "Changing your type of account is easy. Go to your account page and follow the following steps...",
  },
  {
    title: "How can I cancel my account?",
    answer:
      "To cancel your account all you need to do is go to your account page and do this. Follow the following steps...",
  },
];

const SupportScreen = () => {
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.rootContainer, { backgroundColor: Colors.secondaryColor }]}
    >
      <Text primaryColor style={[styles.supportTitle, { marginTop: 5 }]}>
        FAQ
      </Text>
      {supportQuestions.map((question, index) => {
        return (
          <View key={index}>
            <TouchableOpacity
              onPress={() => setActiveIndex(index)}
              style={styles.questionContainer}
            >
              <Text style={styles.supportText}>{question?.title}</Text>
              <Ionicons name="ios-caret-down" size={24} color="grey" />
            </TouchableOpacity>
            {activeIndex === index ? (
              <View style={styles.answerContainer}>
                <Text style={styles.supportTextAnswer}>{question?.answer}</Text>
              </View>
            ) : null}
          </View>
        );
      })}
      <Text primaryColor style={[styles.supportContactText, { fontSize: 22 }]}>
        Let us answer your questions
      </Text>
      <Text
        style={[styles.supportContactText, { color: "grey", marginTop: 5 }]}
      >
        Contact our support team!
      </Text>
      <TouchableOpacity
        style={[
          styles.supportActionButton,
          { backgroundColor: Colors.primaryColor },
        ]}
      >
        <Text style={styles.supportButtonText}>CONTACT NOW</Text>
      </TouchableOpacity>
      <Image
        source={require("../../../assets/cat3.png")}
        style={styles.supportImage}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {},
  supportTitle: {
    letterSpacing: 0.75,
    fontFamily: "Poppins_700Bold",
    fontSize: 48,
    alignSelf: "center",
    marginTop: 40,
  },
  supportText: {
    color: "grey",
    fontFamily: "Poppins_400Regular",
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
  },
  supportContactText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    marginTop: 15,
    alignSelf: "center",
    textAlign: "center",
  },
  supportTextAnswer: {
    color: "grey",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    width: "90%",
    alignSelf: "center",
    marginTop: 7,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
  },
  answerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    width: "95%",
    alignSelf: "center",
    paddingBottom: 7,
  },
  supportActionButton: {
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 25,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: "90%",
    alignSelf: "center",
  },
  supportButtonText: {
    color: "#FFF",
    fontFamily: "Poppins_700Bold",
    letterSpacing: 1,
  },
  supportImage: {
    height: 350,
    width: 350,
    alignSelf: "center",
    bottom: -40,
  },
});

export default SupportScreen;
