import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6BNl2JDisJ6XO9ApaWZ5Lcji9jHTIqqo",
    authDomain: "twitter-clone-d2bfb.firebaseapp.com",
    databaseURL: "https://twitter-clone-d2bfb.firebaseio.com",
    projectId: "twitter-clone-d2bfb",
    storageBucket: "twitter-clone-d2bfb.appspot.com",
    messagingSenderId: "354581602150",
    appId: "1:354581602150:web:4800cbc59ae7db92b572a7",
    measurementId: "G-9NXD1GS4L6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;