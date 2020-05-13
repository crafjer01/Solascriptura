//init firebase
import firebase from 'firebase';
require('firebase/firestore');

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBwfAxqTWhNUk_xOD2RwDLqKMfItQ9nwf0",
    authDomain: "solascriptura-40ae5.firebaseapp.com",
    databaseURL: "https://solascriptura-40ae5.firebaseio.com",
    projectId: "solascriptura-40ae5",
    storageBucket: "solascriptura-40ae5.appspot.com",
    messagingSenderId: "534527597467",
    appId: "1:534527597467:web:9fd8b05541a7665c719f3e",
    measurementId: "G-43LZZ8T81X"
  };

  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb, db}; 

  firebase.analytics();