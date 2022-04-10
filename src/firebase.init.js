
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

 


// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_ID
//   };
  


const firebaseConfig = {
  apiKey: "AIzaSyDqEj74ov670LN1ZRO9nmMDIApBcBDWJTo",
  authDomain: "ema-jhon-simple-e6194.firebaseapp.com",
  projectId: "ema-jhon-simple-e6194",
  storageBucket: "ema-jhon-simple-e6194.appspot.com",
  messagingSenderId: "829455620509",
  appId: "1:829455620509:web:55fb31ae13d4d0a7863774"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
