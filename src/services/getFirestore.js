import firebase from "firebase"
import "firebase/firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC_R8oFMM0xdlxo4MAUnsJ-_3zCjDdlUiA",
    authDomain: "gonat---celulares.firebaseapp.com",
    projectId: "gonat---celulares",
    storageBucket: "gonat---celulares.appspot.com",
    messagingSenderId: "126871132789",
    appId: "1:126871132789:web:8e19d78da5f0710121b63c"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore() {

    return firebase.firestore(app)
  }