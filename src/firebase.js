import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCVzkTj79fzVRs3ilB8P39-cIXFW18JbZI",
  authDomain: "airbnb-clone-967db.firebaseapp.com",
  projectId: "airbnb-clone-967db",
  storageBucket: "airbnb-clone-967db.appspot.com",
  messagingSenderId: "983497287015",
  appId: "1:983497287015:web:63cb209409e2392fb9fbc2",
  measurementId: "G-FEPC3QXT9C"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const auth=firebaseApp.auth();
const firestore=firebaseApp.firestore();
const storage=firebaseApp.storage();
export {auth,firestore,storage};