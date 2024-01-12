import React, { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';

const Quiz2 = () => {
  const questions = [
    {
      question: "Quel est l'objectif principal du Machine Learning selon le paragraphe?",
   options: [
    "a) Programmer explicitement les systèmes informatiques",
    "b) Comprendre les applications du traitement du langage naturel",
    "c) Permettre aux systèmes informatiques d'apprendre à partir de données",
    "d) Définir les différents types d'apprentissage supervisé et non supervisé"
  ],
  correctAnswer: "c"
    },
    {
      question: "Quel est le sujet principal du deuxième paragraphe?",
  options: [
    "a) Les applications du Machine Learning dans le traitement du langage naturel",
    "b) L'exploration des types d'apprentissage supervisé et non supervisé",
    "c) La description des principaux algorithmes du Machine Learning",
    "d) Les forces et les faiblesses des réseaux de neurones profonds"
  ],
  correctAnswer: "c"
    },
    {
      question: "Quels sont les trois aspects cruciaux abordés dans le troisième paragraphe?",
  options: [
    "a) La confidentialité des données, le traitement du langage naturel, la régression linéaire",
    "b) La discrimination algorithmique, les machines à vecteurs de support, les arbres de décision",
    "c) La reconnaissance d'images, la prise de décision, les réseaux de neurones profonds",
    "d) La confidentialité des données, la discrimination algorithmique, les biais inhérents aux modèles"
  ],
  correctAnswer: "d"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;

    userAnswers.forEach((userAnswer, index) => {
      if (questions[index] && userAnswer === questions[index].correctAnswer) {
        correctAnswers++;
      }
    });

    return (correctAnswers / questions.length) * 100;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl m-3 text-center">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Quiz - Chapitre 2</p>
        {/*<button type="button" className="text-xl font-semibold text-gray-500">
          <IoIosMore />
        </button>*/}
      </div>
      {showResult ? (
        <div>
          <h3 className="text-2xl mb-4">Résultats du Quiz:</h3>
          {userAnswers.map((answer, index) => (
            <p key={index} className="text-lg">{`Question ${index + 1}: Réponse - ${answer}`}</p>

          ))}
          <p className="text-lg">Pourcentage de réponses correctes: {calculateScore()}%</p>
          {/*<Button_bg
            color="white"
            bgColor="currentColor"
            text="Recommencer"
            borderRadius="10px"
            onClick={resetQuiz}
          />*/}
        </div>
      ) : (
        <div>
          {questions[currentQuestion] && (
            <>
              <h3 className="text-2xl mb-4">{questions[currentQuestion].question}</h3>
              <form>
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index}>
                    <label className="text-lg">
                    <input
  type="radio"
  name={`question-${currentQuestion}`}
  value={option.charAt(0)}
  checked={userAnswers[currentQuestion] === option.charAt(0)}
  onChange={() => handleOptionChange(option.charAt(0))}
/>
                      {option}
                    </label>
                  </div>
                ))}
              </form>
             {/* <Button_bg
                color="white"
                bgColor="currentColor"
                text="Suivant"
                borderRadius="10px"
                onClick={() => handleOptionChange(null)}
              />*/}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz2;