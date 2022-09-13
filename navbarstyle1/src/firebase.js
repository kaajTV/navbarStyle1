import { getDatabase } from 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW46uuYn0IzYh2qmp7Ac48PaXF_GnF01U",
  authDomain: "project-nfts.firebaseapp.com",
  databaseURL: "https://project-nfts-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-nfts",
  storageBucket: "project-nfts.appspot.com",
  messagingSenderId: "334329777528",
  appId: "1:334329777528:web:822c100f9d22817ef48c8d",
  measurementId: "G-E1J4NGE8XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);