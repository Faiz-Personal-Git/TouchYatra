

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK21FFBqrDWMIYec5Fl6ru3dCTSPzE3-E",
  authDomain: "touchyatra-auth.firebaseapp.com",
  projectId: "touchyatra-auth",
  storageBucket: "touchyatra-auth.firebasestorage.app",
  messagingSenderId: "661719128905",
  appId: "1:661719128905:web:eb4f2829d0b95bd8145898",
  measurementId: "G-HL494JZKEV"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPopup
};
