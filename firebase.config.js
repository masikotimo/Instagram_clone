// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZrDUF8lG0n22TYsCgJkODOEp7BcL5Tx0",
  authDomain: "instagram-clone-timo.firebaseapp.com",
  projectId: "instagram-clone-timo",
  storageBucket: "instagram-clone-timo.appspot.com",
  messagingSenderId: "1076485365600",
  appId: "1:1076485365600:web:1708cf96e94e1dd85b4805",
  measurementId: "G-TKT7CEVY0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);