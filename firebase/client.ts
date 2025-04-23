// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhAzelhDuNvRWU70GDxXqUv8EPMXwtPyY",
    authDomain: "prepwise-43f3e.firebaseapp.com",
    projectId: "prepwise-43f3e",
    storageBucket: "prepwise-43f3e.firebasestorage.app",
    messagingSenderId: "990727273527",
    appId: "1:990727273527:web:5bc09f65cda2bc408253b2",
    measurementId: "G-52PKD5NR8L"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
