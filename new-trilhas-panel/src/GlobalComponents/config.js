import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQC9e8KmE5UVhJVCvH60Jh9F59FouJcBQ",
  authDomain: "trilhas-f0c85.firebaseapp.com",
  databaseURL: "https://trilhas-f0c85-default-rtdb.firebaseio.com",
  projectId: "trilhas-f0c85",
  storageBucket: "trilhas-f0c85.appspot.com",
  messagingSenderId: "249334929783",
  appId: "1:249334929783:web:79070fd234c1deff8da972",
  measurementId: "G-SHFCQ2BZHK",
};

export const userRef = `/panelUsers/${localStorage.getItem(
  "panel-trilhas-id"
)}`;

export const fire = firebase.initializeApp(firebaseConfig);
