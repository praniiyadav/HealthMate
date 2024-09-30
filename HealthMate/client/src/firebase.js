

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "healthmate-788d7.firebaseapp.com",
  projectId: "healthmate-788d7",
  storageBucket: "healthmate-788d7.appspot.com",
  messagingSenderId: "773219313326",
  appId: "1:773219313326:web:5df6d54d31a7239aa3af3f",
  measurementId: "G-H3HDJQ72QL"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
