import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './components/Game';
import HighScores from './components/HighScores';
import Home from './components/Home';
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

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
  const firestore = getFirestore(app);
  
  const [page, setPage] = useState('home');

  const gameOver = () => {
    setPage('home')
  }
  const renderPage = () =>{
    console.log('page', page);
    if (page === 'game') return <Game gameOver={gameOver} />
    else if (page === 'highscores') return <HighScores />
    else {
      console.log('render home');
      return <Home newGame={() => setPage('game')} highscores={() => setPage('highscores')}/>
    }
  }

  return (
    <View style={styles.container}>
      {renderPage()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
