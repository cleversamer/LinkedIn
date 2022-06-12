import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: process.env["REACT_APP_PRIVATE_KEY"],
  authDomain: "samer-linkedin.firebaseapp.com",
  projectId: "samer-linkedin",
  storageBucket: "samer-linkedin.appspot.com",
  messagingSenderId: "696743810485",
  appId: "1:696743810485:web:1a71e92dbae0faae9cf5fc",
};

const app = initializeApp(config);

const db = getFirestore();

export const postsRef = collection(db, "posts");

export const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

export const auth = getAuth(app);

export const storage = getStorage(app);
