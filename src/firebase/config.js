import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxrdAmXmFWuzL6oJXJIauQOxrssIHerDw",
  authDomain: "react-finance-tracker.firebaseapp.com",
  projectId: "react-finance-tracker",
  storageBucket: "react-finance-tracker.appspot.com",
  messagingSenderId: "1011590394985",
  appId: "1:1011590394985:web:ebf9f307451ad28a701ef8",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
