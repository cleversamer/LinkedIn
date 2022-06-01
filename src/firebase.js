import { initializeApp } from "firebase/app";

const config = {
  apiKey: process.env["REACT_APP_PRIVATE_KEY"],
  authDomain: "samer-linkedin.firebaseapp.com",
  projectId: "samer-linkedin",
  storageBucket: "samer-linkedin.appspot.com",
  messagingSenderId: "696743810485",
  appId: "1:696743810485:web:1a71e92dbae0faae9cf5fc",
};

initializeApp(config);
