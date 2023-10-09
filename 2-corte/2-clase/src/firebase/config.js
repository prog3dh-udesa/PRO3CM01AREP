import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCPqKfN18u4pQBgqmv89p9Cr1UrCKtSULo",
    authDomain: "test2023-b5400.firebaseapp.com",
    projectId: "test2023-b5400",
    storageBucket: "test2023-b5400.appspot.com",
    messagingSenderId: "63037126580",
    appId: "1:63037126580:web:d88f521b6ca02514e9a4e1"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = app.firestore()
