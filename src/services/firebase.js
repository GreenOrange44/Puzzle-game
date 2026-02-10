// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// 1. Your web app's Firebase configuration
// (You get these from the Firebase Console link you shared)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// 2. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 3. Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 4. Helper function to sign in
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // Returns the user's profile (name, email, photo)
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};