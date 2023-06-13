import { Header } from '@components/Header';
import { useHideBottomTab } from '@hooks/navigation';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const Game: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/Game'>
> = ({ navigation, route }) => {
  useHideBottomTab();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      question: 'Quelle est la capitale de la Côte d Ivoire ?',
      options: ['Paris', 'Londres', 'Berlin', 'Abidjan'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Quelle est la capitale de la Côte d Ivoire ?',
      options: ['Paris', 'Londres', 'Berlin', 'Abidjan'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Quelle est la capitale de la Côte d Ivoire ?',
      options: ['Paris', 'Londres', 'Berlin', 'Abidjan'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Quelle est la capitale de la Côte d Ivoire ?',
      options: ['Paris', 'Londres', 'Berlin', 'Abidjan'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Quelle est la capitale de la Côte d Ivoire ?',
      options: ['Paris', 'Londres', 'Berlin', 'Abidjan'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Quelle est la capitale de la Côte d Ivoire ?',
      options: ['Paris', 'Londres', 'Berlin', 'Abidjan'],
      correctAnswer: 'Paris',
    }, 
    {
      question: 'Quelle est la plus grande planète du système solaire ?',
      options: ['Vénus', 'Jupiter', 'Mars', 'Saturne'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Quelle est la plus grande planète du système solaire ?',
      options: ['Vénus', 'Jupiter', 'Mars', 'Saturne'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Quelle est la plus grande planète du système solaire ?',
      options: ['Vénus', 'Jupiter', 'Mars', 'Saturne'],
      correctAnswer: 'Jupiter',
    },
    // Ajoutez plus de questions ici
  ];

  const handleAnswer = (answer: string) => {
    const question = questions[currentQuestion];

    if (answer === question.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Affichez les résultats du quiz lorsque toutes les questions ont été répondues
      alert(`Quiz terminé!\nScore: ${score} sur ${questions.length}`);
      // Réinitialisez le jeu
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  const renderOptions = (options: string[]) => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={styles.optionButton}
        onPress={() => handleAnswer(option)}
      >
        <Text style={styles.optionButtonText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  if (currentQuestion < questions.length) {
    return (
      <>
        <Header
          title="Jeux"
          showBackIcon
          onNavigateBack={navigation.goBack}
        />
        <View style={styles.container}>
          <Text style={styles.questionText}>
            Question {currentQuestion + 1}/{questions.length}:
          </Text>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
          {renderOptions(questions[currentQuestion].options)}
        </View>
      </>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#eaeaea',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionButtonText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default Game;
