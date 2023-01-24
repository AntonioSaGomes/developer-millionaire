import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Timer from './Timer';

const Question = ({question, answers, onSubmit, correctAnswer}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [isTiming, setIsTiming] = useState(false);
  const stopTimer = isTiming;
  const time = 30;

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setIsTiming(true);
  };

  useEffect(() => {
    if (isTiming) {
      setTimeout(() => {
        if (selectedAnswer === correctAnswer) {
          setAnswerStatus('correct');
        } else {
          setAnswerStatus('incorrect');
        }
        setIsTiming(false);
        onSubmit(selectedAnswer);
      }, 2000);
    }
  }, [isTiming]);

  const renderAnswer = (answer, index) => {
    let backgroundColor = 'white';
    if (answerStatus === 'correct' && answer === correctAnswer) {
      backgroundColor = 'green';
    } else if (answerStatus === 'incorrect' && answer === selectedAnswer) {
      backgroundColor = 'red';
    } else if (answer === selectedAnswer) {
      backgroundColor = 'blue';
    }
    return (
      <TouchableOpacity
        key={index}
        style={[styles.answer, { backgroundColor }]}
        onPress={() => handleAnswerSelection(answer)}
        disabled={answerStatus !== null}
      >
        <Text style={styles.answerText}>{answer}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Timer time={time} stop={stopTimer} />
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
      </View>
      <View style={styles.answersContainer}>
        {answers.map(renderAnswer)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    margin: 20,
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
  },
  answersContainer: {
    marginTop: 20,
    width: '100%',
  },
  answer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  answerText: {
    fontSize: 16,
  },
});

export default Question;
