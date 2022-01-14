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

//pass the config object to firebase object
firebase.initializeApp(config);

/* - Async function that creates a new entry for user if not already present in firestore db 
   - There are always two kind of objects returned by firebase i.e. reference objects and Snapshots objects.
   - Document references are just mere reference(address) that don't contain actual information.
   Snapshot do contain actual information.
*/
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    /* Reference to user document present in firestore db*/
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    /* We use Reference object to do all CRUD operations. Here we are fetching snapshot object
    for specific query*/
    const snapShot = await userRef.get();

    /* Create a new Entry if user details not present in firestore db*/
    if(!snapShot.exists){
        const  {displayName, email} = userAuth; // user details from user auth object
        const createdAt = new Date(); // current Date
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(err){
            console.log('error creating user', err.message);
        }
    }

    return userRef;
};

/* */
export const convertCollectionsSnaphotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc => {
        const { title, items } = doc.data();

        return {
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
}

/*
    Add new Collection with documents to the firestore account
*/
export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
    const collectionRef = firestore.collection(collectionKey);

    /* this batch object provides functionality to transfer all the data at once
        or don't pass it at all
    */
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        // Get or create doc ref inside a given collection
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const getCurrentUser = () => {
    return new Promise((resolve,reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            /* This is an example of javascript recursion
            Link : https://stackoverflow.com/questions/47043188/firebase-onauthstatechanged-unsubscribe-recursion */
            unsubscribe();
            resolve(userAuth);
        },reject)
    })
}

/* Export out the things needed to used since firebase is heavy library */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Set up the provider(s) you want to specify for login functionality*/
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt : 'select_account' });

/* Sign In with Google Account functionality */
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
