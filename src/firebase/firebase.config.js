// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJTEO5Bhluk1Dje60ubaBoNw2rwrPmPhA",
  authDomain: "coffee-store-86c2a.firebaseapp.com",
  projectId: "coffee-store-86c2a",
  storageBucket: "coffee-store-86c2a.appspot.com",
  messagingSenderId: "39529516948",
  appId: "1:39529516948:web:850e930314952eec580981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;