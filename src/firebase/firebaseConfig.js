// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClxq-GRasfqFZfAl7XHxLd_DTGuu2fU4c",
  authDomain: "michistore-64881.firebaseapp.com",
  projectId: "michistore-64881",
  storageBucket: "michistore-64881.appspot.com",
  messagingSenderId: "234280064039",
  appId: "1:234280064039:web:a5c33f1a47e21aa3a8ea02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

