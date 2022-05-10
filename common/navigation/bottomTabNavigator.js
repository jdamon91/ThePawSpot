import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Colors } from "react-native-ui-lib";

// Screens
import HomeScreen from "../../views/home/screens/homeScreen";
import AccountProfileScreen from "../../views/profile/screens/accountProfileScreen";
import SettingsScreen from "../../views/settings/screens/settingsScreen";
import MessagesScreen from "../../views/messages/screens/messagesScreen";

// Icons
import { FontAwesome } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled={false}
      barStyle={{
        backgroundColor: Colors.secondaryColor,
        position: "absolute",
        overflow: "hidden",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      tabBarOptions={{
        tabBarShowLabel: false,
      }}
      activeColor={Colors.primaryColor}
      inactiveColor={Colors.inactive}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="home"
              color={color}
              size={34}
              style={{ height: 34, width: 34 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="envelope"
              color={color}
              size={30}
              style={{ height: 30, width: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={AccountProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="user"
              color={color}
              size={32}
              style={{ height: 32, width: 32 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="gear"
              color={color}
              size={32}
              style={{ height: 32, width: 32 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavBar;
