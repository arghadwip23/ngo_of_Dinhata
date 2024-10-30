import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: process.env.TEAM_FIREBASE_API,
    authDomain: "jnvcob.firebaseapp.com",
    databaseURL: "https://jnvcob.firebaseio.com",
    projectId: "jnvcob",
    storageBucket: "jnvcob.appspot.com",
    messagingSenderId: "69566502508",
    appId: process.env.TEAM_FIREBASE_APP,
    measurementId: "G-BH23ZFD2KB"
  };

  const app = initializeApp(firebaseConfig);
  
  export default app;
  