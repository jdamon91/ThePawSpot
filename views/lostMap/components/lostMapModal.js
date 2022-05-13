import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-ui-lib";
import ImagePicker from "../../../common/components/imagePicker";
import { FontAwesome } from "@expo/vector-icons";

const LostMapModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [animalType, setAnimalType] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");

  return (
    <View
      style={[
        styles.centeredView,
        { display: props.visible ? "flex" : "none" },
      ]}
    >
      <View style={styles.modalView}>
        <FontAwesome
          style={styles.modalCloseButton}
          name="close"
          size={40}
          color={Colors.primaryColor}
          onPress={() => props.closeModal()}
        />
        <ImagePicker
          storeImage={() => setPhotoUrl(photoUrl)}
          setLoading={(value) => setImageLoading(value)}
          creating={true}
        />
        <Text style={styles.textInputHelper}>Animal Type</Text>
        <TextInput
          onChangeText={(animalType) => setAnimalType(animalType)}
          placeholder="Cat, dog, alien?"
          style={[styles.textInput, { backgroundColor: Colors.grey80 }]}
        />
        <Text style={styles.textInputHelper}>Additional Info</Text>
        <TextInput
          multiline
          onChangeText={(additionalInfo) => setAdditionalInfo(additionalInfo)}
          placeholder="Any additional details you want to provide?"
          style={[
            styles.textInput,
            { backgroundColor: Colors.grey80, height: 100 },
          ]}
        />
        <TouchableOpacity
          style={[
            styles.lostMapModalButton,
            { backgroundColor: Colors.primaryColor },
          ]}
          onPress={() => props.closeModal()}
        >
          <Text style={styles.lostMapModalButtonText}>CREATE POST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: 9999,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Dimensions.get("window").width * 0.925,
  },
  lostMapModalButton: {
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: Dimensions.get("window").width * 0.8,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  lostMapModalButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    letterSpacing: 0.75,
    fontSize: 16,
  },
  textInput: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    width: Dimensions.get("window").width * 0.8,
  },
  textInputHelper: {
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
    color: "grey",
    bottom: -5,
    marginLeft: 2,
    width: Dimensions.get("window").width * 0.8,
  },
  modalCloseButton: {
    position: "absolute",
    top: 8,
    right: 15,
  },
});

export default LostMapModal;
