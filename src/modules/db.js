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
  apiKey: "AIzaSyD1CmyjkpGkHRe163ApvtG2XJoTqyU4c-o",
  authDomain: "conta-6a30f.firebaseapp.com",
  projectId: "conta-6a30f",
  storageBucket: "conta-6a30f.appspot.com",
  messagingSenderId: "799366525906",
  appId: "1:799366525906:web:ae92bbb6ecbaae1b45ce0b",
  measurementId: "G-W0VXZS51F2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db2 = getDatabase(app);
export const db = getFirestore(app);
export const authP = getAuth(app);