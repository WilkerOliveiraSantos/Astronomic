import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button, ProgressBar, RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Splash from '../janelas/splash';
import DadosCliente from './DadosCliente';
import quizData from '../Quiz';

const TIMER_DURATION = 10;

export default function Principal() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(TIMER_DURATION);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      handleNextQuestion();
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = () => {
    if (quizComplete) return;

    if (quizData[currentQuestion].correctAnswer === selectedOption) {
      setScore(score + 1);
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimer(TIMER_DURATION);
    } else {
      setQuizComplete(true);
    }
  };

  const renderOptions = () => {
    return quizData[currentQuestion].options.map((option, index) => (
      <RadioButton.Item
        key={index}
        label={option}
        value={option}
        status={selectedOption === option ? 'checked' : 'unchecked'}
        onPress={() => setSelectedOption(option)}
        style={styles.option}
        labelStyle={styles.optionText}
        disabled={quizComplete}
      />
    ));
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimer(TIMER_DURATION);
    setSelectedOption(null);
    setQuizComplete(false);
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={timer / TIMER_DURATION} color="#3498db" style={styles.progressBarStyle} />
      <Text style={styles.questionTextStyle}>{quizData[currentQuestion].question}</Text>
      <ScrollView style={styles.optionsContainer}>{renderOptions()}</ScrollView>
      <TouchableOpacity
        style={[styles.answerButtonStyle, { opacity: selectedOption === null ? 0.5 : 1 }]}
        onPress={handleAnswer}
        disabled={!selectedOption || quizComplete}
      >
        <Text style={styles.buttonTextStyle}>Responder</Text>
      </TouchableOpacity>
      <Text style={styles.scoreTextStyle}>Pontuação: {score}</Text>
      {quizComplete && (
        <View>
          <Text style={styles.scoreTextStyle}>Quiz Concluído!</Text>
          <Button mode="contained" style={styles.restartButton} onPress={restartQuiz}>
            Reiniciar o Quiz
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#87CEFA',
  },
  progressBarStyle: {
    marginTop: 16,
    width: '100%',
  },
  questionTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: '#202020',
  },
  optionsContainer: {
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#202020',
  },
  answerButtonStyle: {
    backgroundColor: '#00FF7F',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  scoreTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  restartButton: {
    marginTop: 16,
  },
});
