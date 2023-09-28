import firebase from "firebase"
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBeN2Muob9aGTUHWjryy3oEb9BPAul2YG4",
  authDomain: "c-85-19f3d.firebaseapp.com",
  projectId: "c-85-19f3d",
  storageBucket: "c-85-19f3d.appspot.com",
  messagingSenderId: "815366346591",
  appId: "1:815366346591:web:aabc5f77755d9d5c4dc8ea"
};

firebase.initializeApp(firebaseConfig)
export default firebase