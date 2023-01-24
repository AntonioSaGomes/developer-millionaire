import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Levels from './components/Levels';
import Lifeline from './components/Lifeline';
import Question from './components/Question';
import Timer from './components/Timer';

const AnimatedApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    question: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 'Paris',
  });
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showLevelPage, setShowLevelPage] = useState(false);
  const [questionPageOpacity, setQuestionPageOpacity] = useState(new Animated.Value(1));
  const [levelPageOpacity, setLevelPageOpacity] = useState(new Animated.Value(0));
  const totalQuestions = 10;
  const totalLevels = 10;
  const time= 30;

  const handleSubmit = (selectedAnswer) => {
    console.log('selectedAnswer')
    if (selectedAnswer === currentQuestion.correctAnswer) {
        setCurrentLevel(currentLevel + 1);
        setShowLevelPage(true);
    }
  };

  useEffect(() => {
    if (showLevelPage) {
        Animated.timing(questionPageOpacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start();
        Animated.timing(levelPageOpacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    } else {
        Animated.timing(questionPageOpacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
        Animated.timing(levelPageOpacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }).start();
      }
    }, [showLevelPage]);
  
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.questionPage, { opacity: questionPageOpacity }]}>
          <Question
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            correctAnswer={currentQuestion.correctAnswer}
            onSubmit={handleSubmit}
          />
          <Lifeline
            answers={currentQuestion.answers}
            correctAnswer={currentQuestion.correctAnswer}
          />
          <Timer time={time} />
        </Animated.View>
        <Animated.View style={[styles.levelPage, { opacity: levelPageOpacity }]}>
          <Levels currentLevel={currentLevel} totalLevels={totalLevels} />
        </Animated.View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    questionPage: {
      flex: 1,
    },
    levelPage: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  
  export default AnimatedApp;
  