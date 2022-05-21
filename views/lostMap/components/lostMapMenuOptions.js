import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Colors } from "react-native-ui-lib";
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "Report A Lost Animal",
    icon: (
      <Image
        source={require("../../../assets/paw.png")}
        style={{ height: 28, width: 28 }}
      />
    ),
    name: "bt_accessibility",
    position: 1,
    color: "#fbf3e4",
    tintColor: null,
    textStyle: {
      fontSize: 14,
      fontFamily: "Poppins_400Regular",
      paddingTop: 1,
    },
  },
  {
    text: "Find A Shelter",
    icon: (
      <Image
        source={require("../../../assets/shelter.png")}
        style={{ height: 27, width: 27, bottom: 1 }}
      />
    ),
    name: "bt_language",
    position: 2,
    color: "#fbf3e4",
    tintColor: null,
    textStyle: {
      fontSize: 14,
      fontFamily: "Poppins_400Regular",
      paddingTop: 1,
    },
  },
  {
    text: "Find A Hospital",
    icon: (
      <Image
        source={require("../../../assets/hospital.png")}
        style={{ height: 27, width: 27 }}
      />
    ),
    name: "bt_room",
    position: 3,
    color: "#fbf3e4",
    tintColor: null,
    textStyle: {
      fontSize: 14,
      fontFamily: "Poppins_400Regular",
      paddingTop: 1,
    },
  },
  {
    text: "Create A Post",
    icon: (
      <Image
        source={require("../../../assets/post.png")}
        style={{ height: 24, width: 24 }}
      />
    ),
    name: "bt_videocam",
    position: 4,
    color: "#fbf3e4",
    tintColor: Colors.primaryColor,
    textStyle: {
      fontSize: 14,
      fontFamily: "Poppins_400Regular",
      paddingTop: 1,
    },
  },
];

const LostMapMenuOptions = (props) => {
  const sheetRef = useRef();
  const menuRef = useRef();

  const snapPoints = useMemo(() => ["25%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (
    <View style={styles.container}>
      <FloatingAction
        ref={menuRef}
        actions={actions}
        onPressItem={() => {
          props.showModal();
        }}
        color={Colors.primaryColor}
        distanceToEdge={{ vertical: 30, horizontal: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 9999,
    backgroundColor: "red",
  },
  mainButton: {
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    position: "absolute",
    bottom: 25,
    alignSelf: "center",
  },
  contentContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerContentContainer: {
    paddingHorizontal: 20,
  },
});

export default LostMapMenuOptions;
