// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVUHCLFpmMtUwcSJBGvX2y7yvA7UsZxVg",
  authDomain: "goodfoodfipu.firebaseapp.com",
  projectId: "goodfoodfipu",
  storageBucket: "goodfoodfipu.appspot.com",
  messagingSenderId: "435221032406",
  appId: "1:435221032406:web:43828e873131b588f60877"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
    firebase: firebase,
    
}