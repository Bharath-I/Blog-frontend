

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6ca9b.firebaseapp.com",
  projectId: "mern-blog-6ca9b",
  storageBucket: "mern-blog-6ca9b.appspot.com",
  messagingSenderId: "705423482341",
  appId: "1:705423482341:web:077721aa85150e83dee30c",
  measurementId: "G-NP2T20ZJH2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

