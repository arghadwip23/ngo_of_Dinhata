"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API,
//   authDomain: "dayboddho.firebaseapp.com",
//   projectId: "dayboddho",
//   storageBucket: "dayboddho.appspot.com",
//   messagingSenderId: "169321922894",
//   appId: process.env.APP_ID,
//   measurementId: "G-GYXXG9EXF0"
// };
const firebaseConfig = {
  apiKey: "AIzaSyC4L9HhGaXr2L5A21MG2e9c32pJb9TV7E8",
  authDomain: "dayboddho-86581.firebaseapp.com",
  projectId: "dayboddho-86581",
  storageBucket: "dayboddho-86581.firebasestorage.app",
  messagingSenderId: "1003561398049",
  appId: "1:1003561398049:web:c9416520e7a3aad2195860",
  measurementId: "G-C4BCJR910G"
};

// Initialize Firebase
 export const  app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
