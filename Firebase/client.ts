import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCcEb-YCGteeMDG7uX6yIeJb23DcLwjTrM",
    authDomain: "prepsmart-c7bea.firebaseapp.com",
    projectId: "prepsmart-c7bea",
    storageBucket: "prepsmart-c7bea.firebasestorage.app",
    messagingSenderId: "212308835717",
    appId: "1:212308835717:web:e4d33de489ffa7b69218ec",
    measurementId: "G-ZFEZL37CJX"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);