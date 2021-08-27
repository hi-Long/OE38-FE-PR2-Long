import firebase from "firebase/app";

import "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
}

firebase.initializeApp(firebaseConfig)

// Initialize Firebase
export const storage = firebase.storage();
export default firebase;