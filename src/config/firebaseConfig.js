import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {  
  apiKey: "AIzaSyBZO-1rFDWSkgRY7l9DAkhh_qTdokjCcXU",
  authDomain: "conference-1734b.firebaseapp.com",
  databaseURL: 'https://conference-1734b.firebaseio.com',
  projectId: "conference-1734b",
  storageBucket: "conference-1734b.appspot.com",
  messagingSenderId: "631355510978",
  appId: "1:631355510978:web:5a02c569f65bf210c12b5b",
  measurementId: "G-E4P45EH5L4"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
