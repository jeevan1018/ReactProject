// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq5mSWku7yQd9fMwyN-gP5ExInlkQSn8g",
  authDomain: "cricbuzz-react.firebaseapp.com",
  projectId: "cricbuzz-react",
  storageBucket: "cricbuzz-react.appspot.com",
  messagingSenderId: "419042206621",
  appId: "1:419042206621:web:424101bb6445c4d6900574"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);