import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config
 apiKey: "AIzaSyCR8KNLh5YCOcY19u6sTtkHWCao4rkeW-Q",
  authDomain: "sonic-meet-7b826.firebaseapp.com",
  projectId: "sonic-meet-7b826",
  storageBucket: "sonic-meet-7b826.firebasestorage.app",
  messagingSenderId: "554327446243",
  appId: "1:554327446243:web:0185f6d1c913f8b147ebd6",
  measurementId: "G-XG4Y2TMTN1"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
