
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUUWFI-zuWAARy0z50kbrwzxohBVqU3Lw",
  authDomain: "fir-course-b6fcb.firebaseapp.com",
  projectId: "fir-course-b6fcb",
  storageBucket: "fir-course-b6fcb.appspot.com",
  messagingSenderId: "748878119323",
  appId: "1:748878119323:web:125baac44ece9d5839613e",
  measurementId: "G-0H4DZQP3P2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)