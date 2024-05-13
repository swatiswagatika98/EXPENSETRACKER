
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTvIRiUbpt2SwWOPYZ9OlefTYaSnKQeMQ",
  authDomain: "expensetracker-2e487.firebaseapp.com",
  projectId: "expensetracker-2e487",
  storageBucket: "expensetracker-2e487.appspot.com",
  messagingSenderId: "245633108551",
  appId: "1:245633108551:web:6b7a4105a965281535ff62"
};

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export default firebaseApp;
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };