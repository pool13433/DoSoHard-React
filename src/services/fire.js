import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBzbDBZl1Ii0D79Y-Oghqh20GF4tMmwm80",
  authDomain: "dosohard.firebaseapp.com",
  databaseURL: "https://dosohard.firebaseio.com",
  projectId: "dosohard",
  storageBucket: "dosohard.appspot.com",
  messagingSenderId: "1015045318443"
};
var fire = firebase.initializeApp(config);
export default fire;