import React, { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';

const Quiz1 = () => {
  const questions = [
    {
      question: "Qu'est-ce que le prétraitement des données dans le contexte du Machine Learning?",
      options: [
        "a) Un processus visant à créer de nouvelles variables",
        "b) La transformation des variables numériques en variables catégorielles",
        "c) Les étapes effectuées sur les données avant de les utiliser pour entraîner un modèle",
        "d) La suppression de toutes les valeurs aberrantes"
      ],
      correctAnswer: "c"
    },
    {
      question: "Quelle est la principale raison pour laquelle le feature engineering est important?",
      options: [
        "a) Pour rendre les modèles plus complexes",
        "b) Pour réduire la dimensionnalité des données",
        "c) Pour améliorer la performance des modèles en créant des variables informatives",
        "d) Pour accélérer le processus d'entraînement des modèles"
      ],
      correctAnswer: "c"
    },
    {
      question: "Quelle méthode de validation est souvent utilisée pour évaluer les performances des modèles de Machine Learning?",
      options: [
        "a) La séparation des données",
        "b) La validation croisée",
        "c) L'échantillonnage stratifié",
        "d) La normalisation des données"
      ],
      correctAnswer: "b"
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
        <p className="text-xl font-semibold">Quiz - Chapitre 1</p>
        <button type="button" className="text-xl font-semibold text-gray-500">
          <IoIosMore />
        </button>
      </div>
      {showResult ? (
        <div>
          <h3 className="text-2xl mb-4">Résultats du Quiz:</h3>
          {userAnswers.map((answer, index) => (
            <p key={index} className="text-lg">{`Question ${index + 1}: Réponse - ${answer}`}</p>
          ))}
          <p className="text-lg">Pourcentage de réponses correctes: {calculateScore()}%</p>
          <Button_bg
            color="white"
            bgColor="currentColor"
            text="Recommencer"
            borderRadius="10px"
            onClick={resetQuiz}
          />
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
              <Button_bg
                color="white"
                bgColor="currentColor"
                text="Suivant"
                borderRadius="10px"
                onClick={() => handleOptionChange(null)}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz1;
