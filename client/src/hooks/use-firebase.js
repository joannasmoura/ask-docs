// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Required for side-effects
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDozq486-vsOObw4t3amanZIzkUnkmirpI",
  authDomain: "ask-docs-76ef5.firebaseapp.com",
  projectId: "ask-docs-76ef5",
  storageBucket: "ask-docs-76ef5.firebasestorage.app",
  messagingSenderId: "512029864578",
  appId: "1:512029864578:web:062fcf3d7249395179fa9b",
  measurementId: "G-3PG61T4P9Z"
};

const useFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return {
    analytics,
  }
}

export default useFirebase;