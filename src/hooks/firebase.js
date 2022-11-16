import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3mHRTYUvITin8OsaaXNR52DSmUYDPbT0",
  authDomain: "epsdata-e591c.firebaseapp.com",
  projectId: "epsdata-e591c",
  storageBucket: "epsdata-e591c.appspot.com",
  messagingSenderId: "199581066957",
  appId: "1:199581066957:web:8a936aabbc782998c0eb84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export default firestore