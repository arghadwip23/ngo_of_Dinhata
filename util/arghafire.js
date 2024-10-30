import { initializeApp } from "firebase/app";




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

  const japp = initializeApp(firebaseConfig);
  
  export default japp;
  