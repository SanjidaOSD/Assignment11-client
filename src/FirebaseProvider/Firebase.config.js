import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCeAQxJoe1CboMj4NF41Cjv1xkIC2VqaeI",
  authDomain: "m63-assignment11.firebaseapp.com",
  projectId: "m63-assignment11",
  storageBucket: "m63-assignment11.appspot.com",
  messagingSenderId: "853006444009",
  appId: "1:853006444009:web:d0be1949f133d9cecc1778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;