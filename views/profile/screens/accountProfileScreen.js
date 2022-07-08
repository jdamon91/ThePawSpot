import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Text, Colors } from "react-native-ui-lib";
import ProfileScreenHeader from "../components/profileScreenHeader";
import { db, auth } from "../../../firebase";
import BottomSheet from "@gorhom/bottom-sheet";

const AccountProfileScreen = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    db.collection("users")
      .doc(auth?.currentUser?.uid)
      .get()
      .then((data) => {
        setUser(data.data());
        setLoading(false);
      });
  };

  const updateUser = () => {
    db.collection("users").doc(auth?.currentUser?.uid).update(user);
  };

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        try {
          setLoading(true);
          fetchUser();
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [])
  );

  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["60%", "80%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <ProfileScreenHeader hideBackButton />
      <View style={styles.photoContainer}>
        <Image
          resizeMode="cover"
          style={styles.profileImage}
          source={{ uri: user?.photoUrl }}
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
        <View style={styles.infoContainer}>
          <Text primaryColor style={styles.textTitle}>
            Account Information
          </Text>
          <Text style={styles.textInputHelper}>Username</Text>
          <TextInput
            autoCapitalize="none"
            value={user?.username}
            onChangeText={(username) => setUser({ ...user, username })}
            placeholder="Username"
            style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
          />
          <Text style={styles.textInputHelper}>Email Address</Text>
          <TextInput
            autoCapitalize="none"
            value={user?.email}
            textContentType="emailAddress"
            onChangeText={(email) => setUser({ ...user, email })}
            placeholder="Email"
            style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
          />
          <Text style={styles.textInputHelper}>First Name</Text>
          <TextInput
            value={user?.firstName}
            onChangeText={(firstName) => setUser({ ...user, firstName })}
            placeholder="First Name"
            style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
          />
          <Text style={styles.textInputHelper}>Last Name</Text>
          <TextInput
            value={user?.lastName}
            onChangeText={(lastName) => setUser({ ...user, lastName })}
            placeholder="Last Name"
            style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, marginRight: 15 }}>
              <Text style={styles.textInputHelper}>City</Text>
              <TextInput
                value={user?.city}
                onChangeText={(city) => setUser({ ...user, city })}
                placeholder="Your City"
                style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textInputHelper}>State</Text>
              <TextInput
                value={user?.state}
                onChangeText={(state) => setUser({ ...user, state })}
                placeholder="Your State"
                style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={updateUser}
            style={[
              styles.infoSectionActionButton,
              { backgroundColor: Colors.primaryColor },
            ]}
          >
            <Text style={styles.infoSectionActionButtonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
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
