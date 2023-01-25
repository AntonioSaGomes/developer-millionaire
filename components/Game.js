import React, { useState, useEffect } from 'react';
import { View,Text } from 'react-native';
import Levels from './Levels';
import { getQuestions } from '../services/questions.service';
import Question from './Question';
import Lifeline from './Lifeline';
import { randomElements } from '../utils/utils';

const Game = ({gameOver}) => {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showLevelPage, setShowLevelPage] = useState(false);
  const [questions, setQuestions] = useState([]);
  const currentQuestionIndex = currentLevel;
  const totalLevels = 10;

  const handleSubmit = (selectedAnswer) => {
        setTimeout(() =>{
          if (selectedAnswer === currentQuestion.answer) {
            setCurrentLevel(currentLevel + 1);
            setShowLevelPage(true);
            setCurrentQuestion(questions[currentQuestionIndex])
          }
          else{
            gameOver();
          }
        },1000) 
    };

  const getDbQuestions = () => {
    getQuestions().then((querySnapshot) => {
        const questionsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setQuestions(questionsData);
        setCurrentQuestion(questionsData[0])
      });
    }

  useEffect(() => {
    getDbQuestions();
  },[])

  const fiftyFiftyLifeline = () => {
    const wrongAnswers = currentQuestion.options.map((answer, index) => {
      if (answer != currentQuestion.answer){
        return index;
      }
      return -1; 
    }).filter(x => x >= 0);
    const question = Object.assign({}, currentQuestion)
    randomElements(wrongAnswers,2).forEach((index) => {
      question.options[index] = "";
    });
    setCurrentQuestion(question)
  }

  useEffect(() => {
      if (showLevelPage) {
          setTimeout(() => {
              setShowLevelPage(false);
          }, 3000);
      }
  }, [showLevelPage]);

  if (showLevelPage) {
    return <Levels currentLevel={currentLevel} totalLevels={totalLevels} />;
  }

  return (
    <View>
      {currentQuestion &&  ( 
        <>
        <Question
          question={currentQuestion.question}
          answers={currentQuestion.options}
          correctAnswer={currentQuestion.answer}
          onSubmit={handleSubmit} />
          
          <Lifeline handleFiftyLifeline={fiftyFiftyLifeline}/>
      </>)
      }
    </View>
  );
};

export default Game;
