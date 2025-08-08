// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASHi1iaHqYDNBOZa3yunOxYbblo8b1V_0",
  authDomain: "ecommerce-jc-dd067.firebaseapp.com",
  projectId: "ecommerce-jc-dd067",
  storageBucket: "ecommerce-jc-dd067.firebasestorage.app",
  messagingSenderId: "761477593930",
  appId: "1:761477593930:web:45703e6a0faec935e61fb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;