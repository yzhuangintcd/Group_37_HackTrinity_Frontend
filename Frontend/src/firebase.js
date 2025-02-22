// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgVD-F43QdrsHLCrYt9_sL-kuR4zWynj4",
  authDomain: "hackirelandgroup37-e6489.firebaseapp.com",
  projectId: "hackirelandgroup37-e6489",
  storageBucket: "hackirelandgroup37-e6489.firebasestorage.app",
  messagingSenderId: "74112220516",
  appId: "1:74112220516:web:3f4a3a68e7c24c92cd8e71",
  measurementId: "G-K4VTXGHZ6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
