// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB61JKi380J66BtvXfwz838aWuNLzyYBzY",
  authDomain: "netflix-gpt-cac37.firebaseapp.com",
  projectId: "netflix-gpt-cac37",
  storageBucket: "netflix-gpt-cac37.appspot.com",
  messagingSenderId: "993592981941",
  appId: "1:993592981941:web:7cf936224e552be6c301fc",
  measurementId: "G-651EP4CV7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();