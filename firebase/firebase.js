// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8yfhBWcwOiIMgKDnjz6NLF758snSLaZQ",
  authDomain: "financial-chatbot-5efb2.firebaseapp.com",
  projectId: "financial-chatbot-5efb2",
  storageBucket: "financial-chatbot-5efb2.firebasestorage.app",
  messagingSenderId: "591847070364",
  appId: "1:591847070364:web:5a84d92993490c5d966b59",
  measurementId: "G-5EQ70NMNG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };