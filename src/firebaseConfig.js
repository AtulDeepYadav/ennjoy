import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9umHMA2XnimK_f0_8FEAa-EEK88mA2HM",
  authDomain: "ennjoy-5ad0b.firebaseapp.com",
  projectId: "ennjoy-5ad0b",
  storageBucket: "ennjoy-5ad0b.firebasestorage.app",
  messagingSenderId: "393310568495",
  appId: "1:393310568495:web:4839cd607c7eca105706da",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

