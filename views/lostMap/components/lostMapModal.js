import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-ui-lib";
import ImagePicker from "../../../common/components/imagePicker";
import { FontAwesome } from "@expo/vector-icons";
import LoadingCatPost from "../../../common/components/loadingCatPost";
import { db } from "../../../firebase";

const LostMapModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animalType, setAnimalType] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const createNewLostAnimal = () => {
    try {
      setLoading(true);
      db.collection("lostAnimals").add({
        animalType,
        photoUrl,
        additionalInfo,
        location: props.userLocation,
      });
      setTimeout(() => {
        setLoading(false);
        props.closeModal();
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <View
        style={[
          styles.centeredView,
          { display: props.visible ? "flex" : "none" },
        ]}
      >
        <View style={styles.modalView}>
          <LoadingCatPost />
        </View>
      </View>
    );
  }

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
          size={36}
          color={Colors.primaryColor}
          onPress={() => props.closeModal()}
        />
        <ImagePicker
          storeImage={(photoUrl) => setPhotoUrl(photoUrl)}
          setLoading={(value) => setImageLoading(value)}
          creating={true}
          customHeight={150}
          customWidth={150}
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
            { backgroundColor: Colors.grey80, height: 80 },
          ]}
        />
        <TouchableOpacity
          style={[
            styles.lostMapModalButton,
            { backgroundColor: Colors.primaryColor },
          ]}
          onPress={createNewLostAnimal}
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
    zIndex: 999999,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 25,
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
    paddingVertical: 9,
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
    fontSize: 15,
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
    top: 5,
    right: 12,
  },
});

export default LostMapModal;
