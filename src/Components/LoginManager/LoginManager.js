import firebaseConfig from '../../firebase.config.js';
import * as firebase from "firebase/app";
import "firebase/auth";

// firebase initialize
export const initializeLoginFrameworkFirebase = () => {
    firebase.initializeApp(firebaseConfig);
}

// for google sign in
export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        const {displayName, email, photoURL} = res.user;
        const loggedInUser = {
            isSignedIn: true,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            error: '',
          };
        return loggedInUser;
    })
    .catch(function(error) {
        const loggedInUser = {
            isSignedIn: false,
            displayName: '',
            email: '',
            photoURL: '',
            error: error.message
          };
        return loggedInUser;
    });
}