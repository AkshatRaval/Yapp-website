// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWYP9M4WchzMmCMn36qppHd4aXsj5TFxk",
  authDomain: "ruracare-b069a.firebaseapp.com",
  projectId: "ruracare-b069a",
  storageBucket: "ruracare-b069a.firebasestorage.app",
  messagingSenderId: "798156184383",
  appId: "1:798156184383:web:1be362cd971ace09d4918a",
  measurementId: "G-D8VK2NT74V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);