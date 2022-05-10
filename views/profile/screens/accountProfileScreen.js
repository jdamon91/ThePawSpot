import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Text, Colors, LoaderScreen } from "react-native-ui-lib";
import ProfileScreenHeader from "../components/profileScreenHeader";
import { Ionicons } from "@expo/vector-icons";
import InfoBox from "../components/infoBox";
import { db, auth } from "../../../firebase";
import LoadingCat from "../../../common/components/loadingCat";

const AccountProfileScreen = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(user);

  useEffect(() => {
    try {
      setLoading(true);
      db.collection("users")
        .doc(auth?.currentUser?.uid)
        .get()
        .then((data) => {
          setUser(data.data());
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <LoadingCat title="Loading..." />;
  }

  return (
    <View style={styles.rootContainer}>
      <ProfileScreenHeader />
      <View style={styles.photoContainer}>
        <Image
          resizeMode="cover"
          style={styles.profileImage}
          source={{ uri: user?.photoUrl }}
        />
      </View>
      <ScrollView
        style={styles.infoContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text primaryColor style={styles.textTitle}>
          Account Information
        </Text>
        <Text style={styles.textInputHelper}>Username</Text>
        <TextInput
          autoCapitalize="none"
          value={user?.username}
          onChangeText={(username) => setUsername(username)}
          placeholder="Username"
          style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Email Address</Text>
        <TextInput
          autoCapitalize="none"
          value={user?.email}
          textContentType="emailAddress"
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>First Name</Text>
        <TextInput
          value={user?.firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
          placeholder="First Name"
          style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Last Name</Text>
        <TextInput
          value={user?.lastName}
          onChangeText={(lastName) => setLastName(lastName)}
          placeholder="Last Name"
          style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 15 }}>
            <Text style={styles.textInputHelper}>City</Text>
            <TextInput
              value={user?.city}
              onChangeText={(city) => setCity(city)}
              placeholder="Your City"
              style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.textInputHelper}>State</Text>
            <TextInput
              value={user?.state}
              onChangeText={(state) => setState(state)}
              placeholder="Your State"
              style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.infoSectionActionButton,
            { backgroundColor: Colors.primaryColor },
          ]}
        >
          <Text style={styles.infoSectionActionButtonText}>SAVE</Text>
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
  textInputHelper: {
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
    color: "grey",
    bottom: -5,
    marginLeft: 2,
  },
  textTitle: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    alignSelf: "center",
    marginBottom: 8,
    letterSpacing: 0.75,
  },
  textInput: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
});

export default AccountProfileScreen;
