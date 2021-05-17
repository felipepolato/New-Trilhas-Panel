import firebase from "firebase";

const firebaseConfig = {
  /*apiKey: "AIzaSyBo9uYqF9BGDHnns_yeZaI_9LGuvJ0FBsY",
  authDomain: "teste-new-panel-trilhas.firebaseapp.com",
  databaseURL: "https://teste-new-panel-trilhas-default-rtdb.firebaseio.com",
  projectId: "teste-new-panel-trilhas",
  storageBucket: "teste-new-panel-trilhas.appspot.com",
  messagingSenderId: "968669016583",
  appId: "1:968669016583:web:ef90740b48ec23397330a2",
  measurementId: "G-4JSH095SFE"*/
  apiKey: "AIzaSyCQC9e8KmE5UVhJVCvH60Jh9F59FouJcBQ",
  authDomain: "trilhas-f0c85.firebaseapp.com",
  databaseURL: "https://trilhas-f0c85-default-rtdb.firebaseio.com",
  projectId: "trilhas-f0c85",
  storageBucket: "trilhas-f0c85.appspot.com",
  messagingSenderId: "249334929783",
  appId: "1:249334929783:web:79070fd234c1deff8da972",
  measurementId: "G-SHFCQ2BZHK",
};

export const userRef = `/panelUsers/${localStorage.getItem("panel-trilhas-id")}`;

export const fire = firebase.initializeApp(firebaseConfig);
