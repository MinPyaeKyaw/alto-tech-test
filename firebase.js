import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCdikAqR3OuGYPfV7J410B9cGKv67lj8ro",
  authDomain: "altotech-19e6e.firebaseapp.com",
  projectId: "altotech-19e6e",
  storageBucket: "altotech-19e6e.appspot.com",
  messagingSenderId: "447980912023",
  appId: "1:447980912023:web:d275eff7553cffd6a558d2",
  measurementId: "G-QYR3M8MCPS",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
