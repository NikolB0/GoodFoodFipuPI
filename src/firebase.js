// Import the functions you need from the SDKs you need
import { firebase } from "@/firebase" ;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

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
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const storage = getStorage(firebase);
const db = firebase.firestore(); //ne koristi se

export {
    firebase,
    storage,
    db,
    auth    
}