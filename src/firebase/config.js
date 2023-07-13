// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_APIKEY,
//   authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_APP_PROJECTID,
//   storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGESENDERID,
//   appId: import.meta.env.VITE_APP_APPID,
//   measurementId: import.meta.env.VITE_APP_MEASUREMENTID
// };
const firebaseConfig = {
  apiKey: "AIzaSyD7a6k8GkGqc9mAxlvrfGi8v5tMHtAyxts",
  authDomain: "dbless-1ce45.firebaseapp.com",
  projectId: "dbless-1ce45",
  storageBucket: "dbless-1ce45.appspot.com",
  messagingSenderId: "276635990217",
  appId: "1:276635990217:web:ddbc34b22090ad81be7518",
  measurementId: "G-CH3R09TWBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const AuthProvider=new GoogleAuthProvider();
export default app;
