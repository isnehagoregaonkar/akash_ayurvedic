
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env['API_KEY'],
  authDomain: process.env['AUTH_DOMAIN'],
  projectId: process.env['PROJECT_ID'],
  storageBucket: process.env['STORAGE_BUCKET'],
  messagingSenderId:process.env['MESSAING_SENDER_ID'],
  appId: process.env['APP_ID'],
  measurementId: "G-3FWZ5983ZC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
