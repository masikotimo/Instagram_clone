
 import * as firebase from 'firebase';
 import firestore from 'firebase/firestore'

 
const firebaseConfig = {
    apiKey: "AIzaSyCZrDUF8lG0n22TYsCgJkODOEp7BcL5Tx0",
    authDomain: "instagram-clone-timo.firebaseapp.com",
    projectId: "instagram-clone-timo",
    storageBucket: "instagram-clone-timo.appspot.com",
    messagingSenderId: "1076485365600",
    appId: "1:1076485365600:web:1708cf96e94e1dd85b4805",
    measurementId: "G-TKT7CEVY0N"
    };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;