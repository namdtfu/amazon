import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5RQiBnJLwbvOsZGTSNz9U9INBmTjqw7A",
    authDomain: "db-b588d.firebaseapp.com",
    databaseURL: "https://db-b588d.firebaseio.com",
    projectId: "db-b588d",
    storageBucket: "db-b588d.appspot.com",
    messagingSenderId: "93967524146",
    appId: "1:93967524146:web:4ebb4239e9ef3fef95f72b",
    measurementId: "G-GP8BDDB8S1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
