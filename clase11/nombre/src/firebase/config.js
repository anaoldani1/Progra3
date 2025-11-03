import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwUqSlPs5dhBd8SkA9bzNBXXZbvnGYHNY",
    authDomain: "demo05-ddef4.firebaseapp.com",
    projectId: "demo05-ddef4",
    storageBucket: "demo05-ddef4.firebasestorage.app",
    messagingSenderId: "1042783539147",
    appId: "1:1042783539147:web:7bd5db983113cbe870704e"
  };  

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
