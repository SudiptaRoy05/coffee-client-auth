// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRkfSFgRSaYWI24Or4MaYBnNxL194l8jw",
  authDomain: "praccrud-31561.firebaseapp.com",
  projectId: "praccrud-31561",
  storageBucket: "praccrud-31561.firebasestorage.app",
  messagingSenderId: "425610569857",
  appId: "1:425610569857:web:90a9c21d51877c7b930580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
