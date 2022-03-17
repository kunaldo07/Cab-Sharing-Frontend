import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAgFKoC2p66RYofisK27qH47avLOtEz444",
    authDomain: "cab-sharing-e498b.firebaseapp.com",
    projectId: "cab-sharing-e498b",
    storageBucket: "cab-sharing-e498b.appspot.com",
    messagingSenderId: "938078450104",
    appId: "1:938078450104:web:154ce98f8c27f81d2e9f4d",
    measurementId: "G-1C5VG9V6Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;