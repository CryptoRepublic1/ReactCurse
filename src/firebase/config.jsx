// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOL3i0SwAbkvodaSQBAlak39uSd-eKHUU",
  authDomain: "e-commers-coderhouse.firebaseapp.com",
  projectId: "e-commers-coderhouse",
  storageBucket: "e-commers-coderhouse.appspot.com",
  messagingSenderId: "803875338981",
  appId: "1:803875338981:web:ed3f516994e48d7cdcf20c",
  measurementId: "G-FGWHH8TXC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
// const analytics = getAnalytics(app);