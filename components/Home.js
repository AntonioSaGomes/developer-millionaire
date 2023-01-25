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
              <Text style={styles.optionText}>New Game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}  onPress={() => handleHighScores()}>
              <Text style={styles.optionText}>Highscores</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}  onPress={() => handleSettings()}>
              <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  homeContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '90%',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20
  },
  homeText:{
    fontSize: 30,
    flexWrap: 'wrap',
    color: 'white'
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  option: {
    backgroundColor: '#2e2eb8',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: '100%',
    borderColor: 'black',
  },
  optionText:{
    fontSize: 20,
    color: 'white',
  }
});