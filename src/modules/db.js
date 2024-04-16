// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGEB,
  messagingSenderId: import.meta.env.MESSAGING_SENDER,
  appId: import.meta.env.APP_ID,
  measurementId:import.meta.env.MESURE_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db2 = getDatabase(app);
export const db = getFirestore(app);
export const authP = getAuth(app);