// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUHfZSY8Xj_PG5grAYXty5fC40plXcKuA",
  authDomain: "project-business-directory.firebaseapp.com",
  projectId: "project-business-directory",
  storageBucket: "project-business-directory.appspot.com",
  messagingSenderId: "119715075620",
  appId: "1:119715075620:web:55afb89c8dda7b6b082ab1",
  measurementId: "G-6238JCK6S5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Analytics (optional, uncomment if needed)
// const analytics = getAnalytics(app);
