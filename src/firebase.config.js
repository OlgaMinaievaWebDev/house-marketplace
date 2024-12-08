import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO4E_eV2D7UMV_Z9HaN3785x7qGP-qY00",
  authDomain: "house-marketplace-app-ad163.firebaseapp.com",
  projectId: "house-marketplace-app-ad163",
  storageBucket: "house-marketplace-app-ad163.firebasestorage.app",
  messagingSenderId: "809178536085",
  appId: "1:809178536085:web:d16ab70558f8577acca39c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
