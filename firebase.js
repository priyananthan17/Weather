import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDzn8dnL-2_MYYBXHwne1AXQUoYWQCaMi0",
    authDomain: "weather-a8822.firebaseapp.com",
    projectId: "weather-a8822",
    storageBucket: "weather-a8822.appspot.com",
    messagingSenderId: "527129972467",
    appId: "1:527129972467:web:53982d2878d16fa9607186",
    measurementId: "G-H9E47CN575"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };