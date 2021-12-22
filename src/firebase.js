import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNnxQntgs22hjyi1rH1zvM4OYg-_aiMsA",
  authDomain: "twitter-clone-de3a6.firebaseapp.com",
  projectId: "twitter-clone-de3a6",
  storageBucket: "twitter-clone-de3a6.appspot.com",
  messagingSenderId: "303071346603",
  appId: "1:303071346603:web:73f827c64a2f5ffc8b1cee"
};

// Initialize Firebase


firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
