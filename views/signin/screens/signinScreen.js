import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backButton, { backgroundColor: Colors.primaryColor }]}
      >
        <Ionicons name="chevron-back" size={32} color="#FFF" />
      </TouchableOpacity>
      <Text primaryColor style={styles.signinTitle}>
        Login Now
      </Text>
      <Text style={styles.signinSubTitle}>
        Please enter your login information below
      </Text>
      <Image
        source={require("../../../assets/signin-bg.png")}
        style={styles.backgroundImage}
      />
      <TextInput
        onChangeText={(email) => setEmail(email)}
        placeholder="Email Address"
        style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
      />
      <TextInput
        textContentType="password"
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
      />
      <Text primaryColor style={styles.signinForgotPassword}>
        Forgot Password?
      </Text>
      <TouchableOpacity
        onPress={signInUser}
        style={[styles.signinButton, { backgroundColor: Colors.primaryColor }]}
      >
        <Text white style={styles.signinButtonText}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text style={styles.signinSignupText}>
        Don't have an account?{" "}
        <Text
          onPress={() => navigation.navigate("Signup")}
          primaryColor
          style={styles.bold}
        >
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 25,
    marginTop: 50,
    paddingHorizontal: 30,
  },
  backgroundImage: {
    position: "absolute",
    top: -50,
    left: 0,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    zIndex: -1,
  },
  signinTitle: {
    fontSize: 36,
    fontFamily: "Poppins_700Bold",
    alignSelf: "center",
    marginTop: Dimensions.get("window").height * 0.175,
    marginBottom: 5,
    letterSpacing: 0.75,
  },
  signinSubTitle: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    alignSelf: "center",
    marginBottom: 10,
    color: "grey",
  },
  signinTextInput: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
  signinForgotPassword: {
    alignSelf: "flex-end",
    fontFamily: "Poppins_400Regular",
  },
  signinButton: {
    borderRadius: 30,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    marginTop: 30,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  signinButtonText: {
    fontFamily: "Poppins_600SemiBold",
    letterSpacing: 1,
    fontSize: 16,
  },
  signinSignupText: {
    fontFamily: "Poppins_400Regular",
    alignSelf: "center",
    marginTop: 25,
  },
  bold: {
    fontFamily: "Poppins_700Bold",
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 25,
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
});

export default SignInScreen;
