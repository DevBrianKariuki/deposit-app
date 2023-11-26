// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYHAjSVOW2qRu0par0q1u78pmcxCTITCc",
  authDomain: "kdj716u.firebaseapp.com",
  projectId: "kdj716u",
  storageBucket: "kdj716u.appspot.com",
  messagingSenderId: "576027114768",
  appId: "1:576027114768:web:33fff6adc3385413cb3995",
  measurementId: "G-BKT35XL2B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };