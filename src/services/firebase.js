import dotenv from 'dotenv'
import firebase from "firebase/app";
import "firebase/storage";
import 'firebase/firestore';
require('firebase/auth');
dotenv.config()

// firebase config


firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});


export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseStorage = firebase.storage().ref();
export const firestoreDB = firebase.firestore();

// login 
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log('login success')
  }).catch((error) => {
    console.log(error.message)
  })
}

// logout

export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}
