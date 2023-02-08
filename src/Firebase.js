// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-mDcFxkB4zcDL0OX3hr7mrkAYw02NM8g",
  authDomain: "learnershub-d9977.firebaseapp.com",
  projectId: "learnershub-d9977",
  storageBucket: "learnershub-d9977.appspot.com",
  messagingSenderId: "369145720680",
  appId: "1:369145720680:web:f881eb7a06d2127e86b0dd",
  measurementId: "G-BVE1DN07PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}