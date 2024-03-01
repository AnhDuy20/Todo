import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRKD7fdTYucmc9FNLYCE5i2FOK_SZ1NiM",
    authDomain: "todo-d2f03.firebaseapp.com",
    databaseURL: "https://todo-d2f03-default-rtdb.firebaseio.com",
    projectId: "todo-d2f03",
    storageBucket: "todo-d2f03.appspot.com",
    messagingSenderId: "1080649502276",
    appId: "1:1080649502276:web:ac840b6287e081d7d57611",
    measurementId: "G-VPMRTK534P"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }