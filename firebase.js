import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { LogBox } from "react-native";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDi-m5ij95fXRVU0ay8vP8EnAflBFhWgQA",
  authDomain: "animalapp-194de.firebaseapp.com",
  projectId: "animalapp-194de",
  storageBucket: "animalapp-194de.appspot.com",
  messagingSenderId: "713095219580",
  appId: "1:713095219580:web:b18b77f1bda6c959a4bcf9",
  measurementId: "G-1GPB213VHF",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(FIREBASE_CONFIG);
} else {
  app = firebase.app();
}

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth, FIREBASE_CONFIG };
