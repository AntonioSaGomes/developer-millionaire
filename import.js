//import { doc, setDoc } from "firebase/firestore"; 
const customData = require('./html_questions.json');
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc  } = require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyDIqQ8QH4F5GkG7LtwJPxQ7lW-7NJXVX0c",
  authDomain: "front-end-millionaire.firebaseapp.com",
  projectId: "front-end-millionaire",
  storageBucket: "front-end-millionaire.appspot.com",
  messagingSenderId: "287799946474",
  appId: "1:287799946474:web:92de2af1888332674c3b93",
  measurementId: "G-7N7JHNSDSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);



function importData() {
  customData.forEach(
    async (data) => {
      await addDoc(collection(firestore, "Questions"), data)
    }
  )
}

importData()


// Add a new document in collection "cities"
