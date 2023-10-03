// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "finance-tracker-38e20.firebaseapp.com",
  projectId: "finance-tracker-38e20",
  storageBucket: "finance-tracker-38e20.appspot.com",
  messagingSenderId: "478569399484",
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get references to the Firestore database and the authentication service
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
