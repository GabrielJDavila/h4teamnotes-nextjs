

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkvz90O1iDKVx1tNOdsMfQl3WxvSdzTSA",
  authDomain: "h4teamnotes-nextjs.firebaseapp.com",
  projectId: "h4teamnotes-nextjs",
  storageBucket: "h4teamnotes-nextjs.appspot.com",
  messagingSenderId: "1071850882946",
  appId: "1:1071850882946:web:4ab331dcbe1cceaf9d719b",
  measurementId: "G-N5MQNXW5G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);