// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7OtOS6ezu4_TFV5XKjNB24vGvkJmdvlc",
    authDomain: "tiktokfind-dfd92.firebaseapp.com",
    projectId: "tiktokfind-dfd92",
    storageBucket: "tiktokfind-dfd92.appspot.com",
    messagingSenderId: "495701768786",
    appId: "1:495701768786:web:f14193b5facce8ad1a7d8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 