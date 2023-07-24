// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA75rabFGmFd5SCNyWYc89Ny4B5BZRal_4",
  authDomain: "doubtlesstest.firebaseapp.com",
  projectId: "doubtlesstest",
  storageBucket: "doubtlesstest.appspot.com",
  messagingSenderId: "222602319674",
  appId: "1:222602319674:web:dc015c19d278305173e203",
  measurementId: "G-8T6161KCGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const AuthProvider=new GoogleAuthProvider();




export default app;


