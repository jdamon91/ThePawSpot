import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavBar from "./bottomTabNavigator";

// Screens
import WelcomeScreen from "../../views/welcome/screens/welcomeScreen";
import LostMapScreen from "../../views/lostMap/screens/lostMapScreen";
import SigninScreen from "../../views/signin/screens/signinScreen";
import SignupScreen from "../../views/signup/screens/signupScreen";
import DonateScreen from "../../views/donate/screens/donateScreen";

const Stack = createNativeStackNavigator();

function MainStack() {
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
            component={LostMapScreen}
            options={{ headerShown: false }}
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
