import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCts5OsgROgwwajd1xcPRTJx20qcOFJhzo",
  authDomain: "chat-react-6380e.firebaseapp.com",
  projectId: "chat-react-6380e",
  storageBucket: "chat-react-6380e.appspot.com",
  messagingSenderId: "1094014643727",
  appId: "1:1094014643727:web:3d7d3017740ee8f9237d7a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {auth, db}