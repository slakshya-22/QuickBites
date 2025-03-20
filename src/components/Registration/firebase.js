// Import Firebase core and required services
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // ✅ Add this import
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEFnsKKorhhGB4KQ6IPSuVpydajiwC05c",
  authDomain: "food-delivery-app-22.firebaseapp.com",
  projectId: "food-delivery-app-22",
  storageBucket: "food-delivery-app-22.appspot.com", // ✅ Corrected typo here
  messagingSenderId: "523117711096",
  appId: "1:523117711096:web:37d3bad07772ab2d66f50d",
  measurementId: "G-QK5VZ7EXSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  
const analytics = getAnalytics(app);

export { auth };  
