import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
onAuthStateChanged,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyBJM2Oo0tR4CT1vDoeXcNhqw2tIpj1VXnw",

authDomain: "lacoapp.firebaseapp.com",

projectId: "lacoapp",

storageBucket: "lacoapp.firebasestorage.app",

messagingSenderId: "485009455528",

appId: "1:485009455528:web:0c43153be60e62cd6a459d",

measurementId: "G-MSB3J89XLL"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {

auth,
db,

onAuthStateChanged,

signInWithEmailAndPassword,
createUserWithEmailAndPassword,

signOut

};
