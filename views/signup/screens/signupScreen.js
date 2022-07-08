import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../../../firebase";
import ImagePicker from "../../../common/components/imagePicker";
import LoadingCat from "../../../common/components/loadingCat";

const SignupScreen = () => {
  const navigation = useNavigation();
  const uid = auth.uid;
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [bio, setBio] = useState("");
  const [organization, setOrganization] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [primaryFocus, setPrimaryFocus] = useState("");
  const [shelterName, setShelterName] = useState("");
  const [shelterTitle, setShelterTitle] = useState("");
  const [shelterPhoneNumber, setShelterPhoneNumber] = useState("");
  const [shelterWebsite, setShelterWebsite] = useState("");
  const [description, setDescription] = useState("");

  const createNewUser = () => {
    try {
      setLoading(true);
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          db.collection("users").doc(user.uid).set({
            photoUrl,
            username,
            email,
            firstName,
            lastName,
            city,
            state,
            bio,
            organization,
            specialty,
            shelterName,
            shelterTitle,
            shelterPhoneNumber,
            shelterWebsite,
            primaryFocus,
          });
          setTimeout(() => {
            setLoading(false);
            navigation.navigate("Home");
          }, 3000);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } catch (error) {
      console.log(error);
    }
  };

  const renderInitialOptions = () => {
    return (
      <>
        <Text primaryColor style={styles.signinTitle}>
          Let's Get Started!
        </Text>
        <Text style={styles.signinSubTitle}>
          Let Us Know Below What Type Of Account You Need...
        </Text>
        <TouchableOpacity
          onPress={() => setActiveOptionIndex(1)}
          style={[
            styles.accountSignupOptionContainer,
            {
              backgroundColor:
                activeOptionIndex === 1 ? Colors.secondaryColor : "#FFF",
              borderColor: Colors.grey40,
            },
          ]}
        >
          {activeOptionIndex === 1 ? (
            <Ionicons
              name="checkmark-circle"
              size={32}
              color={Colors.primaryColor}
              style={styles.accountSignupOptionCheck}
            />
          ) : null}

          <Ionicons
            name="person"
            size={40}
            color={Colors.primaryColor}
            style={styles.accountSignupOptionImage}
          />
          <Text style={styles.accountSignupOptionText}>General</Text>
          <Text style={styles.accountSignupOptionSubText}>
            Looking to adopt or just want to browse adorable animals?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveOptionIndex(2)}
          style={[
            styles.accountSignupOptionContainer,
            {
              backgroundColor:
                activeOptionIndex === 2 ? Colors.secondaryColor : "#FFF",
              borderColor: Colors.grey40,
            },
          ]}
        >
          {activeOptionIndex === 2 ? (
            <Ionicons
              name="checkmark-circle"
              size={32}
              color={Colors.primaryColor}
              style={styles.accountSignupOptionCheck}
            />
          ) : null}
          <Image
            source={require("../../../assets/paw.png")}
            style={styles.accountSignupOptionImage}
          />
          <Text style={styles.accountSignupOptionText}>Professional</Text>
          <Text style={styles.accountSignupOptionSubText}>
            I work with animals and want to offer my services!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveOptionIndex(3)}
          style={[
            styles.accountSignupOptionContainer,
            {
              backgroundColor:
                activeOptionIndex === 3 ? Colors.secondaryColor : "#FFF",
              borderColor: Colors.grey40,
            },
          ]}
        >
          {activeOptionIndex === 3 ? (
            <Ionicons
              name="checkmark-circle"
              size={32}
              color={Colors.primaryColor}
              style={styles.accountSignupOptionCheck}
            />
          ) : null}
          <Image
            source={require("../../../assets/animal-adopt.png")}
            style={styles.accountSignupOptionImage}
          />
          <Text style={styles.accountSignupOptionText}>Animal Shelter</Text>
          <Text style={styles.accountSignupOptionSubText}>
            We want to show off all of our incredible animals to the world!
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderGeneralInputs = () => {
    return (
      <View>
        <View style={styles.imagePickerContainer}>
          <ImagePicker
            storeImage={(photoUrl) => setPhotoUrl(photoUrl)}
            setLoading={(value) => setImageLoading(value)}
            creating={true}
          />
        </View>
        <Text primaryColor style={styles.categoryTitle}>
          General Information
        </Text>
        <Text style={styles.textInputHelper}>Username</Text>
        <TextInput
          autoCapitalize="none"
          onChangeText={(username) => setUsername(username)}
          placeholder="Username"
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Email Address</Text>
        <TextInput
          autoCapitalize="none"
          textContentType="emailAddress"
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Create Password</Text>
        <TextInput
          textContentType="password"
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        {activeOptionIndex !== 3 ? (
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, marginRight: 15 }}>
              <Text style={styles.textInputHelper}>First Name</Text>
              <TextInput
                onChangeText={(firstName) => setFirstName(firstName)}
                placeholder="First Name"
                style={[
                  styles.signinTextInput,
                  { backgroundColor: Colors.grey80 },
                ]}
              />
            </View>
            <View style={{ flex: 1, marginRight: 15 }}>
              <Text style={styles.textInputHelper}>Last Name</Text>
              <TextInput
                onChangeText={(lastName) => setLastName(lastName)}
                placeholder="Last Name"
                style={[
                  styles.signinTextInput,
                  { backgroundColor: Colors.grey80 },
                ]}
              />
            </View>
          </View>
        ) : null}
        {activeOptionIndex === 1 ? (
          <>
            <Text style={styles.textInputHelper}>Bio</Text>
            <TextInput
              onChangeText={(text) => setDescription(text)}
              placeholder="Tell us more about you..."
              style={[
                styles.signinTextInput,
                { backgroundColor: Colors.grey80, paddingTop: 10 },
              ]}
              multiline
              textAlignVertical="center"
            />
          </>
        ) : null}
        {activeOptionIndex === 2 ? renderProfessionalOptions() : null}
        {activeOptionIndex === 3 ? renderShelterOptions() : null}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 15 }}>
            <Text style={styles.textInputHelper}>City</Text>
            <TextInput
              onChangeText={(city) => setCity(city)}
              placeholder="Your City"
              style={[
                styles.signinTextInput,
                { backgroundColor: Colors.grey80 },
              ]}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.textInputHelper}>State</Text>
            <TextInput
              onChangeText={(state) => setState(state)}
              placeholder="Your State"
              style={[
                styles.signinTextInput,
                { backgroundColor: Colors.grey80 },
              ]}
            />
          </View>
        </View>
        <Text
          primaryColor
          style={[styles.accountSignupOptionSubText, { marginTop: 25 }]}
        >
          By clicking next you agree to our privacy policy and end user
          agreement found here
        </Text>
      </View>
    );
  };

  const stepNextHandler = () => {
    if (currentStep === 2) {
      createNewUser();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const stepBackHandler = () => {
    if (currentStep !== 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigation.goBack();
    }
  };

  const renderOptions = () => {
    switch (currentStep) {
      case 1:
        return renderInitialOptions();
        break;
      case 2:
        return renderGeneralInputs();
        break;
      default:
        return renderInitialOptions();
        break;
    }
  };

  const renderNextButton = () => {
    return (
      <TouchableOpacity
        style={[styles.signinButton, { backgroundColor: Colors.primaryColor }]}
        onPress={stepNextHandler}
      >
        <Text white style={styles.signinButtonText}>
          NEXT
        </Text>
      </TouchableOpacity>
    );
  };

  const renderProfessionalOptions = () => {
    return (
      <>
        <Text style={styles.textInputHelper}>Organization</Text>
        <TextInput
          onChangeText={(organization) => setOrganization(organization)}
          placeholder="Your shelter name..."
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Specialty</Text>
        <TextInput
          onChangeText={(specialty) => setSpecialty(specialty)}
          placeholder="General, specialized?"
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Bio</Text>
        <TextInput
          onChangeText={(text) => setDescription(text)}
          placeholder="Tell us more about you..."
          style={[
            styles.signinTextInput,
            { backgroundColor: Colors.grey80, paddingTop: 10 },
          ]}
          multiline
          textAlignVertical="center"
        />
      </>
    );
  };

  const renderShelterOptions = () => {
    return (
      <>
        <Text primaryColor style={styles.categoryTitle}>
          Shelter Information
        </Text>
        <Text style={styles.textInputHelper}>Shelter Name</Text>
        <TextInput
          onChangeText={(shelterName) => setShelterName(shelterName)}
          placeholder="Where you work..."
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Shelter Animal Type</Text>
        <TextInput
          onChangeText={(primaryFocus) => setPrimaryFocus(primaryFocus)}
          placeholder="Cats, dogs, exotics?"
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Shelter Description</Text>
        <TextInput
          onChangeText={(text) => setDescription(text)}
          placeholder="Tell us more about your shelter..."
          style={[
            styles.signinTextInput,
            { backgroundColor: Colors.grey80, paddingTop: 10 },
          ]}
          multiline
          textAlignVertical="center"
        />
        <Text style={styles.textInputHelper}>Your Title</Text>
        <TextInput
          onChangeText={(primaryFocus) => setShelterTitle(primaryFocus)}
          placeholder="Coordinator, owner?"
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Shelter Phone Number</Text>
        <TextInput
          onChangeText={(value) => setShelterPhoneNumber(value)}
          placeholder="How to contact your shelter..."
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Shelter Website</Text>
        <TextInput
          onChangeText={(value) => setShelterWebsite(value)}
          placeholder="Your shelter's website..."
          style={[styles.signinTextInput, { backgroundColor: Colors.grey80 }]}
        />
      </>
    );
  };

  if (loading) {
    return <LoadingCat title="Creating your account..." />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.rootContainer}>
        <Image
          source={require("../../../assets/signin-bg.png")}
          style={styles.backgroundImage}
        />
        <TouchableOpacity
          onPress={stepBackHandler}
          style={[styles.backButton, { backgroundColor: Colors.primaryColor }]}
        >
          <Ionicons name="chevron-back" size={32} color="#FFF" />
        </TouchableOpacity>
        <View style={{ paddingTop: 50 }}>{renderOptions()}</View>
        {renderNextButton()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 25,
    marginTop: 50,
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  backgroundImage: {
    position: "absolute",
    top: -50,
    left: 0,
    height: Dimensions.get("window").height * 1.5,
    width: Dimensions.get("window").width,
    zIndex: -1,
  },
  signinTitle: {
    fontSize: 36,
    fontFamily: "Poppins_700Bold",
    alignSelf: "center",
    marginBottom: 5,
    letterSpacing: 0.75,
  },
  signinSubTitle: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    alignSelf: "center",
    marginBottom: 10,
    color: "grey",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  accountSignupOptionSubText: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    color: "grey",
    paddingHorizontal: 20,
    lineHeight: 15,
    marginTop: 5,
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
    marginTop: 15,
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
  accountSignupOptionContainer: {
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderWidth: 0,
    position: "relative",
  },
  accountSignupOptionText: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    letterSpacing: 0.5,
    color: "grey",
  },
  textInputHelper: {
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
    color: "grey",
    bottom: -5,
    marginLeft: 2,
  },
  accountSignupOptionImage: {
    height: 42,
    width: 42,
    marginBottom: 3,
  },
  accountSignupOptionCheck: {
    position: "absolute",
    top: 6,
    right: 6,
  },
  signinTextInput: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
  accountSignupOptionTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    textAlign: "center",
  },
  signupAvatar: {
    height: 175,
    width: 175,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: -15,
  },
  imagePickerContainer: {
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 5,
  },
  categoryTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    letterSpacing: 0.5,
    textAlign: "center",
    marginVertical: 5,
  },
});

export default SignupScreen;
