import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Home({newGame, highscores}) {
  const handleNewGame = () => {
    newGame();
  }

  const handleHighScores = () => {
    highscores();
  }

  return (
    <View style={styles.homeContainer}>
        <Text style={styles.homeText}>
            Who wants to be a Developer?
        </Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option} onPress={() => handleNewGame()}>
              <Text style={styles.answerText}>New Game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}  onPress={() => handleHighScores()}>
              <Text style={styles.answerText}>Highscores</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

  homeContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText:{
    fontSize: '20px',
    color: 'blue'
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  option: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
});