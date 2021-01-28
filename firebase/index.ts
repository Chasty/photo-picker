import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyxL-ruWEEAmjFRBTnE9xf1snlJ-hYHcY",
  authDomain: "signal-clone-7caf5.firebaseapp.com",
  databaseURL: "signal-clone-7caf5-default-rtdb.firebaseio.com/",
  projectId: "signal-clone-7caf5",
  storageBucket: "signal-clone-7caf5.appspot.com",
  messagingSenderId: "489143978738",
  appId: "1:489143978738:web:747fd43a4755570bd49e6b",
  measurementId: "G-N1KVSLQY7B"
};

firebase.initializeApp(firebaseConfig);
