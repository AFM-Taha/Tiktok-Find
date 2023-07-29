// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPtlD8Q2TzypD5y66RH4KXt7baa_e6MgY",
    authDomain: "tiktokfind-ecommerce.firebaseapp.com",
    projectId: "tiktokfind-ecommerce",
    storageBucket: "tiktokfind-ecommerce.appspot.com",
    messagingSenderId: "406011488887",
    appId: "1:406011488887:web:c05c840f56a23a1d35f472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 