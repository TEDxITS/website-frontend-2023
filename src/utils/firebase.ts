// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkz8aBISTjseRnsg2A0Xom0h7cVPvDyPs',
  authDomain: 'vault-dhana.firebaseapp.com',
  projectId: 'vault-dhana',
  storageBucket: 'vault-dhana.appspot.com',
  messagingSenderId: '911187516953',
  appId: '1:911187516953:web:bf8eef47f993dd6a7ad488',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
