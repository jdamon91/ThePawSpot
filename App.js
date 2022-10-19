import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import MainStack from "./common/navigation/stackNavigator";
import { MenuProvider } from "react-native-popup-menu";
import FlashMessage from "react-native-flash-message";

// Style Setup
import "./common/styles/mainStyleConfig";

// Assets Setup
import "./common/assets/mainAssetsConfig";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MenuProvider>
      <FlashMessage position="top" />
      <MainStack />
    </MenuProvider>
  );
}
