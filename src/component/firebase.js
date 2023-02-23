import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCublxBhtVcvNyho4wc3J1bDxni0PkcWhw",
    authDomain: "purposal-9a677.firebaseapp.com",
    projectId: "purposal-9a677",
    storageBucket: "purposal-9a677.appspot.com",
    messagingSenderId: "903325740993",
    appId: "1:903325740993:web:6e4abcdddf6f5de4778940",
    databaseURL: "https://console.firebase.google.com/project/purposal-9a677/database/purposal-9a677-default-rtdb/data/~2F"
  };
  export  const app = initializeApp(firebaseConfig);
  export  const database = getFirestore(app);