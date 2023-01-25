import React from 'react'
import { StyleSheet, View } from 'react-native';
import Game from './components/Game';
import HighScores from './components/HighScores';
import Home from './components/Home';
import {useDispatch, useSelector } from 'react-redux';
import { endGame, showHighscores, startGame } from './store/global';

export default function MainPage() {

    const page = useSelector(store => store.global.page);

    const dispatch = useDispatch();
  
    const gameOver = () => {
      dispatch(endGame())
    }

    const handleNewGame = () => {
        dispatch(startGame())
    }
  
    const handleClickHighscores = () => {
      dispatch(showHighscores())
    }
    
    const renderPage = () => {
      if (page === 'game') return <Game gameOver={gameOver} />
      else if (page === 'highscores') return <HighScores />
      else {
        return <Home newGame={() => handleNewGame()} highscores={() => handleClickHighscores()}/>
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
      width: '100%',
      backgroundColor: '#0000cc',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });