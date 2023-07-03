// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGESENDERID,
  appId: import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENTID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const AuthProvider=new GoogleAuthProvider();
export default app;
