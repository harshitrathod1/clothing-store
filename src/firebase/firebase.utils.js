import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/* Configuration Details for firebase */
const config = {
    apiKey: "AIzaSyB6yFqOPCUtGpg6Syy2E3VJ3Sx4ntwb6KY",
    authDomain: "crwn-db-c969c.firebaseapp.com",
    projectId: "crwn-db-c969c",
    storageBucket: "crwn-db-c969c.appspot.com",
    messagingSenderId: "1048551017216",
    appId: "1:1048551017216:web:f79788bcde792fe25bc1e5",
    measurementId: "G-JZB6KDEDQP"
};

firebase.initializeApp(config);

/* Export out the things needed to used since firebase is heavy library */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Set up the provider(s) you want to specify for login functionality*/
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

/* Sign In with Google Account functionality */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

  