import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavBar from "./bottomTabNavigator";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native-ui-lib";
import { auth, db } from "../../firebase";

// Screens
import WelcomeScreen from "../../views/welcome/screens/welcomeScreen";
import LostMapScreen from "../../views/lostMap/screens/lostMapScreen";
import SigninScreen from "../../views/signin/screens/signinScreen";
import SignupScreen from "../../views/signup/screens/signupScreen";
import DonateScreen from "../../views/donate/screens/donateScreen";
import LostProfileScreen from "../../views/profile/screens/lostProfileScreen";
import AdoptionProfileScreen from "../../views/profile/screens/adoptionProfileScreen";
import UserProfileScreen from "../../views/profile/screens/userProfileScreen";
import ShelterProfileScreen from "../../views/profile/screens/shelterProfileScreen";
import AboutUsScreen from "../../views/settings/screens/aboutUsScreen";
import SupportScreen from "../../views/settings/screens/supportScreen";
import PrivacyScreen from "../../views/settings/screens/privacyScreen";

const Stack = createNativeStackNavigator();

function MainStack() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      db.collection("users")
        .doc(auth?.currentUser?.uid)
        .get()
        .then((data) => {
          data.data();
          setUser(data.data());
          setLoading(false);
        });
    } catch (error) {
      error;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={BottomTabNavBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LostMap"
            children={() => <LostMapScreen user={user} />}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AboutUs"
            component={AboutUsScreen}
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: Colors.secondaryColor,
                shadowColor: "transparent",
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              title: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesome
                    name="arrow-left"
                    size={28}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Privacy"
            component={PrivacyScreen}
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: Colors.secondaryColor,
                shadowColor: "transparent",
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              title: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesome
                    name="arrow-left"
                    size={28}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Support"
            component={SupportScreen}
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: Colors.secondaryColor,
                shadowColor: "transparent",
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              title: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesome
                    name="arrow-left"
                    size={28}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="AdoptionProfile"
            component={AdoptionProfileScreen}
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: Colors.secondaryColor,
                shadowColor: "transparent",
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              title: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesome
                    name="arrow-left"
                    size={28}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="LostProfile"
            component={LostProfileScreen}
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: Colors.secondaryColor,
                shadowColor: "transparent",
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              title: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesome
                    name="arrow-left"
                    size={28}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: Colors.secondaryColor,
                shadowColor: "transparent",
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              title: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesome
                    name="arrow-left"
                    size={28}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="ShelterProfile"
            component={ShelterProfileScreen}
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: Colors.secondaryColor,
                shadowColor: "transparent",
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
              },
              title: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesome
                    name="arrow-left"
                    size={28}
                    color={Colors.primaryColor}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Donate"
            component={DonateScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
