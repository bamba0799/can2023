import { Header } from '@components/Header';
import { useHideBottomTab } from '@hooks/navigation';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
      question:
        'Le Sénégal a remporté la dernière Coupe de la Coupe d Afrique des Nations en 2019 . ?',
      options: ['Vrai', 'Faux'],
      correctAnswer: 'Faux',
    },
    {
      question: 'Quelle est la capitale de la Côte d Ivoire ?',
      options: ['Paris', 'Londres', 'Berlin', 'Abidjan'],
      correctAnswer: 'Paris',
    },

    {
      question:
        'Le Soudan a accueilli la première édition de la Coupe d Afrique des Nations en 1957.',
      options: ['Vrai', 'Faux'],
      correctAnswer: 'Vrai',
    },
    {
      question:
        "Parmi ces pays, lequel détient le record du plus grand nombre de titres remportés en Coupe d'Afrique des Nations?",
      options: ['Ghana', 'Égypte', 'Nigeria', 'Cameroun'],
      correctAnswer: 'Égypte',
    },
    {
      question:
        "Qui est le meilleur buteur de tous les temps en Coupe d'Afrique des Nations?",
      options: ['Samuel Etoo', 'Didier Drogba', 'Hossam Hassan', 'Roger Milla'],
      correctAnswer: 'Samuel Etoo',
    },
    {
      question:
        "Combien d'équipes participent à de la Coupe d'Afrique des Nations ?",
      options: ['16', '24', '32', '20'],
      correctAnswer: '24',
    },
    {
      question:
        'Qui a été le meilleur buteur de la Coupe du Monde de la FIFA 2014 ?',
      options: ['Lionel Messi', 'Neymar', 'James Rodríguez', 'Thomas Müller'],
      correctAnswer: 'James Rodríguez',
    },
    {
      question: "Quelle est la langue officielle de l'Australie ?",
      options: ['Anglais.', 'Français.', 'Aborigène.', 'Allemand'],
      correctAnswer: 'Anglais',
    },
    {
      question: "Quel est le groupe ethnique majoritaire en Côte d'Ivoire ?",
      options: ['Akan', 'Baoulé', 'Bété', 'Sénoufo'],
      correctAnswer: 'Akan',
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

        <View className="mt-10 h-[250] w-full">
          <Image
            source={require('./../extra/../../assets/images/yes.png')}
            resizeMode="contain"
            className="h-full w-full "
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        <View style={styles.container}>
          <Text
            style={styles.questionText}
            className="mt-2"
          >
            Question {currentQuestion + 1}/{questions.length}:
          </Text>
          <Text
            style={styles.questionText}
            className="mt-4"
          >
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

export { Game };
