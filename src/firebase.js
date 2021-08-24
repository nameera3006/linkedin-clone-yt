import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD11e8GxLUzBsFzNnR3Rz2M4S1furCIgjk",
    authDomain: "linkedin-clone-yt-bcfd8.firebaseapp.com",
    projectId: "linkedin-clone-yt-bcfd8",
    storageBucket: "linkedin-clone-yt-bcfd8.appspot.com",
    messagingSenderId: "709070241759",
    appId: "1:709070241759:web:a322393641a67d85b38e6a"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };