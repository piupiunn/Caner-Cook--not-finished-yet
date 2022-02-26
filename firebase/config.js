import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7y5EzR-RO8lA6YNCg8yxaPI26bddMRv8",
  authDomain: "caner-cook.firebaseapp.com",
  projectId: "caner-cook",
  storageBucket: "caner-cook.appspot.com",
  messagingSenderId: "460157790545",
  appId: "1:460157790545:web:36089e8bdd145c2f530b70",
};

//init firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth };
