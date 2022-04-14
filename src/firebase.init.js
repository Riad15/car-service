// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxtIpyIX6D9W9nf8n7IJwBbHSqWXhkiQc",
    authDomain: "car-services-1f1d2.firebaseapp.com",
    projectId: "car-services-1f1d2",
    storageBucket: "car-services-1f1d2.appspot.com",
    messagingSenderId: "589046544789",
    appId: "1:589046544789:web:478c40b3ae296fd611de9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;