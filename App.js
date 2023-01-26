
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import store  from './store/index';
import { Provider } from 'react-redux';
import MainPage from './MainPage';
import { Logs } from 'expo'


export default function App() {


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  Logs.enableExpoCliLogging()
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>

  );
}

