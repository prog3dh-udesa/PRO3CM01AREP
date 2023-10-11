import app from 'firebase/app'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwMRIM5sTDFGkWUSzZO76NMO19q9XMG-M",
    authDomain: "mi-primer-app-s3.firebaseapp.com",
    projectId: "mi-primer-app-s3",
    storageBucket: "mi-primer-app-s3.appspot.com",
    messagingSenderId: "422673804567",
    appId: "1:422673804567:web:628374794009c8f8c2db52"
  };

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()