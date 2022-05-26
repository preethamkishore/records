import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBMl3OWqIrBOZ07zmWm4syh8a2XGl0JmlQ",
  authDomain: "fullll-stackk.firebaseapp.com",
  databaseURL: "https://fullll-stackk-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fullll-stackk",
  storageBucket: "fullll-stackk.appspot.com",
  messagingSenderId: "729263629024",
  appId: "1:729263629024:web:443f704f26f0ac84a06685"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
export const firebasedatabase =getDatabase(app);