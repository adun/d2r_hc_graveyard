// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL2a83BzuidoY2Cys57C22cO10gI62XMA",
  authDomain: "d2r-graveyard.firebaseapp.com",
  projectId: "d2r-graveyard",
  storageBucket: "d2r-graveyard.appspot.com",
  messagingSenderId: "400302701564",
  appId: "1:400302701564:web:5fea2817e46496f5e3d079",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
