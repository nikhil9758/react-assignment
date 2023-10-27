import {initializeApp} from "firebase/app";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgy-0xBLnKKbHWW3U27wJbTtg5bQSXOSA",
  authDomain: "logindemo-a1d5e.firebaseapp.com",
  databaseURL: "https://logindemo-a1d5e-default-rtdb.firebaseio.com/",//"https://logindemo-a1d5e-default-rtdb.firebaseio.com",
  projectId: "logindemo-a1d5e",
  storageBucket: "logindemo-a1d5e.appspot.com",
  messagingSenderId: "301739406781",
  appId: "1:301739406781:web:b431948903668787c28ed4",
};

// Initialize Firebase
let app= initializeApp(firebaseConfig);

const auth = initializeAuth(app)
export {auth}