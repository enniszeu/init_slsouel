import firebase from "firebase/app";
import "firebase/storage";

  const firebaseConfig = {
  apiKey: "AIzaSyDfxjhxKa8miUXny0RKXL1tikBTD6zH6WQ",
  authDomain: "slsouel.firebaseapp.com",
  databaseURL: "https://slsouel.firebaseio.com",
  projectId: "slsouel",
  storageBucket: "slsouel.appspot.com",
  messagingSenderId: "756485056121",
  appId: "1:756485056121:web:41cd2b3f306faec51796a8",
  measurementId: "G-Q90LBFGKQY"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage =firebase.storage();

  export { storage, firebase as default};
  