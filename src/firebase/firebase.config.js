//DANGER!!!!!!!!!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBla3IXGkXfELfytf-gsNdU6tq7Cwi7H2s",
  authDomain: "dragon-news-breaking-14708.firebaseapp.com",
  projectId: "dragon-news-breaking-14708",
  storageBucket: "dragon-news-breaking-14708.firebasestorage.app",
  messagingSenderId: "634233736595",
  appId: "1:634233736595:web:202f84b7be1b4a8009ec66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
