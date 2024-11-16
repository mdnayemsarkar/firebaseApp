
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
// Correct Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2sileZydZpkxCFRtR74m73hgEhhth9iA",
  authDomain: "test01-56f3c.firebaseapp.com",
  projectId: "test01-56f3c",
  storageBucket: "test01-56f3c.appspot.com", // corrected URL here
  messagingSenderId: "151784539370",
  appId: "1:151784539370:web:d6e03b3523c6e305674393",
  measurementId: "G-MR8N34WVLR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
