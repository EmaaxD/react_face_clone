import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBsCS6c-FyPm1XBcTCAYrT_LVQGL17sFf4",
  authDomain: "facebook-clone-aaf12.firebaseapp.com",
  projectId: "facebook-clone-aaf12",
  storageBucket: "facebook-clone-aaf12.appspot.com",
  messagingSenderId: "880564359064",
  appId: "1:880564359064:web:871e0c30d804caf5c865ed"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = app.firestore();
export const storage = firebase.storage();