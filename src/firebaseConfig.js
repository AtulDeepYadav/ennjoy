// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9umHMA2XnimK_f0_8FEAa-EEK88mA2HM',
  authDomain: 'ennjoy-5ad0b.firebaseapp.com',
  projectId: 'ennjoy-5ad0b',
  appId: '1:393310568495:web:4839cd607c7eca105706da',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth instance
const auth = getAuth(app);
export { auth };
