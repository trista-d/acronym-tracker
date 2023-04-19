// Firebase configuration. It is safe to put these credentials in a public repo
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyFcn8RI2HOEbHJKjCaFFX5pWKo7_oY1s",
  authDomain: "acronym-tracker.firebaseapp.com",
  projectId: "acronym-tracker",
  storageBucket: "acronym-tracker.appspot.com",
  messagingSenderId: "83876364873",
  appId: "1:83876364873:web:d37de1c82a34c46afa7598",
  databaseURL: "https://acronym-tracker-default-rtdb.firebaseio.com"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);