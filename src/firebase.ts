// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi9E89IrH--8qXeLDAZwr-fora4jFkcYQ",
  authDomain: "ai-product-description.firebaseapp.com",
  projectId: "ai-product-description",
  storageBucket: "ai-product-description.appspot.com",
  messagingSenderId: "576300089542",
  appId: "1:576300089542:web:da59a0a0bf40da1e2d17c7",
  measurementId: "G-5S3PP0N6FX"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export const db = getFirestore(app);