// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Add Firebase storage
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDJbabGJB-TPsZA_GCaiSk-6o0bM65X_2A",
    authDomain: "linkedin-clone-86f74.firebaseapp.com",
    projectId: "linkedin-clone-86f74",
    storageBucket: "linkedin-clone-86f74.appspot.com",
    messagingSenderId: "76609636356",
    appId: "1:76609636356:web:709a0202bcebcea4e38d51"
  };

  
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  // export default firebase;
  export {db,auth};