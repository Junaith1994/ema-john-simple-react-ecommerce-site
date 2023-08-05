// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZKDmduPfSysdTbjvhTIH3uKG6qtIQnGs",
    authDomain: "ema-john-ecommerce-3cf41.firebaseapp.com",
    projectId: "ema-john-ecommerce-3cf41",
    storageBucket: "ema-john-ecommerce-3cf41.appspot.com",
    messagingSenderId: "900026978216",
    appId: "1:900026978216:web:f88927427841588c42d79d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;