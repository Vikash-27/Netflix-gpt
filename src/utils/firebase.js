// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnUhAXIBdDNrp5ZhQTpnfiCTL5mB3YalE",
  authDomain: "netflixgpt-a781c.firebaseapp.com",
  projectId: "netflixgpt-a781c",
  storageBucket: "netflixgpt-a781c.appspot.com",
  messagingSenderId: "317247308320",
  appId: "1:317247308320:web:d83227bdd9cec09aedb245",
  measurementId: "G-GZ87SERHZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);