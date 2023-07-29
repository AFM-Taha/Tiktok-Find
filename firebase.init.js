// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZpf_dLERSax6F12HIsy9zLwm4B3p_kzs",
    authDomain: "emotion-products.firebaseapp.com",
    projectId: "emotion-products",
    storageBucket: "emotion-products.appspot.com",
    messagingSenderId: "840322207530",
    appId: "1:840322207530:web:0ee4a1094f18db8c411853"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 