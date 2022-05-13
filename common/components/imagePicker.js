import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import React from "react";
import {
  StyleSheet,
  Share,
  StatusBar,
  View,
  LogBox,
  Dimensions,
  Image,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import uuid from "uuid";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import { TouchableOpacity } from "react-native";
import LoadingSpinner from "./loadingSpinner";
import { Colors, Text } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

// Firebase sets some timers for a long period, which will trigger some warnings. Let's turn that off for this example
LogBox.ignoreLogs([`Setting a timer for a long period`]);

export default class App extends React.Component {
  state = {
    image: this.props.image || null,
    uploading: false,
    open: false,
  };

  render() {
    const requestPermissions = async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };

    const renderImagePickerDisplay = () => {
      if (this.state.loading) {
        return <LoadingSpinner />;
      } else if (this.props.image || this.state.image) {
        return (
          <View>
            <Image
              source={{ uri: this.props.image || this.state.image }}
              style={[
                styles.imagePickerImage,
                { borderColor: Colors.primaryColor },
              ]}
            />
            {this.props.editMode ? (
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  backgroundColor: Colors.secondaryColor,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 7,
                  borderColor: "#FFF",
                }}
              >
                <Text style={styles.imagePickerAvatarText}>EDIT</Text>
                <Text style={styles.imagePickerAvatarText}>PHOTO</Text>
              </View>
            ) : null}
          </View>
        );
      } else {
        return (
          <>
            <Ionicons name="ios-camera" size={56} color={Colors.primaryColor} />
            <Text style={styles.imagePickerAvatarText} primaryColor>
              Upload Photo
            </Text>
          </>
        );
      }
    };

    return (
      <View>
        <Menu
          renderer={renderers.SlideInMenu}
          opened={this.state.open}
          onBackdropPress={() => this.setState({ open: !this.state.open })}
        >
          <MenuTrigger
            customStyles={{
              triggerTouchable: { underlayColor: "transparent" },
            }}
          >
            <View
              style={{
                alignItems: this.props.creating ? "center" : "flex-start",
                width: Dimensions.get("window").width,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.imagePickerAvatar,
                  {
                    backgroundColor: Colors.secondaryColor,
                    borderColor: Colors.primaryColor,
                  },
                ]}
                onPress={() => this.setState({ open: !this.state.open })}
              >
                {renderImagePickerDisplay()}
              </TouchableOpacity>
            </View>
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionWrapper: {
                paddingHorizontal: 25,
                alignItems: "center",
              },
              optionText: styles.text,
            }}
            optionsContainerStyle={{
              backgroundColor: "rgba(0,0,0,0.25)",
              shadowColor: "#000",
              paddingHorizontal: 10,
              paddingTop: 10,
              paddingBottom: 15,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowOffset: {
                width: 2,
                height: 1,
              },
              zIndex: 99999,
            }}
          >
            <MenuOption
              style={{
                paddingTop: 15,
                paddingBottom: 10,
                backgroundColor: "#f7f7f7",
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
              }}
              onSelect={this._pickImage}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 22, color: Colors.primaryColor }}>
                  Photo Library
                </Text>
              </View>
            </MenuOption>
            <MenuOption
              style={{
                paddingBottom: 15,
                paddingTop: 10,
                backgroundColor: "#f7f7f7",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
              onSelect={this._takePhoto}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 22, color: Colors.primaryColor }}>
                  Take Photo
                </Text>
              </View>
            </MenuOption>
            <MenuOption
              style={{
                backgroundColor: "#f7f7f7",
                marginTop: 15,
                marginBottom: 5,
                borderRadius: 15,
                paddingBottom: 13,
                paddingTop: 10,
              }}
              onSelect={() => this.setState({ open: !this.state.open })}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 22, color: "red" }}>Cancel</Text>
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _share = () => {
    Share.share({
      message: this.state.image,
      title: "Check out this photo",
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert("Copied image URL to clipboard");
  };

  _takePhoto = async () => {
    this.setState({ open: false });
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });
      this.props.setLoading(true);
      this._handleImagePicked(pickerResult);
    } else {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    }
  };

  _pickImage = async () => {
    this.setState({ open: false });
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        //   mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
      });
      this.props.setLoading(true);

      this._handleImagePicked(pickerResult);
    } else {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    }
  };

  _handleImagePicked = async (pickerResult) => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        this.setState({ loading: true });
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl, loading: false });
        this.props.storeImage(uploadUrl);
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({ uploading: false });
      this.props.setLoading(false);
    }
  };
}

async function uploadImageAsync(uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase.storage().ref().child(uuid.v4());
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}

const styles = StyleSheet.create({
  imagePickerAvatar: {
    width: 185,
    height: 185,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imagePickerAvatarText: {
    fontFamily: "Poppins_700Bold",
  },
  imagePickerImage: {
    width: 185,
    height: 185,
    borderRadius: 100,
    alignSelf: "center",
    borderWidth: 4,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
