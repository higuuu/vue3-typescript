import firebase from "firebase";

// firevaseConfigを埋めてこのファイル名をfirebase.tsに変更してください
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
