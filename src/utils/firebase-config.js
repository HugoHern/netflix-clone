// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from firebase/auth

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTVnWopMC3i1_jYoIbLeNaB129BInnihE",
    authDomain: "react-netflix-clone-c719d.firebaseapp.com",
    projectId: "react-netflix-clone-c719d",
    storageBucket: "react-netflix-clone-c719d.appspot.com",
    messagingSenderId: "432172019739",
    appId: "1:432172019739:web:51e1c100f9558789a288be"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app)