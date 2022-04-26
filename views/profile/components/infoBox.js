import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-ui-lib";

const InfoBox = ({ title, subTitle, color, image }) => {
  if (image) {
    return (
      <View style={[styles.box, { backgroundColor: color }]}>
        <Image source={image} style={styles.infoBoxImage} />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  title: {
    fontFamily: "Poppins_700Bold",
  },
  subTitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    marginTop: 3,
  },
  infoBoxImage: {
    height: 50,
    width: 50,
  },
});

export default InfoBox;
