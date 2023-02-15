import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyByJ_DneDBwPBy-KyyoCkimyksetYcNGYE",
  authDomain: "tastycaffe-38e0d.firebaseapp.com",
  databaseURL: "https://tastycaffe-38e0d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tastycaffe-38e0d",
  storageBucket: "tastycaffe-38e0d.appspot.com",
  messagingSenderId: "254642757198",
  appId: "1:254642757198:web:08a036c070b5a032ff6d1f"
};

const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}
