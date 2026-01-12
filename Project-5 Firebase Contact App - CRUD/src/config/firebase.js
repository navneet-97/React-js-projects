// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSSnav-9AJJUPh9bN8_17qMtYjPTZHYZs",
    authDomain: "vite-contact-3269f.firebaseapp.com",
    projectId: "vite-contact-3269f",
    storageBucket: "vite-contact-3269f.firebasestorage.app",
    messagingSenderId: "797913801874",
    appId: "1:797913801874:web:e6a79c16b1a776f5ab324b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);