
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "dayboddho.firebaseapp.com",
  projectId: "dayboddho",
  storageBucket: "dayboddho.appspot.com",
  messagingSenderId: "169321922894",
  appId: process.env.APP_ID,
  measurementId: "G-GYXXG9EXF0"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
export default app;
//const analytics = getAnalytics(app); 